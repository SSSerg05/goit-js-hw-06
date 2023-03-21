// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

const nameInput = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");

nameInput.addEventListener('input', () => { 
  let strName = nameInput.value.trim();

  if ( strName === "") { 
    return out("Anonymous");
  }
  return out(strName);
})

function out(str) { 
  nameOut.textContent = str;
}

