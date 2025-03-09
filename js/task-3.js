const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", onImputChange);
function onImputChange(event) {
    const trimmedValue = event.target.value.trim();
    outputEl.textContent = trimmedValue === "" ? "Anonymus" : trimmedValue;
}