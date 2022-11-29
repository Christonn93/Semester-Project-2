import { Store } from '../../storage/storage.js';
import { UserProfile } from '../user/userProfile.js';
import * as apiUrl from '../constant.js';

export class SignUp {
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
      const req = await fetch(apiUrl + 'auction/auth/register', options);
      if (req.ok) {
        // Destructuring response object
        const { name, avatar, credits, email, accessToken: token } = await req.json();

        // Store accessToken
        new Store('Token', token);

        // Store profile object
        const profile = new UserProfile(name, avatar, credits, email);
        new Store('Profile', profile);
      }
    } catch {
      // Show user a message that they couldn't log in
    }
  }
}
