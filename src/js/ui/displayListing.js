import { getListings } from '../api/fetch/listings.js';
import { changeTimeFormat } from '../tools/changeTime.js';
import { displayListingFactory } from '../tools/displayListingFactory.js';

export async function displayListingUi() {
  const data = await getListings();
  function tagSorting() {
    const tags = data.flatMap((obj) => obj.tags);
    return tags;
  }

  const sortingOfTags = tagSorting();
  const listingItemsList = document.getElementById('listingItems');

  data.forEach((el) => {
    if (el.length < 10) {
      return;
    }
    let { title, description, tags: tags = [], media: media = [], endsAt, id } = el;

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
    switch (routeName) {
      case 'homepage':
        if (sortingOfTags == 'car') {
          listingItemsList.append(displayListingFactory('div', ['col', 'entry-items'], `listingId=${id}`, media, title, description, tags, time, id));
        } else {
          listingItemsList.append(displayListingFactory('div', ['col', 'entry-items'], `listingId=${id}`, media, title, description, tags, time, id));
        }
        break;

      case 'page-listings':
        if (sortingOfTags == 'car') {
          listingItemsList.append(displayListingFactory('div', ['col', 'entry-items'], `listingId=${id}`, media, title, description, tags, time, id));
        } else {
          listingItemsList.append(displayListingFactory('div', ['col', 'entry-items'], `listingId=${id}`, media, title, description, tags, time, id));
        }
        break;
    }
  });
}
