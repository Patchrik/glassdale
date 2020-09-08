let witnessArray = [];

export const getWitness = () => {
	return fetch('https://criminals.glassdale.us/witnesses')
		.then((response) => response.json())
		.then((parsedResponse) => {
			witnessArray = parsedResponse;
		});
};

export const useWitness = () => {
	return witnessArray.slice();
};
