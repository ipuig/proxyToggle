var globalSettings = {};

const disableForm = isDisabled => {
    const color = isDisabled ? "gray" : "black";
    for (let idx = 0,
    inputs = document.getElementsByTagName("input"),
    labels = document.getElementsByTagName("label");
    idx < inputs.length; idx++) {
        inputs[idx].disabled = isDisabled;
        labels[idx].style.color = color;

    }
    document.getElementsByTagName("button")[0].disabled = isDisabled;
}

const updateButton = () => {
        const status = globalSettings.proxyType;
        document.getElementById("proxyType").innerText = status;

        if (status == "manual") {
            document.getElementById("submit").style.fill = "green";
            disableForm(false);
        }
        else {
            document.getElementById("submit").style.fill = "white";
            disableForm(true);
        }
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
    globalSettings.proxyType = (globalSettings.proxyType == "manual") ? "system" : "manual";
    browser.proxy.settings.set({ value: globalSettings });
    updateButton(status);
}

const update = () => {
    const http = `http://${document.getElementById("ip").value}:${document.getElementById("port").value}`
    globalSettings.http = http;
    browser.proxy.settings.set({ value: globalSettings });
}


window.onload = () => {
    browser.extension.isAllowedIncognitoAccess()
        .then(isAllowed => {

            if (!isAllowed) {
                const page = document.getElementsByTagName("body")[0];
                page.innerHTML = '<h1 align="center">Not Enough Permissions</h1><h2 align="center">To modify proxy settings you must allow access on private windows</h2><h3 style="width: 60%; margin: 0 auto; margin-bottom: .5em;">Follow this steps</h3><ol style="width: 60%; margin: 0 auto;"><li>Go to <b>about:addons</b> from your search bar</li><li>Select the proxy toggle extension</li><li>Go to details</li><li>Allow run in Private Windows</li><li>Next time you open the popup everything should work as intended</li></ol><p align="center"><img src="../assets/img/incognito.png" width="60%"></p>'
                page.style.padding = "1em";
                return;
            }

            loadProxySettings();
            document.getElementById("submit").onclick = toggle;
            document.getElementById("update").onclick = update;
        })
}
