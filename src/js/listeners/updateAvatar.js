// import { updateUserAvatar } from '../api/user/updateAvatar';

export function userAvatarUpdate() {
  const updateForm = document.querySelector('#userAvatarUpdate');

  updateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const avatarUrl = data.get('userAvatarInput');

    if (avatarUrl) {
      console.log(avatarUrl);
      // updateUserAvatar(formInput);
    }
  });
}
