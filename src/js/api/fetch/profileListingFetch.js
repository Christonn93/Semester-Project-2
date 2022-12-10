import * as url from '/src/js/api/constant.js';

const storageToken = JSON.parse(localStorage.getItem('Token'));
const profile = JSON.parse(localStorage.getItem('Profile'));
const { Name: userName } = profile;

export async function profileListingFetch() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storageToken}`,
    },
    body: JSON.stringify(),
  };
  try {
    const req = await fetch(url.api_base_url + `auction/profiles/${userName}?_listings=true&_wins=true&_sort=created&_sortOrder=asc`, options);
    if (req.ok) {
      const data = await req.json();
      console.log('From profileListingFetch.js', data);
      return data;
    }
  } catch (error) {
    // If there is some issue with the request this message will display for the user
    console.log('Oh no!!', error.message);
  }
}
