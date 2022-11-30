import { getListings } from '../api/user/listings/listings.js';
import { changeTimeFormat } from '../tools/changeTime.js';
import { displayListingFactory } from '../tools/displayListingFactory.js';

export async function displayListingUi() {
  const data = await getListings();

  const filteredTags = data.map((e) => {
    const tags = e.tags;
    return tags;
  });

  // const newTagsObject = {...filteredTags}
  filteredTags.forEach((e) => {
    const newTagsObject = Object.assign({}, e);
  });

  const userToken = localStorage.getItem('Token');
  const listingItemsList = document.getElementById('listingItems');

  data.forEach((el) => {
    const { title, description, tags: tags = [], media, endsAt, id, updated, created, _count, seller, bids } = el;
    const { name: sellerName } = seller;

    const time = changeTimeFormat(endsAt);

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
        const { Name } = profile;
        if (Name == sellerName) {
          listingItemsList.append(displayListingFactory('div', 'col', `listingId=${id}`, media, title, description, tags, time, id));
        }
        break;

      case 'homepage':
        if (tags == 'Car') {
          listingItemsList.append(displayListingFactory('div', 'col', `listingId=${id}`, media, title, description, tags, time, id));
        }
    }
  });
}