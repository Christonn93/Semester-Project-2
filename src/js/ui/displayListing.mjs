import { getListings } from '../api/user/listings/listings';
const data = await getListings();

export async function displayListingUi() {
  data.forEach((el) => {
    const { title, description, tags: tags = [], media, endsAt, id, updated, created, _count, seller, bids } = el;
    const { name: sellerName } = seller;

    const listingItemsList = document.querySelector('#listingItems');

    const routeName = document.body.id;
    switch (routeName) {
      // Display only user listings
      case 'dashboard':
        const userName = JSON.parse(localStorage.getItem('Username'))
        if (userName == sellerName) {
          listingItemsList.innerHTML += `<div class="card ac-listing-item">
            <div class="d-flex flex-column justify-content-evenly gap-1">
            <div>
            <img src="${media}" class="card-img-top" alt="..." />
            </div>
            <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <article class="card-text">${description}</article>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${tags}</li>
            <li class="list-group-item">${endsAt}</li>
          </ul>
          <div class="card-body mb-0">
            <a href="../listing/listing-item/index.html?id=${id}" class="card-link">Card link</a>
          </div>
          </div>
        </div>`;
        }
        break;

      case 'homepage':
        if (tags) {
          listingItemsList.innerHTML += `<div class="card ac-listing-item">
              <div class="d-flex flex-column justify-content-evenly gap-1">
              <div>
              <img src="${media}" class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <article class="card-text">${description}</article>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${tags}</li>
              <li class="list-group-item">${endsAt}</li>
            </ul>
            <div class="card-body mb-0">
              <a href="../listing/listing-item/index.html?id=${id}" class="card-link">Card link</a>
            </div>
            </div>
          </div>`;
        }
    }
  });
}
