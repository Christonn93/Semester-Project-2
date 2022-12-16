import * as url from '../constant.js';

/**
 *
 * Fetching data for single item
 *
 * @param {*} token Needs token from local storage
 * @param {*} id Needs id from the url params
 * @returns data
 */
export async function getSingleListing(token, id) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(),
  };

  try {
    const req = await fetch(url.api_base_url + url.singleListingEndPoint + `${id}/` + url.sellerAndBidsFlags, options);
    if (req.ok) {
      const itemData = await req.json();
      return await itemData;
    }

    if (!req.ok) {
      const res = await req.json();
      const statusCode = res.statusCode;
      const message = res.errors[0].message;
      let main = document.querySelector('main');
      let errorContainer = document.createElement('div');

      if (statusCode === 400) {
        errorContainer.innerHTML = `<div class="d-flex flex-column gap-2">
          <p class="text-danger m-0">Sorry! ${message}</p> 
        </div>`;
        document.getElementById('placeBidForm').classList.add('shake', '');
      }
      main.append(errorContainer);
    }
  } catch {
    // Show user a message that they couldn't log in
  }
}
