// import { updateUserAvatar } from "../api/user/updateAvatar";

export function userAvatarUpdate() {
  const updateForm = document.querySelector('#userAvatarUpdate');

  updateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = e.target;
    const formInput = form.userAvatarInput.value;

    if (formInput) {
      console.log(formInput);
      // updateUserAvatar(formInput)
    }
  });
}
