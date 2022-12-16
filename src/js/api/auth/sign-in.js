import { Store } from '../../storage/storage.js';
import { UserProfile } from '../user/userProfile.js';

/**
 *
 * A sign in class.
 * It also store a userprofile in local storage
 *
 */
export class SignIn {
  constructor(email) {
    this.email = email;
  }

  async authenticate(password) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.email,
        password,
      }),
    };

    try {
      const req = await fetch('https://api.noroff.dev/api/v1/auction/auth/login', options);
      if (req.ok) {
        // Destructuring response object
        const { name, avatar, credits, email, accessToken: token } = await req.json();

        // Store accessToken
        new Store('Token', token);

        // Store profile object
        const profile = new UserProfile(name, avatar, credits, email);
        new Store('Profile', profile);
      } else if (!req.ok) {
        const res = await req.json();
        const message = res.errors[0].message;
        // HTML element container
        let errorContainer = document.getElementById('errorContainer-login');
        errorContainer.innerHTML = `<div class="d-flex flex-column gap-2"><p class="text-danger m-0">Sorry, we could not sign you in.</p> <p class="text-danger m-0">${message}</p></div>`;
        document.getElementById('signInModal').classList.add('shake');
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
