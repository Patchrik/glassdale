import { useOfficers, getOfficers } from './OfficerProvider.js';
import { OfficerHTML } from './Officer.js';

export const OfficerList = () => {
	getOfficers().then(() => {
		const OfficerArray = useOfficers();
		addOfficersToDOM(OfficerArray);
	});
};

const addOfficersToDOM = (anOfficerArray) => {
	const domElement = document.querySelector('.Officer-Container');

	let HTMLArray = anOfficerArray.map((officerObj) => {
		return OfficerHTML(officerObj);
	});

	domElement.innerHTML = HTMLArray.join('');
};
