import { getListings } from '../api/user/listings/listings.js';

// Retrieving array from fetch
const data = await getListings();

// Selecting html element for use in function
const searchInput = document.getElementById('search');

/**
 * A search function that reacts on user input in search field on page.
 */
export function userSearch() {
  searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    data.forEach((item, i) => {
      let isVisible;
      isVisible = item.title.toLowerCase().includes(value) || item.description.toLowerCase().includes(value);
      document.querySelector('#listingItems').children[i].classList.toggle('d-none', !isVisible);
    });
  });
}
userSearch();
