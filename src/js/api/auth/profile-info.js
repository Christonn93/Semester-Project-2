import { Store } from '../../storage/storage.js';
import { UserProfile } from '../user/userProfile.js';
import * as apiUrl from '../constant.js';

export async function getProfileDetails() {
  const storageToken = JSON.parse(localStorage.getItem('Token'));
  const userName = JSON.parse(localStorage.getItem('Name'));
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storageToken}`,
    },
  };
  try {
    const req = await fetch(apiUrl.api_base_url + apiUrl.GetProfileDetails + `${userName}?_listings=true`, options);
    if (req.ok) {
      console.log(await req.json());
      const { name, avatar, credits, email, listings, wins } = await req.json();

      // Store profile object
      localStorage.removeItem('Profile');
      const profile = new UserProfile(name, avatar, credits, email, listings, wins);
      new Store('Profile', profile);
    }
  } catch {
    // Show user a message that they couldn't log in
  }
}
