import * as url from '../constant.js';

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
      console.log(req);
      let errorContainer = document.getElementById('error');
      errorContainer.innerHTML = `<p class="text-danger">Ups! Something went wrong. Please try again</p>`;
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
