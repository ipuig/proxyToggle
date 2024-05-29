var globalSettings = {};

const debug = msg => {
    const r = new XMLHttpRequest();
    r.open("get", "http://localhost:9999/debug?msq=" + msg);
    r.send();
}

const updateButton = () => {
        const status = globalSettings.proxyType;
        document.getElementById("submit").style.fill = (status == "manual") ? "green" : "white";
        document.getElementById("proxyType").innerText = status;
}

const loadProxySettings = () => {
    browser.proxy.settings.get({}, (details) => {

        globalSettings = details.value;
        const host = details.value.http.split(":")

        document.getElementById("ip").value = host[0];
        document.getElementById("port").value = host[1];
        updateButton();
    });
}

const toggle = () => {
    debug(globalSettings.proxyType);
    globalSettings.proxyType = (globalSettings.proxyType == "manual") ? "system" : "manual";
    browser.proxy.settings.set({ value: globalSettings });
    updateButton(status);
}


window.onload = () => {
    loadProxySettings();
    document.getElementById("submit").onclick = toggle;
}
