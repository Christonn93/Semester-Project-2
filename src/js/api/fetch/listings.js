import * as url from '../constant.js';

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
      req = await fetch(url.api_base_url + url.listingEndPoint + '&limit=12', options);
    }

    if (req.ok) {
      const data = await req.json();
      // console.log('From listings.js', data);
      return data;
    }
  } catch (error) {
    // If there is some issue with the request this message will display for the user
    console.log('Oh no!!', error.message);
  }
}
