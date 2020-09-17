import { getNotes, useNotes } from './NoteDataProvider.js';
import { toNotesHTML } from './Note.js';
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js';

// We need a NoteList function that will take a note object and render a Note Card element to the dom
const noteContentTarget = document.querySelector('.noteCardContainer');

// This calls the render method to "list" things onto the Dom.
export const NoteList = () => {
	getNotes()
		.then(getCriminals)
		.then((_) => {
			let notesArrayCopy = useNotes();
			let criminalArrayCopy = useCriminals();
			render(notesArrayCopy, criminalArrayCopy);
		});
};

// we will need a render function to place stuff on the dom. As params we're passing through our noteCollection
// (The array of Note objects) returned by our useNotes function. The second param is the criminal collection
// (the array of criminal objects) returned by our useCriminal function.

const render = (noteCollection, criminalCollection) => {
	noteContentTarget.innerHTML = noteCollection
		.map((noteObj) => {
			// We need to find out which crime boi we're looking for
			const ChosenNoteCriminalID = criminalCollection.find(
				(criminalObj) => criminalObj.id === parseInt(noteObj.criminalID)
			);

			return `
			<section class="note-card" id="note-id-${noteObj.id}" >
      	<h1>Note about ${ChosenNoteCriminalID.name}</h1>

      		<p>${noteObj.noteText} <br>
      		<b>Time of Note:</b> ${new Date(noteObj.date).toLocaleDateString(
						'en-US'
					)}</p>
    	</section>
		`;
		})
		.join(' ');
};
