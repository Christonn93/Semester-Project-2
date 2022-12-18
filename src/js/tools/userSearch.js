import { getListings } from '../api/fetch/listings.js';

// Selecting html element for use in search function
const searchInput = document.getElementById('search');

// Retrieving array from fetch & adding tag
const data = await getListings();
console.log(data);
/**
 * A search function that reacts on user input in search field on page.
 */
export async function userSearch() {
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const value = e.target.value.toLowerCase();
      data.forEach((item, i) => {
        const listingItemsList = document.getElementById('listingItems');
        const listItems = listingItemsList.children[i];
        let isVisible;
        isVisible = item.title.toLowerCase().includes(value);
        if (listItems) {
          listItems.classList.toggle('d-none', !isVisible);
          document.querySelector('.loader').classList.add('d-none');
        }
      });
    });
  }
}
