import { getListings } from '../api/user/listings/listings.js';

// Selecting html element for use in search function
const searchInput = document.getElementById('search');

/**
 * A search function that reacts on user input in search field on page.
 */
export async function userSearch() {
  // Retrieving array from fetch & adding tag
  const tag = ['car', 'Car'];
  const data = await getListings(tag);
  searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    data.forEach((item, i) => {
      const listingItemsList = document.getElementById('listingItems');
      const listItems = listingItemsList.children[i];
      let isVisible;
      if (item.description !== null) {
        isVisible = item.title.toLowerCase().includes(value) || item.description.toLowerCase().includes(value);
        if (listItems) {
          listItems.classList.toggle('d-none', !isVisible);
        }
      } else {
        isVisible = item.title.toLowerCase().includes(value);
        if (listItems) {
          listItems.classList.toggle('d-none', !isVisible);
        }
      }
    });
  });
}
userSearch();
