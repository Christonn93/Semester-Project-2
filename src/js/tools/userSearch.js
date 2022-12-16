import { getListings } from '../api/fetch/listings.js';

// Selecting html element for use in search function
const searchInput = document.getElementById('search');

/**
 * A search function that reacts on user input in search field on page.
 */
export async function userSearch() {
  if (searchInput) {
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
            document.querySelector('.loader').classList.add('d-none');
          }
        } else {
          isVisible = item.title.toLowerCase().includes(value);
          if (listItems) {
            listItems.classList.toggle('d-none', !isVisible);
            document.querySelector('.loader').classList.add('d-none');
          }
        }
      });
    });
  }
}
