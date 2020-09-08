import { getWitness, useWitness } from './WitnessProvider.js';
import { WitnessObjToHTML } from './Witness.js';

export const WitnessList = () => {
	getWitness().then((_) => {
		const witnessArray = useWitness();
		renderWitness(witnessArray);
	});
};

const renderWitness = (witnessArray) => {
	// get a reference to the dom section that we want to place this at
	const witnessTarget = document.querySelector('.witnessContainer');
	// loop through witness collection to make html
	let HtmlArray = witnessArray
		.map((singleWitnessObj) => {
			return WitnessObjToHTML(singleWitnessObj);
		})
		.join('');
	// add the innerHTML might use .map?

	witnessTarget.innerHTML += HtmlArray;
};
