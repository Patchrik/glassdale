import { useAlibis } from './AlibiProvider.js';

const eventHub = document.querySelector('#main');
let contentTarget = document.querySelector('');

// A function that fires when a button is pushed.
// the return will be a inner html that includes the Known Associate and Alibis
// it will need to sort by the criminals ID which is in the html ID
// This will make sure that the right notes are in the right cards

let alibis = useAlibis();

// This will be an event listener
eventHub.addEventListener('click', (clickEvent) => {
	if (clickEvent.target.id === '') {
		console.log('you clicked on the alibi button');
		// let idString = clickEvent.target.id;
		// let holder = [];
		// holder = idString.split('--');
		// console.log('this should be a split array', holder);
		// const criminalID = holder[1];
		// CriminalObj = alibis.find((CriminalObj) => CriminalObj.id === criminalID);
		// contentTarget = document.querySelector(`#criminal-id--${criminalID}`);
	}
});
// This will be a render function for getting the things on the Dom
const render = (criminalObj) => {
	contentTarget.innerHTML = ``;
};

// this will be a function to sort
