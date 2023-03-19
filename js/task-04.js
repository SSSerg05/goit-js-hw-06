// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const btns = document.querySelectorAll('#counter button');
const val = document.querySelector('#value');
let counterValue = 0;

btns.forEach(element => {
  element.addEventListener('click', () => { 
   
    if (element.dataset.action === 'decrement') {
      counterValue--;
    } else if (element.dataset.action === 'increment') { 
      counterValue++;
    }

    outValue();
  })
})

function outValue() {
  val.textContent = counterValue;
}

