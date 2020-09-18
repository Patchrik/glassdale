export const toNotesHTML = (noteObj, suspectObj) => {
	return `
    <section class="note-card" id="note-id-${noteObj.id}" >
      <h1>Note about ${suspectObj.id}</h1>

      <p>${noteObj.noteText} <br>
      <b>Time of Note:</b></br> ${new Date(noteObj.date).toLocaleDateString(
				'en-US'
			)}</p>
    </section>
  `;
};
