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


const gallaryEl = document.querySelector('.gallery');
gallaryEl.append(...createImages);

gallaryEl.style.margin = 0;
gallaryEl.style.padding = 0;
gallaryEl.style.listStyle = 'none';
gallaryEl.style.display = 'grid';
gallaryEl.style.gridTemplateColumns = 'repeat(3, calc((100% - 20px) / 3))';
gallaryEl.style.gridTemplateRows = 'repeat(3, 180px)';
gallaryEl.style.gap = '10px';

for (let i = 0; i < createImages.length; i += 1) {
  const counter = createImages.length - i;

  createImages[i].style.gridColumn = `${i + 1} / ${createImages.length}`;
  createImages[i].style.gridRow = `${counter} / ${createImages.length}`;  
}