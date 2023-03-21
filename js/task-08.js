// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
// что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей
// в обьект, где имя поля будет именем свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы
// методом reset.

const form = document.querySelector('.login-form');

const formEvent = form.addEventListener('submit', (event) => { 
  //если событие не обрабатывается явно, его действие по умолчанию не должно 
  //выполняться так, как обычно
  event.preventDefault();

  // деструктиризація обробчика події поточного елементу(форми)
  const {
    elements: { email, password }
  } = event.currentTarget;
  
  // об'єкт результату виконання
  let result = {};

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert('Усі поля повинні мати відповідне значення.');
    return;
  }
  // запис даних у об'єкт
  result[email.value] = password.value;
  
  // очистка форма
  form.reset();

  // вивід результату
  out(result);
})

// вивід результату
function out(obj) { 
  console.log(obj);
}
