export const toNotesHTML = (noteObj) => {
	return `
    <section class="note-card" id="note-id-${noteObj.id}" >
      <h1>Note about ${noteObj.suspect}</h1>

      <p>${noteObj.noteText} <br>
      <b>Time of Note:</br> ${new Date(noteObj.date).toLocaleDateString(
				'en-US'
			)}</p>
    </section>
  `;
};
