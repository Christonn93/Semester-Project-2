import { Store } from '../../storage/storage.js';
import { UserProfile } from '../user/userProfile.js';
import * as apiUrl from '../constant.js';

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
    }

    if (!req.ok) {
      const res = await req.json();
      let errorContainer = document.getElementById('errorContainer-register');

      if (res.statusCode === 400) {
        const message = res.errors[0].message;
        errorContainer.innerHTML = `<div class="d-flex flex-column gap-2">
          <p class="text-danger m-0">Sorry! ${message}</p> 
        </div>`;
        document.getElementById('signUpModal').classList.add('shake');
      }
    }
  } catch (error) {
    throw new Error(error);
  }
}
