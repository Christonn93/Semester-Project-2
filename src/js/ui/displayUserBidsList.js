import { profileBidsFetch } from '../api/fetch/profileBidsFetch.js';
import { changeTimeFormat } from '../tools/time/changeTime.js';

const parentElement = document.getElementById('placedBids');

export async function displayUserBids() {
  const data = await profileBidsFetch();

  data.forEach((bid) => {
    const { amount, listing } = bid;
    const { title, id, endsAt } = listing;

    const newTime = changeTimeFormat(endsAt);

    let items = document.createElement('div');
    items.classList.add('container', 'card', 'shadow', 'bg-theme-beige', 'flex-lg-row', 'p-2', 'gap-2', 'align-items-center', 'flex-sm-column', 'flex-md-column');
    items.innerHTML = `<div class="container">
    <h4>${title}</h4>
  </div>
  <div class="container-fluid d-flex flex-column gap-1">
  <span>Bid amount: ${amount} <i class="fa-solid fa-coins"></i></span>
  <span>Ending at: ${newTime}</span>
  </div>
  <div class="container d-flex justify-content-end">
    <a href="/pages/listings/listing-item/index.html?id=${id}" class="btn btn-theme-blue text-center shadow">View item</a>
  </div>`;
    parentElement.append(items);
  });
}
