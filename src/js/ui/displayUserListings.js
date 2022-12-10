import { profileListingFetch } from '../api/fetch/profileListingFetch.js';
import { changeTimeFormat } from '../tools/changeTime.js';
import { displayListingFactory } from '../tools/displayListingFactory.js';

const userToken = localStorage.getItem('Token');

export async function displayUserListingsUi() {
  const data = await profileListingFetch();
  if (!userToken) {
    window.location.replace('/index.html');
  }

  const dataListing = data.listings;

  const listingItemsList = document.getElementById('listingItems');

  dataListing.forEach((el) => {
    let { title, description, tags: tags = [], media: media = [], endsAt, id } = el;
    const time = changeTimeFormat(endsAt);

    if (media.length === 0) {
      media = 'https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png';
    } else if (media.status == 403) {
      media = 'https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png';
    } else {
      media = media[0];
    }

    listingItemsList.append(displayListingFactory('div', ['col', 'entry-items'], `listingId=${id}`, media, title, description, tags, time, id));
  });
}
