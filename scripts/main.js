import { OfficerHTML } from './officers/Officer.js';
import { OfficerList } from './officers/OfficerList.js';
import { getOfficers, useOfficers } from './officers/OfficerProvider.js';
// import { CriminalsList } from './criminals/CriminalList.js';
import {
	useConvictions,
	getConvictions,
} from './convictions/ConvictionProvider.js';
import {
	ConvictionSelect,
	officerSelect,
} from './convictions/ConvictionSelect.js';
import { CriminalList } from './criminals/CriminalList.js';
import { getNotes, useNotes } from './note/NoteDataProvider.js';
import { NoteForm } from './note/NoteForm.js';
import { NoteList } from './note/NoteList.js';

OfficerList();
NoteList();
// CriminalsList();
CriminalList();

getConvictions().then(ConvictionSelect);

getOfficers().then(officerSelect);

// let ArrayOfNotesTest = getNotes().then(useNotes);

//  This worked so the note api and webpage can talk
// console.log('This should be an array of notes', ArrayOfNotesTest);

NoteForm();
