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
    loadProxySettings();
    document.getElementById("submit").onclick = toggle;
    document.getElementById("update").onclick = update;
}
