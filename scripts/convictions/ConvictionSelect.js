/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from './ConvictionProvider.js';

// Get a reference to the DOM element where the <select> will be rendered
// const contentTarget = document.querySelector('.filters__crime');

// export const ConvictionSelect = () => {
// 	// Get all convictions from application state
// 	const convictions = useConvictions();

// 	// This was the previous render function
// 	// const render = (convictionsArray) => {
// 	// 	/*
// 	//           Use interpolation here to invoke the map() method on
// 	//           the convictionsCollection to generate the option elements.
// 	//           Look back at the example provided above.
// 	//       */
// 		contentTarget.innerHTML = `
// 	          <select class="dropdown" id="crimeSelect">
// 	              <option value="0">Please select a crime...</option>
// 	              ${convictionsArray.map((placeholder) => {
// 									const crimeName = placeholder.name;
// 									return `<option>${crimeName}</option>`;
// 								})}
// 	          </select>
// 	      `;
// 	};
// 	console.log('this should be the convictions array', convictions);
// 	render(convictions);
// };

//  THIS IS CODE FOR CHAPTER 5 AND FILTERING THE CRIMES IN THE DROPDOWN MENU

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.filters__crime');

// On the event hub, listen for a "change" event.
eventHub.addEventListener('change', (event) => {
	// Only do this if the `crimeSelect` element was changed
	if (event.target.id === 'crimeSelect') {
		// Create custom event. Provide an appropriate name.
		const crimeChosenEvent = new CustomEvent('crimeChosen', {
			detail: {
				crimeThatWasChosen: event.target.value,
				// crimeID: "I'm groot",
			},
		});

		// Dispatch to event hub
		eventHub.dispatchEvent(crimeChosenEvent);
	}
});

const render = (convictionsCollection) => {
	contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map((crimeObj) => {
							const crimeName = crimeObj.name;
							const crimeID = crimeObj.id;
							return `<option value="${crimeName}">${crimeName}</option>`;
						})}
        </select>
    `;
};

export const ConvictionSelect = () => {
	getConvictions().then(() => {
		const convictions = useConvictions();
		render(convictions);
	});
};
