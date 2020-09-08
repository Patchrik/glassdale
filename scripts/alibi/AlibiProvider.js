import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js';

let alibis = getCriminals().then(useCriminals);

export const useAlibis = () => {
	return alibis;
};
