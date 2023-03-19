// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

const nameInput = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");

nameInput.addEventListener('input', () => { 
  if (nameInput.value === "") { 
    return out("Anonymous");
  }
  return out(nameInput.value);
})

function out(str) { 
  nameOut.textContent = str;
}

