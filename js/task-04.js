// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counterValue = document.querySelector('#value');
const btnDecrement = document.querySelector('#counter').firstElementChild;
const btnIncrement = document.querySelector('#counter').lastElementChild;
// const btnDecrement = document.querySelector('button[data-action="decrement"]');
// const btnIncrement = document.querySelector('button[data-action="increment"]');


counterValue.textContent = 0;

btnDecrement.addEventListener('click', decrementCounter);
btnIncrement.addEventListener('click', incrementCounter);

function decrementCounter(event) {
    counterValue.textContent -= 1;
}

function incrementCounter(event) {
    counterValue.textContent = Number(counterValue.textContent) + 1;
}
