import * as url from '../constant.js';

/**
 * Create new entry with data from input field in create new form
 *
 * @param {*} title Data from input field
 * @param {*} description Data from input field
 * @param {*} media Data from input field
 * @param {*} tags Data from input field
 * @param {*} endsAt Data from input field
 */
export async function createNewEntry(title, description, media, tags, endsAt) {
  const token = JSON.parse(localStorage.getItem('Token'));

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, description, media, tags, endsAt }),
  };

  try {
    const req = await fetch(url.api_base_url + url.createNewListingEndPoint, options);
    if (!req.ok) {
      const res = await req.json();
      const statusCode = res.statusCode;
      const message = res.errors[0].message;
      let errorContainer = document.getElementById('error');

      if (statusCode === 400) {
        errorContainer.innerHTML = `<div class="d-flex flex-column gap-2">
          <p class="text-danger m-0">Sorry! ${message}</p> 
        </div>`;
        document.getElementById('placeBidForm').classList.add('shake', '');
      }
    } else {
      const errorContainer = document.getElementById('success');
      errorContainer.innerHTML = `<p class="text-success">Congratulation. Your entry is now listed.</p>`;
      setTimeout(location.replace('../'), 5000);
    }
  } catch (error) {
    let errorContainer = document.getElementById('error');
    errorContainer.innerHTML = `<p class="text-danger">Ups! Something went wrong. Please try again</p>`;

    throw new Error(error);
  }
}
