function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color

const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');


buttonEl.addEventListener('click', changeBgColor);

function changeBgColor(event) {
  textColorEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = textColorEl.textContent;
}