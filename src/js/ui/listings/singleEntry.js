import { getListings } from '../../api/fetch/listItemDetail.js';

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

export async function displaySingleEntryData() {
  // Receiving the required data
  const data = await getListings(storageToken, id);
  console.log(data);

  // Destructing arrays
  const { _count, bids, description, endsAt, media, seller, title } = data;

  // Removing loader if there is some data
  if (data) {
    itemTitle(title);
    itemSeller(seller);
    itemTime(endsAt);
    itemDescription(description);
    itemImages(media);
    itemBids(_count, bids);
    document.querySelector('.loader').classList.add('d-none');
  }
}
