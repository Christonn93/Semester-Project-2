import { getListings } from '../api/user/listings/listings.js';
const data = await getListings();

// Selecting html element for use in function
const searchInput = document.getElementById('postSearch');

// Retrieving array from fetch
const searchArray = data;

/**
 * A search function that reacts on user input in search field on page.
 */
export function userSearch() {
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const value = e.target.value.toLowerCase();
      searchArray.forEach((post, index) => {
        const isVisible = post.title.toLowerCase().includes(value) + post.description.toLowerCase().includes(value);
        document.querySelector('#listingItems').children[index].classList.toggle('d-none', !isVisible);
      });
    });
  }
}
userSearch();
