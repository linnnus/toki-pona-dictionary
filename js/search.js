function search(term, includeTypes){
  console.log('searching for "' + term + '"');

  let res = [];

  dict.forEach(entry => {

    let match = false;
    let reg = new RegExp(String.raw`(?<=\s|^|\p{P})${term}(?=\s|\p{P}|$)`, 'iu');


    // switch?

    // check alternatives
    if(entry.alternatives){

      entry.alternatives.forEach(str => match = reg.test(str) ? true : match );

      if (match) {
        console.log(entry.word, 'matched in alternatives');
        res.push(entry);
        return; // no need to search further
      }

    }

    //check translations
    if(entry.translations){

      for ( let key in entry.translations){
        match = reg.test(entry.translations[key]) ? true : match;
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

      entry.definitions.forEach( def => {

        // match = def.type.match(reg) ? true : match;
        // match = def.definition.match(reg) ? true : match;
        match = reg.test(def.type) ? true : match;
        match = reg.test(def.definition) ? true : match;

      });

      if (match) {
        console.log(entry.word, 'matched in definitions');
        res.push(entry);
        return; // no need to search further
      }

    }

  });

  console.log('search returned:', res);
  populateList(res);

}
