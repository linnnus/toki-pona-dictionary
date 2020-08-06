// for easy checking
Object.prototype.isEmpty = function() {
  for(var key in this) {
    if(this.hasOwnProperty(key))
    return false;
  }
  return true;
}

function populateList(definitions) {

  let list = document.getElementById('list');

  // clear all child nodes
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // if definitions empty
  if(definitions.isEmpty()){
    // console.log('no definitions to populate');

    let noti = document.createElement('DIV');
    noti.classList.add('res-notification');
    noti.textContent = 'No results!'
    list.insertAdjacentElement('beforeend', noti);

    return;

  }

  // loop over every word
  definitions.forEach( entryData => {

    // create li
    let entryContainer = document.createElement('DIV');
    entryContainer.classList.add('entry');

	    // create word
	    let word = document.createElement('H2');
	    word.textContent = entryData['word'];
	    if (entryData['alternatives']) { // add alternatives
	      word.textContent += ', ' + entryData['alternatives'].join(', ');
	    }
	    word.classList.add('word');
	    entryContainer.insertAdjacentElement('beforeend', word);

			// loop over definitions for that word
			if (entryData['definitions']) {

				// create list for definitions
				let definitions = document.createElement('UL');
				definitions.classList.add('definition-list');

				entryData['definitions'].forEach( def => {

					let definitionContainer = document.createElement('LI');
					definitionContainer.classList.add('definition-container');

					// create type
					let type = document.createElement('SPAN');
					type.textContent = def['type'];
					type.classList.add('type');
					definitionContainer.insertAdjacentElement('beforeend', type);

					// create definition
					let definition = document.createElement('SPAN');
					definition.textContent = def['definition'];
					definition.classList.add('definition');
					definitionContainer.insertAdjacentElement('beforeend', definition);

					definitions.insertAdjacentElement('beforeend', definitionContainer);

				});

				// add list of definitions to li
				entryContainer.insertAdjacentElement('beforeend', definitions);

			}

			// loop over examples examples
			if (entryData['exampleUses']){

				let examples = document.createElement('UL');
				examples.classList.add('examples');

				entryData['exampleUses'].slice(0,3).forEach( example => {

					let p = document.createElement('LI');
					p.textContent = `"${example}"`;
					examples.insertAdjacentElement('beforeend', p);

				}); // examples foreach

				entryContainer.insertAdjacentElement('beforeend', examples);

			} // if examples

			if (entryData['notes']) {

				let noteList = document.createElement('UL');
				noteList.classList.add('note-list');
				// noteList.textContent = '* ' + entryData['notes'].join('\r\n* ');

				entryData['notes'].forEach( noteData => {

					let note = document.createElement('LI');
					note.classList.add('note');
					note.textContent = `* ${noteData}`;

					noteList.insertAdjacentElement('beforeend', note)

				});

				entryContainer.insertAdjacentElement('beforeend', noteList);

			}
			
    // add everything to html
    list.insertAdjacentElement('beforeend', entryContainer);


  }); // entries

} // func
