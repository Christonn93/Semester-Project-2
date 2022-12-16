import { profileListingFetch } from '../../api/fetch/profileListingFetch.js';
import { changeTimeFormat } from '../../tools/time/changeTime.js';
import { htmlCards } from '../../../template/card.mjs';

const userToken = localStorage.getItem('Token');
const listingItemsList = document.getElementById('listingItems');
const listingItemsEnded = document.getElementById('listingItemsEnded');

export async function displayUserListingsUi() {
  const data = await profileListingFetch();
  if (!userToken) {
    location.replace('/index.html');
  }

  const dataListing = data.listings;

  dataListing.forEach((el) => {
    let { title, tags: tags = [], media: media = [], endsAt, id } = el;
    let time = changeTimeFormat(endsAt);
    const itemDate = new Date(time);
    const todayDate = new Date();

    // Changing time display if listing have ended
    if (itemDate <= todayDate) {
      time = `<i class="fa-solid fa-exclamation"></i> Auction ended`;
    }

    // Reducing title length
    if (title.length < 10) {
      const cardTitle = document.querySelectorAll('.card-title');
      cardTitle.forEach((e) => {
        e.classList.add('reduce-text-length');
      });
    }

    // Checking media
    if (media.length === 0) {
      media = 'https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png';
    } else if (media.status == 403) {
      media = 'https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png';
    } else {
      media = media[0];
    }

    const items = htmlCards(title, media, time, tags, id);

    // Checking date and appending items in the right containers
    if (itemDate <= todayDate) {
      listingItemsEnded.innerHTML += items;
    } else {
      listingItemsList.innerHTML += items;
      listingItemsList.classList.remove('justify-content-center');
    }

    // Checking if there is items. If it is remove the HTML element
    if (items) {
      document.getElementById('empty-listing').classList.add('d-none');
      document.getElementById('empty-listingEnded').classList.add('d-none');
    }
  });
}
