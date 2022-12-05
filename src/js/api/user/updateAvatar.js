import { Store } from '../../storage/storage.js';
import { UserProfile } from '../user/userProfile.js';
import { api_base_url } from '../constant.js';
import { uiMessage } from '../../ui/errorHandling.js';

export async function updateUserAvatar(body) {
  const token = JSON.parse(localStorage.getItem('Token'));
  console.log(token);
  const userProfile = JSON.parse(localStorage.getItem('Profile'));
  const userName = userProfile.Name;
  console.log(userName);
  console.log(userProfile);

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
      uiMessage('error', 'Please add a valid image URL');
    } else {
      const userProfile = JSON.parse(localStorage.getItem('Profile'));
      const userName = userProfile.Name;
      let userAvatar = userProfile.Avatar;
      userAvatar = body;
      const userCredits = userProfile.Credits;
      const userEmail = userProfile.Email;
      const profile = new UserProfile(userName, userAvatar, userCredits, userEmail);
      new Store('Profile', profile);
      window.location.reload();
    }
  } catch {
    uiMessage('error', 'Please add a valid image URL');
  }
}
