import { profileBidsFetch } from '../../api/fetch/profileBidsFetch.js';
import { bidCard } from '../ui-elements/bidsCards.js';

const parentElement = document.getElementById('placedBids');
const parentElementEnded = document.getElementById('placedBidsEnded');

/**
 * This function creating the display for bids on to the dashboard
 *
 */
export async function displayUserBids() {
  const data = await profileBidsFetch();

  // Checking if there is items. If it is remove the HTML element
  if (data) {
    document.getElementById('empty-bids').classList.add('d-none');
    document.getElementById('empty-bidsEnded').classList.add('d-none');
  }

  window.bids = data;

  renderBids(data);

  function renderBids(data) {
    data.forEach((e) => {
      let bids = bidCard(e);
      const itemDate = new Date(e.endsAt);
      const todayDate = new Date();

      if (itemDate <= todayDate) {
        parentElementEnded.innerHTML += bids;
      } else {
        parentElement.innerHTML += bids;
      }
    });
  }

  // function updateBid(bids) {
  //   const updatedBids = window.bids.map(...renderBids(updatedBids));
  // }
}
