const test = () => {
    const r = new XMLHttpRequest();
    r.open("get", "http://localhost:7777");
    r.send();
}

window.onload = () => {
    const button = document.getElementById("submit").onclick = test;
}
