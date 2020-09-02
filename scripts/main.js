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

OfficerList();

// CriminalsList();
CriminalList();

getConvictions().then(ConvictionSelect);

getOfficers().then(officerSelect);
