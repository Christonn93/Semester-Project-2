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
  case 'profile':
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
