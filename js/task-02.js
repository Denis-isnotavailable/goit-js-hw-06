const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 1 Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2 Добавит название ингредиента как его текстовое содержимое.
// 3 Добавит элементу класс item.
// 4 После чего вставит все <li> за одну операцию в список ul#ingredients.


const itemsEl = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = ingredient;    
    return itemEl;
  });

document.querySelector('#ingredients').append(...itemsEl);
