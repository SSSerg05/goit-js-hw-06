// Используй массив объектов images для создания элементов <img> вложенных в <li>. 
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

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

//знайшли заданий елемент
const list = document.querySelector('.gallery');

// задаємо йому стилі для ul
const listStyle = {
  'display': 'flex',
  'flex-wrap': 'wrap',
  'row-gap': '40px',
  'column-gap': '20px',
  'list-style': 'none',
  'padding-left': '15px',
  'padding-right': '15px',
  'margin': '0 auto',
  'width': '100%',
}

// замінюємо стилі у елемента
Object.assign(list.style, listStyle);

// задаємо контейнер, де будемо зберігати масив блоків елементів( li > img )
const arrElements = images.map(item => createNewItem(item));

// розпиляємо масив та додаємо всі елементи у батьківський list
list.append(...arrElements);


//*----------------------------------
/*
* @param {url: {String}, alt: {String}}    {Object} 
* @return li {Node}
*/
// робимо деструктурізацію об'єкту з атрибутами картинки
function createNewItem({ url, alt }) { 
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = url;
  img.alt = alt;

  // стилі для картинки
  const imgStyle = {
    'display': 'block',
    'max-width': '100%',
    'height': 'auto',
    'border': '1px solid black',
    'border-radius': '20px',
    'box-shadow': '0px 1px 6px rgba(46, 47, 66, 0.96)',
  }
  // змінюємо стилі у картинок
  Object.assign(img.style, imgStyle);
 
  // створюємо блок елеменів li > img
  li.appendChild(img);
  return li;
}