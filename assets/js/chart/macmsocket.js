import { parseFullSymbol } from './helpers.js';


const testmap1=new Map();
let socket ="";
let heartBeatInterval;
let heartbeatTimer;
let backuptk;

export function connectWs()
{
	 socket=new WebSocket(`wss://wsbprod.mirae-asset.co.in/ws?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJtaXJhZS5pbiIsImV4cCI6MTcwNzUzNTg5MywiaWF0IjoxNzA3NDQ5NDkzLCJpc3MiOiJtaXJhZS5pbiIsIm5iZiI6MTQ0NDQ3ODQwMCwidGlkIjoiMTYiLCJ1aWQiOiIzNyJ9.iQD7hoIkfwe5l2tukvvmZ-sPbw2_fr4nYlO3Uc2-Hks`);
	 socket.onopen=function(){
console.log("socket connected");
var buffer = new ArrayBuffer(10);
	var view1 = new DataView(buffer);
	view1.setUint8(0,23);
    //1-Eq,2-fo, 3-CD,4 BseEq 
   view1.setUint8(1,1);
   view1.setInt32(2,swap32(backuptk));
   socket.send(view1,10);
	 }
	 socket.onclose=function(){
		console.log("socket closed");
		connectWs();
	 }
	 socket.onerror=function(){
		console.log("socket error");
	 }
	 socket.onmessage = function (msg) {

	
		var fileReader = new FileReader();
		fileReader.onload = function () {
		// 	clearTimeout(heartbeatTimer);
		// 	heartbeatTimer=setTimeout(()=>{
        // socket.close();
		// 	},1000)
		//	heartbeatTimer = setTimeout(sendHeartbeat, 1000);
			var dv = new DataView(this.result, 0);
			console.log("buffer",dv.buffer.byteLength);
			for (let nCount = 0; nCount <= dv.buffer.byteLength; nCount++ ){
				if(dv.getUint8(0, true) == 21)
				{
					const feedDataobject= {
						ex: dv.getUint8(1, true),
						Token: dv.getInt32(2, true),
						sequence: dv.getUint8(6, true),
						type: dv.getInt8(7, true),
						ltp: dv.getInt32(8, true),
					   
					  };
			
					  nCount+= 12;
					  console.log("feedobject",feedDataobject);
					//  tempkeys[feedDataobject.Token]=feedDataobject;
				}
				else if(dv.getUint8(0, true) == 25) {

				}
				else if(dv.getUint8(0, true) == 23) {
					const feedDataobject = {
						ex: dv.getInt8(1, true),
						Token: dv.getInt32(2, true),
						sequence: dv.getUint8(6, true),
						type: dv.getInt8(7, true),
						ltp: dv.getInt32(8, true),
						volume: dv.getInt32(12, true),
						avt: dv.getInt32(16, true),
						hp: dv.getInt32(20, true),
						lp: dv.getInt32(24, true),
						oi: dv.getInt32(28, true),
						op: dv.getInt32(32, true),
						pcl: dv.getInt32(36, true),
						hdpr: dv.getInt32(40, true),
						ldpr: dv.getInt32(44, true),
						bq1: String(dv.getInt32(48, true)),
						bp1: String(dv.getInt32(52, true)),
						lut: (dv.getInt32(64, true)),
			
						bq2: String(dv.getInt32(68, true)),
						bp2: String(dv.getInt32(72, true)),
						bno2: String(dv.getInt16(76, true)),
			
						bq3: String(dv.getInt32(78, true)),
						bp3: String(dv.getInt32(82, true)),
						bno3: String(dv.getInt16(86, true)),
			
						bq4: String(dv.getInt32(88, true)),
						bp4: String(dv.getInt32(92, true)),
						bno4: String(dv.getInt16(96, true)),
			
						bq5: String(dv.getInt32(98, true)),
						bp5: String(dv.getInt32(102, true)),
						bno5: String(dv.getInt16(106, true)),
			
						sq1: String(dv.getInt32(56, true)),
						sp1: String(dv.getInt32(60, true)),
						sno1: String(dv.getInt16(66, true)),
			
						sq2: String(dv.getInt32(108, true)),
						sp2: String(dv.getInt32(112, true)),
						sno2: String(dv.getInt16(116, true)),
			
						sq3: String(dv.getInt32(118, true)),
						sp3: String(dv.getInt32(122, true)),
						sno3: String(dv.getInt16(126, true)),
			
						sq4: String(dv.getInt32(128, true)),
						sp4: String(dv.getInt32(132, true)),
						sno4: String(dv.getInt16(136, true)),
			
						sq5: String(dv.getInt32(138, true)),
						sp5: String(dv.getInt32(142, true)),
						sno5: String(dv.getInt16(146, true)),
			
			
						tbq: String(dv.getFloat64(148, true)),
						tsq: String(dv.getFloat64(156, true)),
						ltt:(dv.getInt32(176,true))
					   
					  };
			
					  nCount+= 180;
					  renderCandle(feedDataobject);
					  // tempkeys[feedDataobject.Token]=feedDataobject;
			
				}
			}
		}
		fileReader.readAsArrayBuffer(msg.data);
	}
}
// socket.onopen = function(e) {
 
//   }

//   socket.onclose = function () {
// 	displayMessage("[Socket]: Disconnected !\n");
	
//   };
//   socket.onerror = function () {
//       displayMessage("[Socket]: Error !\n");
//     };

// 	socket.onmessage = function (msg) {

	
// 		var fileReader = new FileReader();
// 		fileReader.onload = function () {
// 			clearTimeout(heartbeatTimer);
// 			heartbeatTimer=setTimeout(()=>{
//         socket.close();
// 			},1000)
// 		//	heartbeatTimer = setTimeout(sendHeartbeat, 1000);
// 			var dv = new DataView(this.result, 0);
// 			for (let nCount = 0; nCount <= dv.buffer.byteLength; nCount++ ){
// 				if(dv.getUint8(0, true) == 21)
// 				{
// 					const feedDataobject= {
// 						ex: dv.getUint8(1, true),
// 						Token: dv.getInt32(2, true),
// 						sequence: dv.getUint8(6, true),
// 						type: dv.getInt8(7, true),
// 						ltp: dv.getInt32(8, true),
					   
// 					  };
			
// 					  nCount+= 12;
// 					//  tempkeys[feedDataobject.Token]=feedDataobject;
// 				}
// 				else if(dv.getUint8(0, true) == 25) {

// 				}
// 				else if(dv.getUint8(0, true) == 23) {
// 					const feedDataobject = {
// 						ex: dv.getInt8(1, true),
// 						Token: dv.getInt32(2, true),
// 						sequence: dv.getUint8(6, true),
// 						type: dv.getInt8(7, true),
// 						ltp: dv.getInt32(8, true),
// 						volume: dv.getInt32(12, true),
// 						avt: dv.getInt32(16, true),
// 						hp: dv.getInt32(20, true),
// 						lp: dv.getInt32(24, true),
// 						oi: dv.getInt32(28, true),
// 						op: dv.getInt32(32, true),
// 						pcl: dv.getInt32(36, true),
// 						hdpr: dv.getInt32(40, true),
// 						ldpr: dv.getInt32(44, true),
// 						bq1: String(dv.getInt32(48, true)),
// 						bp1: String(dv.getInt32(52, true)),
// 						lut: (dv.getInt32(64, true)),
			
// 						bq2: String(dv.getInt32(68, true)),
// 						bp2: String(dv.getInt32(72, true)),
// 						bno2: String(dv.getInt16(76, true)),
			
// 						bq3: String(dv.getInt32(78, true)),
// 						bp3: String(dv.getInt32(82, true)),
// 						bno3: String(dv.getInt16(86, true)),
			
// 						bq4: String(dv.getInt32(88, true)),
// 						bp4: String(dv.getInt32(92, true)),
// 						bno4: String(dv.getInt16(96, true)),
			
// 						bq5: String(dv.getInt32(98, true)),
// 						bp5: String(dv.getInt32(102, true)),
// 						bno5: String(dv.getInt16(106, true)),
			
// 						sq1: String(dv.getInt32(56, true)),
// 						sp1: String(dv.getInt32(60, true)),
// 						sno1: String(dv.getInt16(66, true)),
			
// 						sq2: String(dv.getInt32(108, true)),
// 						sp2: String(dv.getInt32(112, true)),
// 						sno2: String(dv.getInt16(116, true)),
			
// 						sq3: String(dv.getInt32(118, true)),
// 						sp3: String(dv.getInt32(122, true)),
// 						sno3: String(dv.getInt16(126, true)),
			
// 						sq4: String(dv.getInt32(128, true)),
// 						sp4: String(dv.getInt32(132, true)),
// 						sno4: String(dv.getInt16(136, true)),
			
// 						sq5: String(dv.getInt32(138, true)),
// 						sp5: String(dv.getInt32(142, true)),
// 						sno5: String(dv.getInt16(146, true)),
			
			
// 						tbq: String(dv.getFloat64(148, true)),
// 						tsq: String(dv.getFloat64(156, true)),
// 						ltt:(dv.getInt32(176,true))
					   
// 					  };
			
// 					  nCount+= 180;
// 					  renderCandle(feedDataobject);
// 					  // tempkeys[feedDataobject.Token]=feedDataobject;
			
// 				}
// 			}
// 		}
// 		fileReader.readAsArrayBuffer(msg.data);
// 	}

// socket.on('m', data => {
// 	const [
// 		eventTypeStr,
// 		exchange,
// 		fromSymbol,
// 		toSymbol,
// 		,
// 		,
// 		tradeTimeStr,
// 		,
// 		tradePriceStr,
// 	] = data.split('~');

// 	if (parseInt(eventTypeStr) !== 0) {
// 		// Skip all non-trading events
// 		return;
// 	}
// 	const tradePrice = parseFloat(tradePriceStr);
// 	const tradeTime = parseInt(tradeTimeStr);
// 	// const channelString = `0~${exchange}~${fromSymbol}~${toSymbol}`;
// 	// const subscriptionItem = channelToSubscription.get(channelString);
// 	const keyexist=testmap1.get(22);
// 	if(keyexist==undefined)
// 	{
// 		return ;
// 	}
// 	// if (subscriptionItem === undefined) {
// 	// 	return;
// 	// }
// 	// const lastDailyBar = subscriptionItem.lastDailyBar;
// 	// const nextDailyBarTime = getNextDailyBarTime(lastDailyBar.time);
// 	const lastDailyBar1 = keyexist.lastDailyBar;
// 	const nextDailyBarTime1 = getNextDailyBarTime(lastDailyBar1.time);

// 	let bar;
// 	if (tradeTime >= nextDailyBarTime1) {
// 		bar = {
// 			time: nextDailyBarTime1,
// 			open: tradePrice,
// 			high: tradePrice,
// 			low: tradePrice,
// 			close: tradePrice,
// 		};
// 		} else {
// 		bar = {
// 			...lastDailyBar1,
// 			high: Math.max(lastDailyBar1.high, tradePrice),
// 			low: Math.min(lastDailyBar1.low, tradePrice),
// 			close: tradePrice,
// 		};
// 		}
//     keyexist.lastDailyBar1=bar;
// 	// subscriptionItem.lastDailyBar = bar;

// 	// Send data to every subscriber of that symbol
// 	keyexist.handlers.forEach(handler => handler.callback(bar));
//  });
function intToTime1980(epoch) {
	const epochTime = new Date(Date.UTC(1980, 0, 1, 0, 0, 0, 0));
	const duration = new Date(epochTime.getTime() + epoch * 1000);
	return duration;
 }
function getNextDailyBarTime(barTime) {
	var date = new Date(barTime*1000);
	return barTime / 1000;
}
function convert(t) {
	const dt = new Date(t);
	const hr = dt.getUTCHours();
	const m = "0" + dt.getUTCMinutes();
	
	return hr + ':' + m.substr(-2)
  }
  function getNextMinuteBarStartTime() {
	const now = new Date();
	// Move to the next minute
	now.setSeconds(0);
	now.setMilliseconds(0);
	now.setMinutes(now.getMinutes() + 1);
	// Get the timestamp in milliseconds
	const nextMinuteBarStartTime = now.getTime();
	return nextMinuteBarStartTime;
   }
function renderCandle(data)
{
	const tradePrice = parseFloat(data.ltp);
		const dates = new Date();
	dates.setSeconds(0);
	dates.setMilliseconds(0);

    
	
	const tradeTime = parseInt(dates.getTime());
	const keyexist=testmap1.get(backuptk);
	if(keyexist==undefined)
	{
		return ;
	}
		const lastDailyBar1 = keyexist.lastDailyBar;
	let nextDailyBarTime1 = lastDailyBar1.time;

	let bar;
	if (tradeTime >= localStorage.getItem("times")) {
		
		bar = {
			time: tradeTime,
			open: Number(tradePrice/100),
			high:  Number(tradePrice/100),
			low:  Number(tradePrice/100),
			close:  Number(tradePrice/100),
		};
		let timess;
		timess = getNextMinuteBarStartTime();
		localStorage.setItem("times", timess);
		
	} else {
		bar = {
			
			...lastDailyBar1,
			high: Math.max(lastDailyBar1.high, tradePrice/100),
			low: Math.min(lastDailyBar1.low, tradePrice/100),
			close:  tradePrice/100,
		};
		}
	
	 keyexist.lastDailyBar=bar;
	keyexist.handlers.forEach(handler => handler.callback(bar));
}
export function subscribeOnStreams(
	symbolInfo,
	resolution,
	onRealtimeCallback,
	subscriberUID,
	onResetCacheNeededCallback,
	lastDailyBar,
	tk
) {
	backuptk=Number(tk);
	//connecting
	//connectWs();
	// const parsedSymbol = parseFullSymbol(symbolInfo.full_name);
	// const channelString = `0~${parsedSymbol.exchange}~${parsedSymbol.fromSymbol}~${parsedSymbol.toSymbol}`;
	const handler = {
		id: subscriberUID,
		callback: onRealtimeCallback,
	};

	let keyexist=testmap1.get(Number(tk));
  if(keyexist)
  {
    	// Already subscribed to the channel, use the existing subscription
	keyexist.handler.push(handler);
	return ;
  }
	
  keyexist = {
		subscriberUID,
		resolution,
		lastDailyBar,
		handlers: [handler],
	}
	
	testmap1.set(Number(tk),keyexist);
//sending data to websocket
	var buffer = new ArrayBuffer(10);
	var view1 = new DataView(buffer);
	view1.setUint8(0,23);
    //1-Eq,2-fo, 3-CD,4 BseEq 
   view1.setUint8(1,1);
   view1.setInt32(2,swap32(Number(tk)));
   socket.send(view1,10);
//	socket.emit('SubAdd', { subs: [channelString] });

}
// function sendHeartbeat() {
// 	socket.send('heartbeat');
//  }
export function unsubscribeFromStream(subscriberUID) {
	// Find a subscription with id === subscriberUID
	for (const channelString of channelToSubscription.keys()) {
		const subscriptionItem = channelToSubscription.get(channelString);
		const handlerIndex = subscriptionItem.handlers
			.findIndex(handler => handler.id === subscriberUID);

		if (handlerIndex !== -1) {
			// Remove from handlers
			subscriptionItem.handlers.splice(handlerIndex, 1);

			if (subscriptionItem.handlers.length === 0) {
				// Unsubscribe from the channel if it was the last handler
				socket.emit('SubRemove', { subs: [channelString] });
				channelToSubscription.delete(channelString);
				break;
			}
		}
	}
}
function displayMessage(data) {
  }


  function swap32(val) {
    return ((val & 0xFF) << 24)
           | ((val & 0xFF00) << 8)
           | ((val >> 8) & 0xFF00)
           | ((val >> 24) & 0xFF);
}



connectWs();
