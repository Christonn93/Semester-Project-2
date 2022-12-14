import { profileListingFetch } from '../api/fetch/profileListingFetch.js';
import { changeTimeFormat } from '../tools/time/changeTime.js';
import { displayListingFactory } from '../tools/displayListingFactory.js';

const userToken = localStorage.getItem('Token');

export async function displayUserListingsUi() {
  const data = await profileListingFetch();
  if (!userToken) {
    window.location.replace('/index.html');
  }

  const dataListing = data.listings;

  const listingItemsList = document.getElementById('listingItems');
  const listingItemsEnded = document.getElementById('listingItemsEnded');

  dataListing.forEach((el) => {
    let { title, tags: tags = [], media: media = [], endsAt, id } = el;
    let time = changeTimeFormat(endsAt);
    const itemDate = new Date(time);
    const todayDate = new Date();

    if (itemDate <= todayDate) {
      time = `<i class="fa-solid fa-exclamation"></i> Auction ended`;
    }

    if (media.length === 0) {
      media = 'https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png';
    } else if (media.status == 403) {
      media = 'https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png';
    } else {
      media = media[0];
    }

    const items = displayListingFactory('div', ['col', 'entry-items'], `listingId=${id}`, media, title, tags, time, id);

    if (itemDate <= todayDate) {
      listingItemsEnded.append(items);
      document.getElementById('empty-listing').classList.add('d-none');
    } else {
      listingItemsList.append(items);
      document.getElementById('empty-listingEnded').classList.add('d-none');
    }
  });
}
