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

/*  Створюємо нову групу елементів ( li > h2 )
* @param nameItem   { String } 
* @return li        { Node }
*/
function createNewItem(nameItem) { 
  const li = document.createElement('li');
  li.classList.add("item");
  
  const h2 = document.createElement('h2');
  h2.textContent = nameItem;
  li.appendChild(h2);

  return li;
}

const documentFragment = document.createDocumentFragment();
const list = document.querySelector('#ingredients');

for (const item of ingredients) {
  documentFragment.appendChild(createNewItem(item));
}

list.appendChild(documentFragment);