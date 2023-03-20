// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль
// при клике на button.change - color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector('.widget');
// div:last-chield -> (button)
const button = widget.lastElementChild;
// div:first-chield -> (p:first-chield) -> (span)
const text = widget.firstElementChild.firstElementChild;

button.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  text.textContent = color;
})