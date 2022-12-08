import { getListings } from '../api/user/listings/listings.js';
import { changeTimeFormat } from '../tools/changeTime.js';
import { displayListingFactory } from '../tools/displayListingFactory.js';

export async function displayListingUi() {
  const data = await getListings();
  function tagSorting() {
    const tags = data.flatMap((obj) => obj.tags);
    return tags;
  }

  const sortingOfTags = tagSorting();

  const userToken = localStorage.getItem('Token');
  const listingItemsList = document.getElementById('listingItems');

  data.forEach((el) => {
    let { title, description, tags: tags = [], media: media = [], endsAt, id, seller } = el;
    let { name: sellerName } = seller;

    if (media.length === 0) {
      media = 'https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png';
    } else if (media.status == 403) {
      media = 'https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png';
    } else {
      media = media[0];
    }

    // const imageUrl = media[0] || `https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png`;

    const time = changeTimeFormat(endsAt);

    // Switch for displaying cards
    const routeName = document.body.id;
    const profile = JSON.parse(localStorage.getItem('Profile'));
    switch (routeName) {
      // Display only user listings
      case 'dashboard':
        if (!userToken) {
          window.location.replace('../../../index.html');
        }

        // Filtering response basted on user name
        if (profile) {
          const { Name } = profile;
          console.log(Name);
          if (Name == sellerName) {
            listingItemsList.append(displayListingFactory('div', ['col', 'entry-items'], `listingId=${id}`, media, title, description, tags, time, id));
          }
        }
        break;

      case 'homepage':
        if (sortingOfTags == 'car') {
          listingItemsList.append(displayListingFactory('div', ['col', 'entry-items'], `listingId=${id}`, media, title, description, tags, time, id));
        } else {
          listingItemsList.append(displayListingFactory('div', ['col', 'entry-items'], `listingId=${id}`, media, title, description, tags, time, id));
        }
        break;
    }
  });
}
