const list = document.getElementById('entries');
export const createElement = (entry) => {
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

export const escapeReg = (string) => {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

export const findMatch = (reg, entry) => {
	if (entry.word.match(reg)) {
		return true;
	}

	for (const meaning of entry.meanings) {
		if (meaning.text.match(reg)) {
			return true;
		}
	}

	return false;
};
