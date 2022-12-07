import { registerUser } from '../api/auth/sign-up.js';

export function signUpUser() {
  const form = document.querySelector('#signUpForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      console.log('it the right form');

      const form = e.target;
      const data = new FormData(form);
      const userName = data.get('registerUserName');
      const email = data.get('registerEmail');
      const password = data.get('registerPassword');
      const avatar = data.get('registerUserAvatar');

      let userRegistration = await registerUser(userName, email, password, avatar);
      if (userRegistration.ok) {
        window.location.reload();
        document.querySelector('#signInForm').modal('show');
      }
    });
  }
}
