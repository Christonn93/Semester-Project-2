export function routerSwitch() {
  // Default/Fallback page title
  const defaultTitle = 'Auction Garage';

  const routeName = document.body.id;
  switch (routeName) {
    // Homepage UI settings
    case 'homepage':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || ` + `Homepage`;
      break;

    // Profile UI settings
    case 'dashboard':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || ` + `Dashboard`;
      break;

    // New entry UI settings
    case 'newEntry':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || ` + `New entry`;
      break;

    // 404 UI settings
    case '404':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || ` + '404';
      break;
    default:
  }
}
