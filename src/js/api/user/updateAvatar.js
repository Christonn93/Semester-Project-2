import { apiUrl } from '../constant';

export async function updateUserAvatar(body) {
  const token = JSON.parse(localStorage.getItem('Token'));
  const userProfile = localStorage.getItem('Profile');
  const userName = userProfile.name;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };

  try {
    const req = await fetch(apiUrl + `auction/profiles/${userName}/media`, options);
    if (req.ok) {
      window.location.reload();
    }
  } catch {
    // Show user a message that they couldn't log in
  }
}
