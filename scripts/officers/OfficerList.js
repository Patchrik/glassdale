import { useOfficers, getOfficers } from './OfficerProvider.js';
import { OfficerHTML } from './Officer.js';

export const OfficerList = () => {
	getOfficers().then(() => {
		const OfficerArray = useOfficers();
		console.log('This should be an officer array', OfficerArray);
	});
};
