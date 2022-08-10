const inputEl = document.querySelector('#validation-input');
const minInputLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', checkTextLength);

function checkTextLength(event) {    
    if (event.currentTarget.value.length >= minInputLength) {         
        inputEl.classList.remove('invalid');
        return inputEl.classList.add('valid');
    }

    // inputEl.classList.remove('valid');    
    inputEl.classList.add('invalid');
}