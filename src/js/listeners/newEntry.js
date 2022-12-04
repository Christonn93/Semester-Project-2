import { createNewEntry } from '../api/user/listings/createNew.js';

const form = document.querySelector('#newEntryForm');
if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const newData = Object.fromEntries(formData.entries());
    console.log(newData);
    const { title, description, tags, endsAt, media } = newData;
    // debugger;
    // send it to API
    await createNewEntry(title, description, [media], [tags], endsAt);
    window.location.replace('../');
  });
}
