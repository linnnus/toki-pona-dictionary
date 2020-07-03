let form = document.getElementById('form');
let text = document.getElementById('text');
let submit = document.getElementById('submit');

// add event listeners
form.onsubmit = e => {

  e.preventDefault();
  search(text.value);

};

submit.addEventListener('click', e => {

  e.preventDefault();
  search(text.value);

});

search(""); // initial population

function search(term, includeTypes){
  console.log('searching for "' + term + '"');

  let res = [];

  dict.forEach(entry => {

    let match = false;

    // USE SWITCH CASE TO AVOID UNNECESSARY SCANNING or mayb just return

    // check alternatives
    if(entry.alternatives){
      entry.alternatives.forEach(str => match = str.match(term) ? true : match );

      if (match) {
        console.log(entry.word, 'matched in alternatives');
        res.push(entry);
        return; // no need to search further
      }

    }

    //check translations
    if(entry.translations){

      // regex will match term withing if it's single word
      let reg = new RegExp(String.raw`\b${term}\b`); // does not work with russian

      for ( let key in entry.translations){
        match = entry.translations[key].match(reg) ? true : match;
      }

      if (match) {
        console.log(entry.word, 'matched in translations');
        res.push(entry);
        return; // no need to search further
      }

    }

    //check definitions (they differ slightly)
    // will also allow us to search for type
    if(entry.definitions){

      let reg = new RegExp(String.raw`\b${term}\b`); // does not work with russian

      entry.definitions.forEach( def => {

        match = def.type.match(reg) ? true : match;
        match = def.definition.match(reg) ? true : match;

      });

      if (match) {
        console.log(entry.word, 'matched in definitions');
        res.push(entry);
        return; // no need to search further
      }

    }

  });

  console.log('search returned:', res);
  pupulateList(res);

}
