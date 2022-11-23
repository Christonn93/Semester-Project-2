// Default/Fallback page title
const defaultTitle = 'Auction Garage';

const routeName = document.body.id;
switch (routeName) {
  // Homepage UI settings
  case 'homepage':
    // Page title
    document.querySelector('title').innerText =
      defaultTitle + ` || ` + `Homepage`;
    break;

  // Profile UI settings
  case 'dashboard':
    // Page title
    document.querySelector('title').innerText =
      defaultTitle + ` || ` + `Dashboard`;
    break;

  // 404 UI settings
  case '404':
    // Page title
    document.querySelector('title').innerText = defaultTitle + ` || ` + '404';
    break;
  default:
}

// All this code is just for testing, remove when testing is complete

import { Store } from './src/js/storage/storage';
import { UserProfile } from './src/js/api/user/userProfile';

class SignIn {
  constructor(email) {
    this.email = email;
  }

  async authenticate(password) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.email,
        password,
      }),
    };

    try {
      const req = await fetch(
        'https://api.noroff.dev/api/v1/auction/auth/login',
        options
      );
      if (req.ok) {
        // Destructuring response object
        const {
          name,
          avatar,
          credits,
          email,
          accessToken: token,
        } = await req.json();

        // Store accessToken
        new Store('Token', token);

        // Store profile object
        const profile = new UserProfile(name, avatar, credits, email);
        new Store('Profile', profile);
      }
    } catch {
      // Show user a message that they couldn't log in
    }
  }
}

const button = document.querySelector('#signInBtn');
if (button) {
  button.addEventListener('click', async (e) => {
    e.preventDefault();

    const form = document.querySelector('#signInForm');
    const email = form.email.value;
    const password = form.password.value;
    const user = new SignIn(email, password);
    await user.authenticate(password);

    // Checking if token is in storage
    const userToken = localStorage.getItem('Token');
    if (userToken) {
      window.location.replace('./pages/user/dashboard/index.html');
    }
  });
}
