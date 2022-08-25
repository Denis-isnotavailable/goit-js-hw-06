function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.


const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');

const boxesEl = document.querySelector('#boxes');


createBtnEl.addEventListener('click', createElementsCollection);
destroyBtnEl.addEventListener('click', rubElementsCollection);


function createElementsCollection(event) { 
  boxesEl.innerHTML = '';
  boxesEl.append(...createBoxes(inputEl.value));
}

function rubElementsCollection(event) {
  boxesEl.innerHTML = '';
}

function createBoxes(amount) {
  const elements = [];
  let measurement = 20;  

  for (let i = 0; i < amount; i++) {
    const element = document.createElement('div');
    measurement += 10;

    element.style.width = `${measurement}px`;
    element.style.height = `${measurement}px`;
    element.style.backgroundColor = getRandomHexColor();

    elements.push(element);
  }

  return elements;  
}