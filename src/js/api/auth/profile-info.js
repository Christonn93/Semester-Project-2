import { Store } from '../../storage/storage.js';
import { UserProfile } from '../user/userProfile.js';
import * as apiUrl from '../constant.js';

/**
 * Function to get profile data from the api
 */
export async function getProfileDetails() {
  const storageToken = JSON.parse(localStorage.getItem('Token'));
  const profile = JSON.parse(localStorage.getItem('Profile'));
  const userName = profile.Name;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storageToken}`,
    },
  };
  try {
    const req = await fetch(apiUrl.api_base_url + apiUrl.GetProfileDetails + `${userName}?_listings=true&_wins=true`, options);
    if (req.ok) {
      const data = await req.json();
      const { name, avatar, credits, email, listings: listings = [], wins: wins = [] } = data;
      // console.log('From profileListingFetch.js', data);
      // Store profile object
      const profile = new UserProfile(name, avatar, credits, email, listings, wins);
      localStorage.removeItem('Profile');
      new Store('Profile', profile);
    }
  } catch (error) {
    throw new Error(error);
  }
}
