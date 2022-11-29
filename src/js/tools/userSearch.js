import { getListings } from '../api/user/listings/listings.js';
import { displayListingFactory } from './displayListingFactory.js';

// Retrieving array from fetch & adding tag
const tag = ['car', 'Car'];
const data = await getListings(tag);

// Selecting html element for use in search function
const searchInput = document.getElementById('search');

/**
 * A search function that reacts on user input in search field on page.
 */
export function userSearch() {
  searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    const filteredData = [];

    const listingItemsList = document.getElementById('listingItems');
    let listChildren = listingItemsList.children;
    data.forEach((item, i) => {
      let isVisible;
      if (item.description !== null) {
        isVisible = item.title.toLowerCase().includes(value) || item.description.toLowerCase().includes(value);
        if (isVisible) {
          for (let i = 0; i < listChildren.length; i++) {
            listChildren[i].classList.add('d-none', !isVisible);
          }
        }
      } else {
        isVisible = item.title.toLowerCase().includes(value);
        if (isVisible) {
          for (let i = 0; i < listChildren.length; i++) {
            listChildren[i].classList.add('d-none', !isVisible);
          }
        }
      }

      if (!value) {
        for (let i = 0; i < listChildren.length; i++) {
          listChildren[i].classList.remove('d-none', !isVisible);
        }
      }
    });
  });
}
userSearch();
