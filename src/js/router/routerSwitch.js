import * as func from '../index.js';

export function routerSwitch() {
  // Default/Fallback page title
  const defaultTitle = 'Auction Garage';

  const routeName = document.body.id;
  switch (routeName) {
    // Homepage UI settings
    case 'homepage':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || Homepage`;
      func.userSearch();
      func.displayListingUi();
      break;

    // Profile UI settings
    case 'dashboard':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || ` + `Dashboard`;
      func.displayProfileInformation();
      func.userAvatarUpdate();
      func.displayUserListingsUi();
      func.displayUserBids();
      break;

    // New entry UI settings
    case 'singleEntry':
      // Page title
      func.displaySingleEntryData();
      func.addBidListener();
      document.querySelector('title').innerText = defaultTitle + ` || `;
      break;

    // New entry UI settings
    case 'newEntry':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || ` + `New entry`;
      break;

    // About UI settings
    case 'about':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || ` + `About Us`;
      break;

    // Contact UI settings
    case 'contact':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || ` + `Contact Us`;
      break;

    // listings UI settings
    case 'page-listings':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || ` + `Listings`;
      func.userSearch();
      func.displayListingUi();
      break;

    // 404 UI settings
    case '404':
      // Page title
      document.querySelector('title').innerText = defaultTitle + ` || ` + '404';
      break;
    default:
  }
}
