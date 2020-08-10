function search(term, includeTypes){
	// console.log('searching for "' + term + '"');

	let res = [];

	dict.forEach(entry => {

		// let match = false;
		let reg = new RegExp(String.raw`(?<=\s|^|\p{P})${term}(?=\s|\p{P}|$)`, 'iu');

		/*
			really want to do a switch but appareantly im incepable of doing so
		*/

		if ( entry.word && reg.test(entry.word) ) {
			res.push(entry);
		} else if (	entry.alternatives
			&& entry.alternatives.some(str => reg.test(str)) ) {
			res.push(entry);
		} else if ( entry.definitions
			&& entry.definitions.some(def => reg.test(def.definition)) ){
			res.push(entry);
		} else if ( entry.translations
			&& Object.values(entry.translations).some(str => reg.test(str)) ){
			res.push(entry);
		}

	});

	// console.log('search returned:', res);
	populateList(res);

}
