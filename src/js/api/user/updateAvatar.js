import { Store } from '../../storage/storage.js';
import { UserProfile } from '../user/userProfile.js';
import { api_base_url } from '../constant.js';

export async function updateUserAvatar(body) {
  const token = JSON.parse(localStorage.getItem('Token'));
  console.log(token);
  const userProfile = JSON.parse(localStorage.getItem('Profile'));
  const userName = userProfile.Name;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ body }),
  };

  try {
    const req = await fetch(api_base_url + `auction/profiles/${userName}/media`, options);
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
    } else {
      const userProfile = JSON.parse(localStorage.getItem('Profile'));
      const userName = userProfile.Name;
      let userAvatar = userProfile.Avatar;
      userAvatar = body;
      const userCredits = userProfile.Credits;
      const userEmail = userProfile.Email;
      const userListing = userProfile.Listings;
      const userWins = userProfile.Wins;
      const profile = new UserProfile(userName, userAvatar, userCredits, userEmail, userListing, userWins);
      localStorage.clear('Profile');
      new Store('Profile', profile);
      location.reload();
    }
  } catch (error) {
    throw new Error(error);
  }
}
