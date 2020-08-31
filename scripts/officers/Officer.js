export const OfficerHTML = (officerObj) => {
	return `
    <section section class="officer-card" id="officer-id-${officerObj.id}" >
      <h2>Officer: ${officerObj.name}</h2>

    </section>
  `;
};
