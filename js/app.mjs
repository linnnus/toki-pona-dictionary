// add elements
import dictionary from '../data/dictionary.mjs';
import { createElement } from './utils.mjs';
const entries = dictionary.map((entry) => {
	return {
		...entry,
		elt: createElement(entry),
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
			entry.elt.style.display = 'none';
		} else {
			entry.elt.style.display = 'block';
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
