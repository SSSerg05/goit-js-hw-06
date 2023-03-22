// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

const arrItems = ingredients.map(item => { 
  const li = document.createElement('li');
  li.classList.add("item");
  
  const h2 = document.createElement('h2');
  h2.textContent = item;
  li.appendChild(h2);
  return li;
})

list.append(...arrItems);