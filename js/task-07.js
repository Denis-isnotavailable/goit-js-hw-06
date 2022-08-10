const inputEl = document.querySelector('#font-size-control');
const minSize = inputEl.getAttribute('min');
const mzxSize = inputEl.getAttribute('max');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', textSizeChange);

function textSizeChange(event) {    
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}