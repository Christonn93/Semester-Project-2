import { Store } from '../../storage/storage.js';
import { UserProfile } from '../user/userProfile.js';

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
      }
    } catch {
      // Show user a message that they couldn't log in
    }
  }
}
