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
    console.log(req);
    if (req.ok) {
      // Destructuring response object
      const { name, avatar, credits, email } = await req.json();

      // Store profile object
      const profile = new UserProfile(name, avatar, credits, email);
      new Store('Profile', profile);
    }
  } catch {
    return alert('There was a problem creating the user');
  }
}
