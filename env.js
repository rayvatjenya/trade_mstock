(function(window) {
    window.__env = window.__env || {};
    //here  we can set variable names as bellow and this variable name should be same as in env.service
    //these values will overwrite them when web gets loaded .but make sure you initialize all variables with a default value

    // window.__env.NAME = "WEBmStockAWS"; //AWS
    window.__env.NAME = "WEBmStockAWSRedirect"; //AWS Redirect
    // window.__env.NAME = "WEBmStockUAT"; //UAT
    // window.__env.NAME = "WEBmStockUATMiraeDesign"; //UAT MIRAE DESIGN Instance
    // window.__env.NAME = "WEBmStockPREPROD"; //PREPROD
    // window.__env.NAME = "WEBmStockAWSRedirectUAT"
    // window.__env.NAME = "WebmstockAwsUat"
    // window.__env.NAME = "WEBmStockAWSPREPROD";
    // window.__env.NAME = "WEBmStock"; //LIVE
    // window.console.log = () => {};
}(this));
