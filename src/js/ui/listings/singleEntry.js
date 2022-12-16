import { getSingleListing } from '../../api/fetch/listItemDetail.js';

// Importing functions to display the item
import { itemTitle } from '../ui-elements/title.js';
import { itemSeller } from '../ui-elements/seller.js';
import { itemTime } from '../ui-elements/time.js';
import { itemDescription } from '../ui-elements/description.js';
import { itemImages } from '../ui-elements/imageCarousel.js';
import { itemBids } from '../ui-elements/bids.js';

// Receiving the required data
const storageToken = localStorage.getItem('Token');
const urlParams = new URL(location.href);
const id = urlParams.searchParams.get('id');

/**
 *
 * Function to display single items data.
 */
export async function displaySingleEntryData() {
  // Receiving the required data
  const data = await getSingleListing(storageToken, id);
  console.log(data);

  // Destructing arrays
  const { _count, bids, description, endsAt, media, seller, title } = data;

  // Removing loader if there is some data
  if (data) {
    document.getElementById('singleEntry').innerText += title;

    itemTitle(title);
    itemSeller(seller);
    itemTime(endsAt);
    itemDescription(description);
    itemImages(media);
    itemBids(_count, bids);
    document.querySelector('.loader').classList.add('d-none');
  }

  if (!data.ok) {
    const res = await data.json();
    const statusCode = res.statusCode;
    const message = res.errors[0].message;
    let main = document.querySelector('main');
    let errorContainer = document.createElement('div');

    if (statusCode === 400) {
      errorContainer.innerHTML = `<div class="d-flex flex-column gap-2">
        <p class="text-danger m-0">Sorry! ${message}</p> 
      </div>`;
      document.getElementById('placeBidForm').classList.add('shake', '');
    }
    main.append(errorContainer);
  }
}
