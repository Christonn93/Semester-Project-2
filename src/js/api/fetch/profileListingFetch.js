import * as url from '../constant.js';

const storageToken = JSON.parse(localStorage.getItem('Token'));

export async function profileListingFetch() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storageToken}`,
    },
    body: JSON.stringify(),
  };

  if (storageToken) {
    const profile = JSON.parse(localStorage.getItem('Profile'));
    const { Name: userName } = profile;

    try {
      const req = await fetch(url.api_base_url + `auction/profiles/${userName}?_listings=true&_wins=true&sort=created&sortOrder=dec&active=true`, options);
      if (req.ok) {
        const data = await req.json();
        // console.log('From profileListingFetch.js', data);
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
}
