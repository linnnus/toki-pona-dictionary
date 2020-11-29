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
