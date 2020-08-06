// set theme using localStorage
const avaiable = storageAvailable('localStorage');
console.log(avaiable);

if (avaiable) {

	switch (localStorage.getItem('theme')) {
		case 'dark':
			setDarkTheme();
			break;
		case 'red':
			setRedTheme();
			break;
	}
}

// change theme
document.getElementById('lighttheme').onclick = setLightTheme;

document.getElementById('darktheme').onclick = setDarkTheme;

document.getElementById('redtheme').onclick = setRedTheme;

function setLightTheme(){
	document.documentElement.style
		.setProperty('--main-color', 'white');
	document.documentElement.style
		.setProperty('--accent-color', '#dedede');
	document.documentElement.style
		.setProperty('--text-color', 'black');
	document.documentElement.style
		.setProperty('--book-color', '#34A3D3');

}

function setDarkTheme(){
	document.documentElement.style
		.setProperty('--main-color', '#2C2C2C');
	document.documentElement.style
		.setProperty('--accent-color', '#393939');
	document.documentElement.style
		.setProperty('--text-color', 'white');
	document.documentElement.style
		.setProperty('--book-color', '#34A3D3');
}

function setRedTheme(){
	document.documentElement.style
		.setProperty('--main-color', '#b71c1c');
	document.documentElement.style
		.setProperty('--accent-color', '#911616');
	document.documentElement.style
		.setProperty('--text-color', 'white');
	document.documentElement.style
		.setProperty('--book-color', '#7da0af');
}

function storageAvailable(type) {
	var storage;
	try {
		storage = window[type];
		var x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return e instanceof DOMException && (
			// everything except Firefox
			e.code === 22 ||
			// Firefox
			e.code === 1014 ||
			// test name field too, because code might not be present
			// everything except Firefox
			e.name === 'QuotaExceededError' ||
			// Firefox
			e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
			// acknowledge QuotaExceededError only if there's something already stored
			(storage && storage.length !== 0);
		}
	}
