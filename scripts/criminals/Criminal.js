import { AlibiDialog } from './AlibiDialog.js';

const eventHub = document.querySelector('.container');

eventHub.addEventListener('click', (clickEvent) => {
	if (clickEvent.target.id.startsWith('associates--')) {
		const [prefix, criminalID] = event.target.id.split('--');

		const alibiEvent = new CustomEvent('associatesClicked', {
			detail: {
				chosenCriminal: criminalID,
			},
		});

		eventHub.dispatchEvent(alibiEvent);
	}
});

export const ToCriminalHTML = (CriminalObj) => {
	return `
    <section class="criminal-card" id="criminal-id-${CriminalObj.id}" >
      <h1>${CriminalObj.name}</h1>

      <p><b>Age:</b> ${CriminalObj.age} <br>
      <b>Crime:</b> ${CriminalObj.conviction} <br>
      <b>Term start:</b> ${new Date(
				CriminalObj.incarceration.start
			).toLocaleDateString('en-US')} <br>
      <b>Term end:</b> ${new Date(
				CriminalObj.incarceration.end
			).toLocaleDateString('en-US')}</p>
      
      <button id="associates--${CriminalObj.id}">Associate Alibis</button>
      ${AlibiDialog(CriminalObj.id)}

    </section>
  `;
};
