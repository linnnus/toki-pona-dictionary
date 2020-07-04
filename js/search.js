let form = document.getElementById('form');
let text = document.getElementById('text');

// add event listener
form.onsubmit = e => {

  e.preventDefault();
  search(text.value);

};

findResults(""); // initial population
