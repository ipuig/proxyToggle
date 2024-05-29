const loadProxySettings = () => {
    browser.proxy.settings.get({}, (details) => {
        const host = details.value.http.split(":")
        const status = details.value.proxyType;

        document.getElementById("ip").value = host[0];
        document.getElementById("port").value = host[1];
        document.getElementById("proxyType").innerText = status;

        if (status == "system") {
            document.getElementById("submit").classList.add("proxyOf");
        }
        else if (status == "manual") document.getElementById("submit").classList.add("proxyOn");
    })
}

const toggle = () => {
}

window.onload = () => {
    loadProxySettings();
    // document.getElementById("proxy_switch").onclick = toggle;
}


