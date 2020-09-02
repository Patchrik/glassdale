import { ToCriminalHTML } from './Criminal.js';
import { getCriminals, useCriminals } from './CriminalProvider.js';

// export const CriminalsList = () => {
// 	getCriminals().then(() => {
// 		const CriminalArray = useCriminals();
// 		addCriminalsToDOM(CriminalArray);
// 	});
// };

// const addCriminalsToDOM = (anCriminalArray) => {
const domElement = document.querySelector('.criminalsContainer');

// 	let HTMLArray = anCriminalArray.map((CriminalObj) => {
// 		return CriminalHTML(CriminalObj);
// 	});

// 	domElement.innerHTML = HTMLArray.join('');
// };

// The code above is the previous coupled version of the application.

const eventHub = document.querySelector('.container');

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', (event) => {
	// Use the property you added to the event detail.
	// debugger;
	if (event.detail.crimeThatWasChosen !== '0') {
		/*
            Filter the criminals application state down to the people that committed the crime
        */
		const appStateCriminals = useCriminals();
		const matchingCriminals = appStateCriminals.filter((criminalObj) => {
			return criminalObj.conviction === event.detail.crimeThatWasChosen;
		});

		/*
            Then invoke render() and pass the filtered collection as
            an argument
        */
		render(matchingCriminals);
	} else {
		render(useCriminals());
	}
});

const render = (criminalCollection) => {
	const ArrayOfHTMLCriminals = criminalCollection.map(ToCriminalHTML);
	domElement.innerHTML = ArrayOfHTMLCriminals.join('');
};

// Render ALL criminals initally
export const CriminalList = () => {
	getCriminals().then(() => {
		const appStateCriminals = useCriminals();
		render(appStateCriminals);
	});
};

eventHub.addEventListener('officerSelected', (event) => {
	// How can you access the officer name that was selected by the user?
	const officerName = event.detail.officer;

	// How can you get the criminals that were arrested by that officer?
	const criminals = useCriminals();
	const CriminalArrayByArrestingOfficer = criminals.filter((criminalObject) => {
		if (criminalObject.arrestingOfficer === officerName) {
			return true;
		}
	});
	render(CriminalArrayByArrestingOfficer);
});
