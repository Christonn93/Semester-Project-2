import { updateUserAvatar } from '../api/user/updateAvatar.js';
import { sendError } from '../ui/apiError.js';
import { sendSuccess } from '../ui/apiSuccess.js';
import { Store } from '../storage/storage.js';

export function userAvatarUpdate() {
  let form = document.getElementById('userAvatarUpdate');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      let form = e.target;
      let data = new FormData(form);
      let avatar = data.get('userAvatarInput');

      let profile = JSON.parse(localStorage.getItem('Profile'));
      let newProfile = { ...profile, Avatar: avatar };
      new Store('Profile', newProfile);

      if (newProfile) {
        sendSuccess('Congratulation! You have updated your avatar');
        await updateUserAvatar(avatar);
      }

      if (!avatar) {
        await sendError(avatar);
      }
    });
  }
}
