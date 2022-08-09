const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createImages = images.map(({ url, alt }) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('gallary__item--t3');

  const imgEl = `<img src="${url}" alt="${alt}" width ="300" height = "180" class ="gallary__image--t3">`;
  itemEl.insertAdjacentHTML("beforeend", imgEl);

  return itemEl;
});

document.querySelector('.gallery').append(...createImages);
