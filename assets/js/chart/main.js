// Datafeed implementation
import Datafeed from "./datafeed.js";

window.tvWidget = new TradingView.widget({
  debug: true,
  timezone: "Europe/London",
  symbol: "Acc", // Default symbol
  interval: "1", // Default interval
  fullscreen: true,
  timezone: "Asia/Kolkata", // Displays the chart in the fullscreen mode
  container_id: "tradeview-container", // Reference to an attribute of the DOM element
  datafeed: Datafeed,
  disabled_features: ["order_panel", "trading_account_manager"],
  enabled_features: [
    "study_templates",
    "saveload_separate_drawings_storage",
    "header_saveload featureset",
  ],
  theme: "light",
  save_load_adapter: {
    charts: [],
    studyTemplates: [],
    drawingTemplates: [],
    chartTemplates: [],
    drawings: {},

    getAllStudyTemplates: function () {
      this.studyTemplates = getStudyTemplate();
      return Promise.resolve(this.studyTemplates);
    },
    getStudyTemplateContent: function () {},
    saveStudyTemplate: function (studyTemplateData) {
      saveStudyTemplate(studyTemplateData);
      return this.Promise.resolve();
    },
    removeStudyTemplate: async function (studyTemplateData) {
      // var stdata=await this.studyTemplates;
      // for (var i = 0; i < stdata.length; ++i) {
      // 	if (stdata[i].name === studyTemplateData.name) {
      // 		stdata.splice(i, 1);
      // 		this.studyTemplates=stdata;
      // 		return Promise.resolve();
      // 	}
      // }

      // return Promise.reject();
      deleteStudyTemplate(studyTemplateData);
    },
    saveChart: function (chartData) {
      saveMacmChart(chartData);
      return this.Promise.resolve();
    },
    getAllCharts: function () {
      this.charts = loadMacmchart();
      return Promise.resolve(this.charts);
    },
    removeChart: function (id) {
      deleteMacmChart(id);
    },
    getChartContent: function (id) {
      this.charts = getMacmchart(id);
      return Promise.resolve(this.charts);
    },
  },

  overrides: {
    "paneProperties.background": "white",
    "paneProperties.backgroundType": "solid",
  },
  library_path: "../charting_library_cloned_data/charting_library/",
});

// window.tvWidget.onChartReady(()=>{
// })

let count = 1;
function saveChart(chardata) {
  console.log("chart", chardata);
}

// window.tvWidget.headerReady().then(function(){
// 	var button = window.tvWidget.createButton();
// 	button.setAttribute('title', 'My custom button tooltip');
// 	button.addEventListener('click', function() {
// 		const savedChartLayout=localStorage.getItem("key");
// 		const parsedLayout = JSON.parse(savedChartLayout);
//        window.tvWidget.load(parsedLayout);

//  });
// 	button.textContent = 'Load Layout';
// });
// window.tvWidget.headerReady().then(function(){
// 	var button = window.tvWidget.createButton();
// 	button.setAttribute('title', 'My custom button tooltip');
// 	button.addEventListener('click', function() {
// 		window.tvWidget.save(state => {
// 			localStorage.setItem("key",JSON.stringify(state));
// 			// Handle saved state...
// 			 }, { includeDrawings: true });

//  });
// 	button.textContent = 'Save chart';
// });
window.tvWidget.headerReady().then(function () {
  var button = window.tvWidget.createButton();
  button.setAttribute("title", "My custom button tooltip");
  button.addEventListener("click", function () {
    count++;
    if (count % 2 == 0) {
      window.tvWidget.theme = "light";
      window.tvWidget.applyOverrides({
        "paneProperties.background": "white",
        "paneProperties.backgroundType": "solid",
      });
    } else if (count % 2 != 0) {
      window.tvWidget.theme = "dark";
      window.tvWidget.applyOverrides({
        "paneProperties.background": "#000000",
        "paneProperties.backgroundType": "solid",
      });
    }
  });
  button.textContent = "Toggle Theme";
});

window.tvWidget.headerReady().then(function () {
  var button = window.tvWidget.createButton();
  button.setAttribute("title", "Buy Button");
  button.addEventListener("click", function () {
    window.postMessage("test1", "Hello");
    //window.localStorage.setItem("loggedIn", "true");
  });
  button.textContent = "Buy";
});
//load MACM CHART
async function loadMacmchart() {
  const response = await fetch(
    "https://dev.mirae-asset.co.in/cts/1.1/charts?" +
      new URLSearchParams({
        client: "AJAY",
        user: 37,
      })
  );
  const chartdata = await response.json();
  if (chartdata.data == null) {
    return [];
  }
  return chartdata.data;
}
//Load Single Chart
async function getMacmchart(id) {
  const response = await fetch(
    "https://dev.mirae-asset.co.in/cts/1.1/charts?" +
      new URLSearchParams({
        client: "AJAY",
        user: 37,
        chart: id,
      })
  );

  const chartData = await response.json();
  return chartData.data.content;
}

//Save chart
async function saveMacmChart(chartdata) {
  const formData = new FormData();

  formData.append("name", chartdata.name);
  formData.append("content", chartdata.content);
  formData.append("symbol", chartdata.symbol);
  formData.append("resolution", chartdata.resolution);

  const response = await fetch(
    "https://dev.mirae-asset.co.in/cts/1.1/charts?" +
      new URLSearchParams({
        client: "AJAY",
        user: 37,
        chart: chartdata.id == null ? "" : chartdata.id,
      }),
    { method: "POST", body: formData }
  );
  const chartData = await response.json();
}

//delete chart

async function deleteMacmChart(chartId) {
  const response = await fetch(
    "https://dev.mirae-asset.co.in/cts/1.1/charts?" +
      new URLSearchParams({
        client: "AJAY",
        user: 37,
        chart: chartId,
      }),
    { method: "DELETE" }
  );
  const chartData = await response.json();
}
//save study Templates
async function saveStudyTemplate(studyTemplateData) {
  const formData = new FormData();

  formData.append("name", studyTemplateData.name);
  formData.append("content", studyTemplateData.content);

  const response = await fetch(
    "https://dev.mirae-asset.co.in/cts/1.1/study_templates?" +
      new URLSearchParams({
        client: "AJAY",
        user: 37,
      }),
    { method: "POST", body: formData }
  );
  const chartData = await response.json();
}

//get Study Template

async function getStudyTemplate() {
  const response = await fetch(
    "https://dev.mirae-asset.co.in/cts/1.1/study_templates?" +
      new URLSearchParams({
        client: "AJAY",
        user: 37,
      })
  );
  const chartdata = await response.json();
   if (chartdata.data == null) {
    return [];
  }
  return chartdata.data;
}

//delete study Tempalte
async function deleteStudyTemplate(styudyTemplateData) {
  const response = await fetch(
    "https://dev.mirae-asset.co.in/cts/1.1/study_templates?" +
      new URLSearchParams({
        client: "AJAY",
        user: 37,
        template: styudyTemplateData.name,
      }),
    { method: "DELETE" }
  );
  const chartData = await response.json();
}

//getSingleTemplate
async function getSingleTempalte(templatedata) {
  const response = await fetch(
    "https://dev.mirae-asset.co.in/cts/1.1/study_templates?" +
      new URLSearchParams({
        client: "AJAY",
        user: 37,
        template: templatedata.name,
      }),
    { method: "GET" }
  );
  const chartData = await response.json();
  return chartData;
}
