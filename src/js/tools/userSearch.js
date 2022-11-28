import { getListings } from '../api/user/listings/listings.js';

// Retrieving array from fetch
const searchArray = await getListings();

// Selecting html element for use in function
const searchInput = document.getElementById('search');

/**
 * A search function that reacts on user input in search field on page.
 */
export function userSearch() {
  searchInput.addEventListener('input', (e) => {
    const value = e.target.value;
    searchArray.forEach((post, index) => {
      let isVisible;
      isVisible = post.title.includes(value);
      isVisible = post.description.toLowerCase().includes(value);
      document.querySelector('#listingItems').children[index].classList.toggle('d-none', !isVisible);
    });
  });
}
userSearch();
