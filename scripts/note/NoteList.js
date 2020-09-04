import { getNotes, useNotes } from './NoteDataProvider.js';
import { toNotesHTML } from './Note.js';

// We need a NoteList function that will take a note object and render a Note Card element to the dom
const noteContentTarget = document.querySelector('.noteCardContainer');

export const NoteList = () => {
	getNotes().then((_) => {
		let notesArrayCopy = useNotes();
		render(notesArrayCopy);
	});
};

// we will need a render function to place stuff on the dom

const render = (notesCollection) => {
	const ArrayOfHTMLNotes = notesCollection.map(toNotesHTML);
	noteContentTarget.innerHTML = ArrayOfHTMLNotes.join('');
};
