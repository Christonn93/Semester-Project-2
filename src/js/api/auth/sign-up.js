import { Store } from '../../storage/storage.js';
import { UserProfile } from '../../classes/userProfile.js';
import * as apiUrl from '../constant.js';

const feedbackContainer = document.querySelector('#register-feedback');

/**
 * Function to register user.
 *
 * @param {*} name Gets name from form inputs
 * @param {*} email Gets email from form input
 * @param {*} password Gets password from form inputs
 * @param {*} avatar Gets avatar url from form inputs
 */
export async function registerUser(name, email, password, avatar) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password, avatar }),
  };

  try {
    const req = await fetch(apiUrl.api_base_url + 'auction/auth/register', options);
    if (req.ok) {
      // Destructuring response object
      const { name, avatar, credits, email } = await req.json();
      // Store profile object
      const profile = new UserProfile(name, avatar, credits, email);
      new Store('Profile', profile);

      feedbackContainer.innerHTML = `<div class="d-flex flex-column gap-2">
      <p class="text-success m-0">You have now a user with user name: ${name}!</p><p class="text-success m-0">You can now close the this and proceed to login.</p> `;
    }

    if (!req.ok) {
      let res = await req.json();
      if (res.statusCode === 400) {
        let message = res.errors[0].message;
        feedbackContainer.innerHTML = `<div class="d-flex flex-column gap-2">
          <p class="text-danger m-0">Sorry! ${message}</p> 
        </div>`;
        document.getElementById('signUpModal').classList.add('shake');
      }
    }
  } catch (error) {
    throw new Error(error);
  }
}
