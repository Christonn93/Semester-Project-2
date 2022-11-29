import { getListings } from '../api/user/listings/listings.js';
import { displayListingFactory } from './displayListingFactory.js';

// Retrieving array from fetch & adding tag
const tag = ['car', 'Car'];
const data = await getListings(tag);

// Selecting html element for use in function
const searchInput = document.getElementById('search');

/**
 * A search function that reacts on user input in search field on page.
 */
export function userSearch() {
  searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    const filteredData = [];
    data.forEach((item) => {
      let isVisible;
      if (item.description !== null) {
        isVisible = item.title.toLowerCase().includes(value) || item.description.toLowerCase().includes(value);
        if (isVisible) {
          filteredData.push(item);
        }
      } else {
        isVisible = item.title.toLowerCase().includes(value);
        if (isVisible) {
          filteredData.push(item);
        }
      }
    });

    console.log(filteredData);
    filteredData.forEach((e) => {
      const { media, title, description, tags, time, id } = e;
      const listingItems = document.getElementById('listingItems');
      listingItems.appendChild(displayListingFactory('div', 'col', `listingId=${id}`, media, title, description, tags, time, id));
    });
  });
}
userSearch();
