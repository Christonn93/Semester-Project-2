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
  window.bids = data;

  function renderBids(data) {
    data.forEach((e) => {
      let bids = bidCard(e);
      let itemEndsAt = e.listing.endsAt;
      let itemDate = new Date(itemEndsAt);
      let todayDate = new Date();

      if (itemDate <= todayDate) {
        parentElementEnded.innerHTML += bids;
        document.getElementById('empty-bidsEnded').classList.add('d-none');
      }

      if (itemDate >= todayDate) {
        parentElement.innerHTML += bids;
        document.getElementById('empty-bids').classList.add('d-none');
      }
    });
  }
  renderBids(data);

  /* 
  Hi teacher. 

  I was trying hard to figure out a way to remove a listing if i created a new bid on the same listing
  I was not able to do so, I tried multiple angles to get this working but did not manage to get this done. 
  Could you maybe add a solution to this in the marking feedback? 

  */
}
