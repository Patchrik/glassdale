import { CriminalHTML } from './Criminal.js';
import { getCriminals, useCriminals } from './CriminalProvider.js';

export const CriminalsList = () => {
	getCriminals().then(() => {
		const CriminalArray = useCriminals();
		addCriminalsToDOM(CriminalArray);
	});
};

const addCriminalsToDOM = (anCriminalArray) => {
	const domElement = document.querySelector('.criminalsContainer');

	let HTMLArray = anCriminalArray.map((CriminalObj) => {
		return CriminalHTML(CriminalObj);
	});

	domElement.innerHTML = HTMLArray.join('');
};
