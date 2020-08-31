import { OfficerHTML } from './officers/Officer.js';
import { OfficerList } from './officers/OfficerList.js';
import { getOfficers, useOfficers } from './officers/OfficerProvider.js';
import { CriminalsList } from './criminals/CriminalList.js';
import {
	useConvictions,
	getConvictions,
} from './convictions/ConvictionProvider.js';
import { ConvictionSelect } from './convictions/ConvictionSelect.js';

OfficerList();

CriminalsList();

getConvictions().then((_) => {
	ConvictionSelect();
});
