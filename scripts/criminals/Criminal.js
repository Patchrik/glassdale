export const CriminalHTML = (CriminalObj) => {
	return `
    <section section class="criminal-card" id="criminal-id-${CriminalObj.id}" >
      <h1>${CriminalObj.name}</h1>

      <p><b>Age:</b> ${CriminalObj.age}</p>

      <p><b>Crime:</b> ${CriminalObj.conviction}</p>

      <p><b>Term start:</b> ${new Date(
				CriminalObj.incarceration.start
			).toLocaleDateString('en-US')}</p>

      <p><b>Term end:</b> ${new Date(
				CriminalObj.incarceration.end
			).toLocaleDateString('en-US')}</p>

    </section>
  `;
};
