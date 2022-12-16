import * as url from '../constant.js';

/**
 * Function to get listings from the api
 *
 * @returns data
 */
export async function getListings() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };

  const routeName = document.body.id;

  try {
    let req = await fetch(url.api_base_url + url.listingEndPoint, options);

    if (routeName == 'homepage') {
      req = await fetch(url.api_base_url + url.listingEndPoint + '&limit=12&active=true', options);
    }

    if (req.ok) {
      const data = await req.json();
      // console.log('From listings.js', data);
      return data;
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
  } catch (error) {
    // If there is some issue with the request this message will display for the user
    console.log('Oh no!!', error.message);
  }
}
