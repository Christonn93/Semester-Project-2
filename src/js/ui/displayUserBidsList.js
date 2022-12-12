import { profileBidsFetch } from '../api/fetch/profileBidsFetch.js';
import { changeTimeFormat } from '../tools/changeTime.js';

const parentElement = document.getElementById('placedBids');

console.log(parentElement);

export async function displayUserBids() {
  const data = await profileBidsFetch();

  data.forEach((bid) => {
    const { amount, listing } = bid;
    const { title, id, endsAt, media: media = [] } = listing;

    const newTime = changeTimeFormat(endsAt);

    let displayMedia = media[0];

    if (media.length === 0) {
      displayMedia = 'https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png';
    }

    console.log(displayMedia);

    let items = document.createElement('ul');
    items.classList.add('list-group', 'list-group-horizontal', 'shadow', 'bg-theme-beige');
    items.innerHTML = `<li class="list-group-item bg-theme-beige">
            <h3>${title}</h3>
        </li>
        <li class="list-group-item bg-theme-beige">
            <div class="">
                <p class="p-0 m-0">Your bid: ${amount}</p>
                <p class="p-0 m-0">Ends at: ${newTime}</p>
            </div>
        </li>
        <li class="list-group-item bg-theme-beige">
            <a href="/pages/listings/listing-item/index.html?id=${id}" class="btn btn-theme-blue text-center shadow">View item</a>
        </li>`;
    // parentElement.append(items);
  });
}
