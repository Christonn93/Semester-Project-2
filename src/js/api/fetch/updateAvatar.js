import { api_base_url } from '../constant.js';
import { sendError } from '../../ui/apiError.js';
import { sendSuccess } from '../../ui/apiSuccess.js';

export const updateUserAvatar = async (body) => {
  let token = JSON.parse(localStorage.getItem('Token'));
  let userProfile = JSON.parse(localStorage.getItem('Profile'));

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };

  try {
    const req = await fetch(api_base_url + `auction/profiles/${userProfile.Name}/media`, options);
    const res = await req.json();
    if (!req.ok) {
      await sendError(res.errors[0].message);
    } else {
      // Do something
      sendSuccess('Congratulation! You have updated your avatar');
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  } catch (error) {
    // Sending new error if something is wrong with the fetch
    throw new Error(error);
  }
};
