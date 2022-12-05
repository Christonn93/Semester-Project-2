// NOTE. Some part of the setup is based on this:
// https://github.com/Christonn93/work-flow-ca-social-media-client/blob/master/src/js/templates/post/form.js

import { createNewEntry } from '../api/user/listings/createNew.js';
import { updateEntry } from '../api/user/listings/updateEntry.js';

const form = document.querySelector('#newEntryForm');
if (form) {
  form.addEventListener('submit', async (action) => {
    action.preventDefault();

    // Selecting target
    const form = action.target;

    // Selecting the form and the form data the user inputs.
    const data = new FormData(form);
    const title = data.get('title');
    const description = data.get('description');
    const media = data.get('media').split(', ');
    const tags = data.get('tags').split(', ');
    const endsAt = data.get('endsAt');

    // If the user is updating a posted item
    const url = new URL(location.href);
    const id = url.searchParams.get('id');

    // send it to API
    if (!id) {
      let post;
      post = await createNewEntry(title, description, media, tags, endsAt);
      window.location.replace('../');
    } else {
      post = await updateEntry(title, description, media, tags, endsAt);
      window.location.replace('../');
    }
  });
}
