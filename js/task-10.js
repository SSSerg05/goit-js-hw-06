// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
// количество элементов в input и нажимает кнопку Создать, после чего рендерится
// коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в
// div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй
// готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
// тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// елемент керування з селектором
const control = document.querySelector('#controls').children;

// батькывський елемент яким керуємо
const parent = document.querySelector('#boxes');

// елементи керування
const [input, btnCreate, btnClear] = control;
let counterValue = 0;

input.addEventListener('change', () => { counterValue = Number(input.value) });
btnCreate.addEventListener('click', () => { createBoxes(counterValue) });
btnClear.addEventListener('click', () => { destroyBoxes(counterValue) });

/*  додаємо до батьківського елементу n-кількість елементів
*
* @param counterValue - кількість елементів які додаємо
* @return true - елементи додано
*/
function createBoxes(amount) { 
  const obj = {
    width: '30px',
    height: '30px',
    backgroundColor: `${getRandomHexColor()}`,
  }

  for (let i = 0; i < amount; i++) {

    const div = document.createElement('div')

    // змінюємо стилі у картинок
    Object.assign(div.style, obj);

    parent.appendChild(div);
    
    obj.width = `${parseInt(obj.width) + 10}px`;
    obj.height = `${parseInt(obj.height) + 10}px`;
    obj.backgroundColor = getRandomHexColor();
  }

  return true;
}

/*  видалення з батьківського елементу n-кількість елементів
*
* @param counterValue - кількість елементів які видаляємо
* @return false якщо немає чого видаляти, true - видалено задану кількість елементів
*/
function destroyBoxes(counterValue) { 
  
  // перевірка на кількість елементів у батьковькому контейнері
  let counter = counterValue;

  if (!counter) { 
    return false;
  } else if (parent.children.length < counter) { 
    counter = parent.children.length;
  }

  // видаляємо з останього
  for (let i = counter; i > 0; i--) { 
    parent.lastElementChild.remove();
  }

  return true;
}