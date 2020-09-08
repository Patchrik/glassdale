export const WitnessObjToHTML = (witnessObj) => {
	return `
  <section class="criminal-card" id="witness-id-${witnessObj.id}" >
      <h5>${witnessObj.name}</h5>

      <p><b>Age:</b> ${witnessObj.statements}</p>

  </section>
  `;
};
