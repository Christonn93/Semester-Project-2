import { getListings } from '../api/user/listings/listings.js';
import { displayListingFactory } from '../tools/displayListingFactory.js';
const data = await getListings();

export async function displayListingUi() {
  data.forEach((el) => {
    const { title, description, tags: tags = [], media, endsAt, id, updated, created, _count, seller, bids } = el;
    const { name: sellerName } = seller;

    const listingItemsList = document.querySelector('#listingItems');

    const routeName = document.body.id;
    switch (routeName) {
      // Display only user listings
      case 'dashboard':
        const userName = JSON.parse(localStorage.getItem('Username'))
        if (userName == sellerName) {
          listingItemsList.append(displayListingFactory("div", "card,ac-listing-item", `listingId=${id}`, media, title, description, tags, endsAt, id)) 
        }
        break;

      case 'homepage':
        if (tags[0] == "Car") {
          listingItemsList.append(displayListingFactory("div", "card,ac-listing-item", `listingId=${id}`, media, title, description, tags, endsAt, id)) 
        }
    }
  });
}
