import { getListings } from '../api/user/listings/listings.js';
import { displayListingFactory } from '../tools/displayListingFactory.js';
const data = await getListings();

const userToken = localStorage.getItem('Token');
const listingItemsList = document.querySelector('#listingItems');

export async function displayListingUi() {
  data.forEach((el) => {
    const { title, description, tags: tags = [], media, endsAt, id, updated, created, _count, seller, bids } = el;
    const { name: sellerName } = seller;
    // Switch for displaying cards
    const routeName = document.body.id;
    switch (routeName) {
      // Display only user listings
      case 'dashboard':
        if (!userToken) {
          window.location.replace('../../../index.html');
        }
        
        // Filtering response basted on user name
        const profile = JSON.parse(localStorage.getItem('Profile'));
        const { Name } = profile
        if (Name == sellerName) {
          listingItemsList.append(displayListingFactory('div', 'card,ac-listing-item', `listingId=${id}`, media, title, description, tags, endsAt, id));
        }
        break;

      case 'homepage':
        if (tags[0] == 'Car') {
          listingItemsList.append(displayListingFactory('div', 'card,ac-listing-item', `listingId=${id}`, media, title, description, tags, endsAt, id));
        }
    }
  });
}
