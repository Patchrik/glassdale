// create the eventHub for the save note function

const eventHub = document.querySelector('.container');

// this will be an event that lets to application know that the note section changed

const dispatchStateChangeEvent = () => {
	const noteStateChangedEvent = new CustomEvent('noteStateChanged');

	eventHub.dispatchEvent(noteStateChangedEvent);
};

// getNotes to retrieve the notes from our local API
let notes = [];

export const getNotes = () => {
	return fetch('http://localhost:8088/notes')
		.then((Response) => Response.json())
		.then((parsedNotes) => {
			console.table(parsedNotes);
			notes = parsedNotes;
		});
};

// A useNotes that creates a copy of the Array of notes from GetNotes.

export const useNotes = () => notes.slice();

// Create a saveNote function that will post the text in the textField to the Notes API

export const saveNote = (note) => {
	return fetch('http://localhost:8088/notes', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(note),
	})
		.then(getNotes)
		.then(dispatchStateChangeEvent);
};
