import { updateUserAvatar } from '../api/fetch/updateAvatar.js';
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

      await updateUserAvatar({ avatar: avatar });
    });
  }
};
