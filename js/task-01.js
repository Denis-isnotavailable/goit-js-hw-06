// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и
// количество элементов в категории(всех вложенных в него < li >).

const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const categoryItems = category.querySelectorAll('li');
    const title = category.querySelector('h2');
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${categoryItems.length}`);
});