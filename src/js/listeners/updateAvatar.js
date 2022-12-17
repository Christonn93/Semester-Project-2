import { updateUserAvatar } from '../api/user/updateAvatar.js';
import { sendError } from '../ui/apiError.js';
import { Store } from '../storage/storage.js';

export const userAvatarUpdate = () => {
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
        await updateUserAvatar(avatar);
      }

      if (!avatar) {
        await sendError(avatar);
      }
    });
  }
};
