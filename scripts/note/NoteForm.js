import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js';
import { saveNote } from './NoteDataProvider.js';

const contentTarget = document.querySelector('.noteFormContainer');
const eventHub = document.querySelector('.container');

eventHub.addEventListener('click', (clickEvent) => {
	if (clickEvent.target.id === 'saveNote') {
		const noteTextArea = document.querySelector('#note-text');
		const noteSuspect = document.querySelector('#note-criminal');

		if (noteSuspect.value !== '0' && noteTextArea.value !== '') {
			const newNote = {
				noteText: noteTextArea.value,
				suspect: noteSuspect.value,
				date: Date.now(),
			};

			saveNote(newNote);
		} else {
			window.alert('Make sure to include note and select suspect');
		}
	}
	// if (eventHub.addEventListener('noteStateChanged')) {

	// }
});

const render = (criminalArray) => {
	contentTarget.innerHTML = `
        <h3>New Note</h3>
        <textarea id="note-text"></textarea>

        <select class="dropdown" id="note-criminal"
          <option value="0">Please select a criminal</option>
          ${criminalArray
						.map((criminalObj) => {
							return `<option value="${criminalObj.name}">${criminalObj.name}</option>`;
						})
						.join('')}
        </select>
        <button id="saveNote">Save Note</button>
    `;
};

export const NoteForm = () => {
	getCriminals().then((_) => {
		render(useCriminals());
	});
};
