let form = document.getElementById('form');
let text = document.getElementById('text');
let title = document.getElementById('title');

// add event listeners
form.onsubmit = e => {

  e.preventDefault();
  search(text.value);
  document.activeElement.blur(); // (hopful´ly) hide softkeyboard

};

title.onclick = () => { // on mobile it feels natural, that this would reset

  text.value = '';
  search('');
  document.activeElement.blur(); // (hopful´ly) hide softkeyboard

}

function clearKeyboard(elt){

}

// initial population
search('');
