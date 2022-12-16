import { getListings } from '../../api/fetch/listings.js';
import { changeTimeFormat } from '../../tools/time/changeTime.js';
import { htmlCards } from '../../../template/card.mjs';

export const displayCard = async () => {
  const myData = await getListings();
  const listingItemsList = document.getElementById('listingItems');

  if (myData) {
    document.querySelector('.loader').classList.add('d-none');
  }

  myData.forEach((e) => {
    let { title, media, endsAt, tags, id } = e;

    // Changing the time
    let time = changeTimeFormat(endsAt);
    const itemDate = new Date(time);
    const todayDate = new Date();

    // Changing time display if listing have ended
    if (itemDate <= todayDate) {
      time = `<i class="fa-solid fa-exclamation"></i> Auction ended`;
    }

    // Reducing title length
    if (title.length < 20) {
      const cardTitle = document.querySelectorAll('.card-title');
      cardTitle.forEach((e) => {
        e.classList.add('reduce-text-length');
      });
    }

    // Checking media
    if (media.length <= 0) {
      media = 'https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png';
    } else if (media.status == 403) {
      media = 'https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png';
    } else {
      media = media[0];
    }

    const item = htmlCards(title, media, time, tags, id);
    listingItemsList.innerHTML += item;
    return;
  });
};
