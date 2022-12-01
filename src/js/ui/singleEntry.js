import { getListings } from '../api/user/listings/listItemDetail.js';

const storageToken = localStorage.getItem('Token');
const urlParams = new URL(location.href);
const id = urlParams.searchParams.get('id');

export async function displaySingleEntryData() {
  const routeName = document.body.id;
  if (routeName == 'singleEntry') {
    const data = await getListings(storageToken, id);
    // console.log("From singleEntry.js", data)

    // Selecting and adding content to title
    const title = document.querySelector('#title');
    title.innerText = data.title;

    // Selecting and adding content to Description
    const description = document.querySelector('#description');
    description.innerText = data.description;

    // Selecting and adding content to timeLeft
    const timeLeft = document.querySelector('#timeLeft');
    timeLeft.innerHTML = `<i class="fa-solid fa-clock"></i> ${data.endsAt}`;

    // Selecting and adding content to seller information
    const sellerInfo = document.querySelector('#itemSeller');
    sellerInfo.innerHTML = `<img src="${data.seller.avatar}" class="seller-image-small" alt="...">
          <h6 class="">${data.seller.name}</h6>`;

    // Selecting and adding content to image
    const imageCarousel = document.querySelector('#imageCarousel');
    const imageArray = data.media;

    const imageObject = {};

    imageArray.forEach((elem, i) => {
      imageObject[`url-${i}`] = elem;
      console.log(imageObject);
      const carouselDiv = document.createElement('div');
      carouselDiv.classList.add('carousel-item', 'ag-carousel');

      const imageEl = document.createElement('img');
      imageEl.classList.add('d-block', 'w-100');
      imageEl.src = `${elem}`;

      carouselDiv.append(imageEl);
      const parent = document.querySelector('#imageCarousel');

      if (!parent.length < 0) {
        for (let i = 0; i < parent.children.length; i++) {
          const child = parent.children[0];
          child.classList.add('active');
        }
      } else {
        carouselDiv.classList.add('carousel-item', 'ag-carousel', 'active');
      }

      imageCarousel.append(carouselDiv);
      return;
    });
  }
}
