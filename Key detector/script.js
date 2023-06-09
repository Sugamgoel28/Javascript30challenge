window.addEventListener("keydown",(e) => {
    document.querySelector("#result")
    .innerHTML = `The key pressed is <span>${e.key}</span><span>Key Code: ${e.keyCode}</span>`;
});