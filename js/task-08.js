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

form.addEventListener('submit', (event) => { 
  event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;
  
  let result = {};

  if (email.value === "" || password.value === "") {
    alert('все поля должны быть заполнены.');
    return false;
  }
  result[email.value] = password.value;

  return out(result);
})

function out(obj) { 
  for (const key in obj) { 
    console.log(`${ key }: ${obj[key]}`)
  }
}
