import {
	makeApiRequest,
	generateSymbol,
	parseFullSymbol,
	makeApiRequest2,
	makeApiRequest3,
	getSearchDatas,
} from './helpers.js';
import { subscribeOnStreams } from './macmsocket.js';
import {
	subscribeOnStream,
	unsubscribeFromStream,
} from './streaming.js';

const lastBarsCache = new Map();
const macmLastBarcache = new Map();
let cmpName = `${new URLSearchParams(window.location.search).get('sym')}`;
let desc = `${new URLSearchParams(window.location.search).get('sym')}`;
let exch = `${new URLSearchParams(window.location.search).get('exch')}`;
let value = `${new URLSearchParams(window.location.search).get('sym')}` + "-EQ";
let type = 'EQT';
let sym = `${new URLSearchParams(window.location.search).get('sym')}`;
let tk = "";
// DatafeedConfiguration implementation
const configurationData = {
	supported_resolutions: [
		"1",
		"2",
		"3",
		"4",
		"5",
		"10",
		"15",
		"30",
		"60",
		"75",
		"120",
		"125",
		"180",
		"1D",
		"1W",
		"1M",
	],
	exchanges: [
		{
			value: value,
			name: cmpName,
			desc: desc,
		},
		{
			// `exchange` argument for the `searchSymbols` method, if a user selects this exchange
			value: value,

			// filter name
			name: cmpName,

			// full exchange name displayed in the filter popup
			desc: desc,
		},
	],
	symbols_types: [
		{
			name: type,

			// `symbolType` argument for the `searchSymbols` method, if a user selects this symbol type
			value: type,
		},
		// ...
	],
};

// Obtains all symbols for all exchanges supported by CryptoCompare API
async function getSearchData(text) {
	let allSymbols = [];
	const data = await getSearchDatas(text);
	data.map((searchdata) => {
		allSymbols.push({ "symbol": searchdata.Sym_t, "full_name": searchdata.Sym_t + "-" + searchdata.Sid_s+"-"+searchdata._Exch_s
		, "description": "", 'exchange': searchdata.d_exch_t, "tk": searchdata.Sid_s })
	})
	return allSymbols;
}
async function getAllSymbols() {
	const data = await makeApiRequest('data/v3/all/exchanges');
	let allSymbols = [];

	for (const exchange of configurationData.exchanges) {
		const pairs = data.Data[exchange.value].pairs;

		for (const leftPairPart of Object.keys(pairs)) {
			const symbols = pairs[leftPairPart].map(rightPairPart => {
				const symbol = generateSymbol(exchange.value, leftPairPart, rightPairPart);
				return {
					symbol: symbol.short,
					full_name: symbol.full,
					description: symbol.short,
					exchange: exchange.value,
					//type: 'crypto',

				};
			});
			allSymbols = [...allSymbols, ...symbols];
		}
	}
	return allSymbols;
}
function switchResult(resolution) {
	if (resolution !== undefined) {   //Expected '!==' and instead saw '!=' eqeqeq - Warning - OR
		switch (resolution) {
			case "1":

				return "1Min"
			case "2":

				return "2Min"
			case "3":

				return "3Min"
			case "4":

				return "4Min"
			case "5":

				return "5Min"
			case "10":

				return "10Min"
			case "15":

				return "15Min"
			case "30":

				return "30Min"
			case "75":

				return "75Min"
			case "125":

				return "125Min"
			case "60":

				return "1Hr"
			case "120":

				return "2Hr"
			case "180":

				return "3Hr"

			case "1D":

				return "1Day"
			default: return "1D"
		}
	}


}
export default {
	onReady: (callback) => {
		setTimeout(() => callback(configurationData));
	},

	searchSymbols: async (
		userInput,
		exchange,
		symbolType,
		onResultReadyCallback,
	) => {
		const temp1 = await getSearchData(userInput);
		onResultReadyCallback(temp1);
		// const symbols = await getAllSymbols();
		// const newSymbols = symbols.filter(symbol => {
		// 	const isExchangeValid = exchange === '' || symbol.exchange === exchange;
		// 	const isFullSymbolContainsInput = symbol.full_name
		// 		.toLowerCase()
		// 		.indexOf(userInput.toLowerCase()) !== -1;
		// 	return isExchangeValid && isFullSymbolContainsInput;
		// });
		// onResultReadyCallback(newSymbols);
	},

	resolveSymbol: async (

		symbolName,
		onSymbolResolvedCallback,
		onResolveErrorCallback,
		extension,
		tk,
	) => {
		//Fetch from Query Params
		if (symbolName.indexOf("-") == -1) {
			tk = new URLSearchParams(window.location.search).get('secid');
            exch=new URLSearchParams(window.location.search).get('exch')
		}
		else {
			tk = symbolName.split("-")[1];
			exch=symbolName.split("-")[1]

		}
		
		// Symbol information object
		const symbolInfo = {
			ticker: "",
			name: symbolName.split("-")[0],
			description: desc,
			type: "stock",
			session: "0930-1630:23456",
			session: '24x7',
			//timezone: 'Etc/UTC',
			session: "0900-1600",
			timezone: "Asia/Kolkata",
			exchange: exch,
			minmov: 1,
			pricescale: 100,
			// minmove2 = 0,
			has_intraday: true,
			has_no_volume: false,
			tk: tk,
			intraday_multipliers: configurationData.supported_resolutions,
			has_daily: true,
			has_weekly_and_monthly: false,
			supported_resolutions: configurationData.supported_resolutions,
			volume_precision: 2,
			data_status: "streaming",
			macmex:exch=="NSE"?1:exch=="BSE"?4:2,
		};
		onSymbolResolvedCallback(symbolInfo);
	},

	getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
		const { from, to, firstDataRequest, countBack } = periodParams;
		
		try {
			const resp = await makeApiRequest2(symbolInfo.macmex,symbolInfo.name, symbolInfo.tk, from, to,switchResult(resolution));
			resp.reverse();
			//resp.sort();
			//const resp=await makeApiRequest3();
			// if (data.Response && data.Response === 'Error' || data.Data.length === 0) {
			// 	// "noData" should be set if there is no data in the requested period
			// 	onHistoryCallback([], {
			// 		noData: true,
			// 	});
			// 	return;
			// }
			if (resp == undefined && resp.length == 0) {
				onHistoryCallback([], {
					noData: true,
				});
				return
			}
			let bars = [];
			resp.forEach(bar => {
				if (bar.time >= from * 1000 && bar.time < to * 1000) {
					bars = [...bars, {
						time: bar.time,
						low: bar.low,
						high: bar.high,
						open: bar.open,
						close: bar.close,
					}];
				}
			});
			if (firstDataRequest) {
				macmLastBarcache.set(symbolInfo.tk, {
					...bars[bars.length - 1],
				});
				lastBarsCache.set(symbolInfo.full_name, {
					...bars[bars.length - 1],
				});
			}
			onHistoryCallback(bars, {
				noData: false,
			});
		} catch (error) {
			console.log('[getBars]: Get error', error);
			onErrorCallback(error);
		}
	},

	subscribeBars: (
		symbolInfo,
		resolution,
		onRealtimeCallback,
		subscriberUID,
		onResetCacheNeededCallback,
	) => {
		subscribeOnStreams(symbolInfo,
			resolution,
			onRealtimeCallback,
			subscriberUID,
			onResetCacheNeededCallback,
			macmLastBarcache.get(symbolInfo.tk),
			symbolInfo.tk);
		// subscribeOnStream(
		// 	symbolInfo,
		// 	resolution,
		// 	onRealtimeCallback,
		// 	subscriberUID,

		// 	onResetCacheNeededCallback,
		// 	lastBarsCache.get(symbolInfo.full_name),
		// 	22
		// );
	},

	unsubscribeBars: (subscriberUID) => {
		unsubscribeFromStream(subscriberUID);
	},
};
