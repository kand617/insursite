window.onload = function () {
    getWindowHeight();
    window.addEventListener('resize', getWindowHeight);

    function getWindowHeight() {
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
        var newHeight = windowHeight - 117;
        document.getElementById('hosted-api-docs').setAttribute("style", "width:100%; height:" + newHeight + "px; position:fixed;");
    }

    var versionSelect = document.getElementById("version-select");
    versionSelect.addEventListener('change', function () {
        console.log("event triggers")
        var selectedVersion = versionSelect.options[versionSelect.selectedIndex].value;
        var host = window.location.host;
        var protocol = window.location.protocol;
        var url = protocol + "//" + host + "/v/" + selectedVersion;
        window.location.href = url;
    });
}
