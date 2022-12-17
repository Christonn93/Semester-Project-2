import { changeTimeFormat } from '../../tools/time/changeTime.js';

export const bidCard = (data) => {
  let { amount, listing } = data;
  let { title, id, endsAt } = listing;

  let time = changeTimeFormat(endsAt);
  let itemDate = new Date(time);
  let todayDate = new Date();

  if (itemDate <= todayDate) {
    time = `<i class="fa-solid fa-exclamation"></i> Auction ended`;
  }

  return `<div class="container card shadow bg-theme-beige flex-lg-row p-2 gap-2 align-items-center flex-sm-column flex-md-column bid-info" id="${id}">
<div class="container"><h4>${title}</h4></div>
<div class="container-fluid d-flex flex-column gap-1">
<span>Bid amount: ${amount} <i class="fa-solid fa-coins"></i></span>
<span>Ending at: ${time}</span>
</div>
<div class="container d-flex justify-content-end">
<a href="/pages/listings/listing-item/index.html?id=${id}" class="btn btn-theme-blue text-center shadow">View item</a>
</div>
</div>`;
};
