import { profileBidsFetch } from '../../api/fetch/profileBidsFetch.js';
import { changeTimeFormat } from '../../tools/time/changeTime.js';

const parentElement = document.getElementById('placedBids');
const parentElementEnded = document.getElementById('placedBidsEnded');

export async function displayUserBids() {
  const data = await profileBidsFetch();

  data.forEach((bid) => {
    const { amount, listing } = bid;
    const { title, id, endsAt } = listing;

    let time = changeTimeFormat(endsAt);
    const itemDate = new Date(time);
    const todayDate = new Date();

    if (itemDate <= todayDate) {
      time = `<i class="fa-solid fa-exclamation"></i> Auction ended`;
    }

    let items = document.createElement('div');
    items.classList.add('container', 'card', 'shadow', 'bg-theme-beige', 'flex-lg-row', 'p-2', 'gap-2', 'align-items-center', 'flex-sm-column', 'flex-md-column');
    items.innerHTML = `<div class="container">
    <h4>${title}</h4>
  </div>
  <div class="container-fluid d-flex flex-column gap-1">
  <span>Bid amount: ${amount} <i class="fa-solid fa-coins"></i></span>
  <span>Ending at: ${time}</span>
  </div>
  <div class="container d-flex justify-content-end">
    <a href="/pages/listings/listing-item/index.html?id=${id}" class="btn btn-theme-blue text-center shadow">View item</a>
  </div>`;

    // Checking if listing har ended
    if (itemDate <= todayDate) {
      parentElementEnded.append(items);
    } else {
      parentElement.append(items);
    }

    // Checking if there is items. If it is remove the HTML element
    if (items) {
      document.getElementById('empty-bids').classList.add('d-none');
      document.getElementById('empty-bidsEnded').classList.add('d-none');
    }
  });
}
