const form = document.querySelector('form')
const inputText = document.querySelector('#input-text');
const indexNumber = document.querySelector('#input-index');
const replacement = document.querySelector('#input-replace');
const btnSubmit = document.querySelector('btn')
const redact = document.querySelector('.redactr');






form.addEventListener('submit', (e) => {
  e.preventDefault()
  const word = inputText.value;
  const position = indexNumber.value;
  const replace = replacement.value
 
  
  let result = replaceIndex(word,position,replace);
  
  redact.innerText  = result
 

  

 
 
})

const replaceIndex = function replaceAtIndex(word,index,replacement) {
return word.substring(0, index) + replacement + word.substring(index + replacement.length);
}