/**
 * A helper method to build initalise the SDK portal on the page given the API key
 */
 
function setupWidget(apiKey){
  if(!APIMaticDevPortal)
  {
    loadScript(apikey);
  } else {
    initWidget(apiKey)
  }
}
function loadScript(apiKey){
  var script = document.createElement("script");
  script.src="https://dxjs.apimatic.io/static/js/portal.v3.js";
  script.onload = function(){
    initWidget(apiKey)
  }
  document.getElementsByTagName("head")[0].appendChild(script);   
}

function initWidget(apiKey){
  APIMaticDevPortal.show({
          container: "apimatic-widget",
          apiKey: apiKey,
          baseUrl: "https://apimatic.io",
          enableExport: true,
          isEmbedded: true,
          containsBanner:true,
          allowedLanguages:[
              "docs-http",
              "cs_net_standard_lib",
              "cs_universal_windows_platform_lib",
              "cs_portable_net_lib",
              "java_gradle_android_lib",
              "objc_cocoa_touch_ios_lib",
              "java_eclipse_jre_lib",
              "php_generic_lib",
              "python_generic_lib",
              "ruby_generic_lib",
              "angular_javascript_lib",
              "node_javascript_lib",
              "go_generic_lib"
          ],
          themeOverrides: {
              palette:{
                  primaryColor1:"#c1582d"
              }
          }
      });
}
