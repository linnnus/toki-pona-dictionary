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
const searchText = document.getElementById('text');
searchText.oninput = (e) => {
	for (const entry of entries) {
		if (entry.word.includes(e.target.value)) {
			entry.elt.style.display = 'block';
		} else {
			entry.elt.style.display = 'none';
		}
	}
};
searchText.onchange = (e) => {
	e.target.blur();
}

const book = document.getElementById('book');
book.onclick = (e) => {
	// show all
	for (const entry of entries) {
		entry.elt.style.display = 'block';
	}
};

const loader = document.getElementById('loader');
loader.style.display = 'none';
