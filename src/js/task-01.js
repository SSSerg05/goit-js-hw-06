// Напиши скрипт который:
// 
// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.
 

// вибрали ul#categories
const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.childElementCount}`);

// визначили список елементів li.item
const items = list.childNodes;

// перебираємо список
items.forEach(element => {
  //перевірка, якщо елемент === <li>
  if (element.nodeName === 'LI') {
    // визначаємо 1го нащадка (<h2>) для відображення категорії
    const h2 = element.firstElementChild;
    console.log(`Category: ${h2.textContent}`);

    // визначаємо останього нащадка для відображення кількості елементів в категорії
    const ul = element.lastElementChild;
    console.log(`Elements: ${ul.childElementCount}`);    
  }
});
