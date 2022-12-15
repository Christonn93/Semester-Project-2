import { registerUser } from '../api/auth/sign-up.js';

export function signUpUser() {
  const form = document.querySelector('#signUpForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const form = e.target;
      const data = new FormData(form);
      const userName = data.get('registerUserName');
      const email = data.get('registerEmail');
      const password = data.get('registerPassword');
      const avatar = data.get('registerUserAvatar');

      await registerUser(userName, email, password, avatar);
    });
  }
}
