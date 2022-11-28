import { SignIn } from '../api/auth/sign-in.js';

export function signInUser() {
  const button = document.querySelector('#signInBtn');
  if (button) {
    button.addEventListener('click', async (e) => {
      e.preventDefault();

      const form = document.querySelector('#signInForm');
      const email = form.email.value;
      const password = form.password.value;
      const user = new SignIn(email, password);
      await user.authenticate(password);
    });
  }
}
