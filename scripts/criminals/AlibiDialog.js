import { useCriminals } from './CriminalProvider.js';

const eventHub = document.querySelector('.container');
eventHub.addEventListener('associatesClicked', (event) => {
	// Display all the associates for this criminal

	const targetCriminal = useCriminals().find((criminal) => {
		return criminal.id === parseInt(event.detail.chosenCriminal);
	});

	const alibiTarget = document.querySelector(
		`.alibiDialog--${targetCriminal.id}`
	);
	const hTarget = document.querySelector('h4');

	if (alibiTarget.contains(hTarget)) {
		alibiTarget.innerHTML = '';
	} else {
		alibiTarget.innerHTML = `${targetCriminal.known_associates.map(
			(associate) => {
				return `
        <h4>${associate.name}</h4>
        <div>${associate.alibi}</div>
      `;
			}
		)}`;
	}
});

export const AlibiDialog = (id) => {
	return `
    <span class="alibiDialog--${id}"></span>
  `;
};
