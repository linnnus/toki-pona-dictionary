// add elements
import dictionary from '../data/dictionary.mjs';
const list = document.getElementById('entries');
const addElt = (entry) => {
	const entryElt = document.createElement('SPAN');
	entryElt.classList.add('entry');

		// word
		const wordElt = document.createElement('H2');
		wordElt.textContent = entry.word;
		wordElt.classList.add('entry-word');
		entryElt.insertAdjacentElement('beforeend', wordElt);

		// meanings
		for (const meaning of entry.meanings) {
			const meaningElt = document.createElement('P');
			meaningElt.classList.add('entry-meaning');

				// type
				const typeElt = document.createElement('SPAN');
				typeElt.classList.add('entry-meaning-type');
				typeElt.textContent = meaning.type;
				meaningElt.insertAdjacentElement('beforeend', typeElt);

				// meaning
				const textElt = document.createElement('SPAN');
				textElt.classList.add('entry-meaning-text');
				textElt.textContent = meaning.text;
				meaningElt.insertAdjacentElement('beforeend', textElt);

			entryElt.insertAdjacentElement('beforeend', meaningElt);
		};

	return list.insertAdjacentElement('beforeend', entryElt);
};
const entries = dictionary.map((entry) => {
	return {
		...entry,
		elt: addElt(entry),
	}
});

import { escapeReg, findMatch } from './utils.mjs';
const searchForm = document.getElementById('form');
const searchText = document.getElementById('text');
searchForm.onsubmit = (e) => {
	e.preventDefault();
	document.activeElement.blur(); // (hopfully) hide softkeyboard

	const reg = new RegExp(`\\b${escapeReg(searchText.value)}\\b`, 'iu');
	for (const entry of entries) {
		if (!findMatch(reg, entry)) {
			entry.elt.classList.add('hide');
		} else {
			entry.elt.classList.remove('hide');
		}
	}
};

const book = document.getElementById('book');
book.onclick = (e) => {
	// show all
	for (const entry of entries) {
		entry.elt.classList.remove('hide');
	}
};

const loader = document.getElementById('loader');
loader.classList.add('hide');
