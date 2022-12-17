import { updateUserAvatar } from '../api/user/updateAvatar.js';
import { sendError } from '../ui/apiError.js';

export function userAvatarUpdate() {
  let form = document.getElementById('userAvatarUpdate');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      let form = e.target;
      let data = new FormData(form);
      let avatar = data.get('userAvatarInput');

      let profile = localStorage.get('Profile');
      console.log(profile);
      await updateUserAvatar(avatar);

      if (!avatar) {
        await sendError(avatar);
      }
    });
  }
}
