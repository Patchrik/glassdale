let convictions = [];

export const useConvictions = () => convictions.slice();

export const getConvictions = () => {
	return fetch('https://criminals.glassdale.us/crimes')
		.then((Response) => Response.json())
		.then((parsedCrimes) => {
			// console.table(parsedCrimes);
			convictions = parsedCrimes;
		});
};
