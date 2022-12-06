import { getListings } from '../api/user/listings/listItemDetail.js';
import { changeTimeFormat } from '../tools/changeTime.js';

const storageToken = localStorage.getItem('Token');
const urlParams = new URL(location.href);
const id = urlParams.searchParams.get('id');

export async function displaySingleEntryData() {
  const routeName = document.body.id;
  if (routeName == 'singleEntry') {
    const data = await getListings(storageToken, id);
    console.log('From singleEntry.js', data);

    // Destructing arrays
    const { _count, bids, created, description, endsAt, id: itemId, media, seller, tags, title, updated } = data;

    // Selecting and adding content to title
    const titleElement = document.querySelector('#title');
    titleElement.innerText = title;

    // Selecting and adding content to Description
    const descriptionElement = document.querySelector('#description');
    descriptionElement.innerText = description;

    // Selecting and adding content to timeLeft
    const timeLeft = document.querySelector('#timeLeft');
    timeLeft.innerHTML = `<i class="fa-solid fa-clock"></i> ${endsAt}`;

    // Selecting and adding content to seller information
    const sellerInfo = document.querySelector('#itemSeller');
    sellerInfo.innerHTML = `<img src="${seller.avatar}" class="seller-image-small" alt="...">
          <h6 class="">${seller.name}</h6>`;

    // Selecting and adding content to image
    const imageCarousel = document.querySelector('#imageCarousel');
    const imageArray = media;

    const imageObject = {};

    imageArray.forEach((elem, i) => {
      imageObject[`url-${i}`] = elem;
      // console.log(imageObject);
      const carouselDiv = document.createElement('div');
      carouselDiv.classList.add('carousel-item', 'ag-carousel');

      const imageEl = document.createElement('img');
      imageEl.classList.add('d-block', 'w-100', 'm-auto');
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
        const imageNavBtn1 = document.querySelector('.carousel-control-next');
        const imageNavBtn2 = document.querySelector('.carousel-control-prev');
        imageNavBtn1.classList.add('d-none');
        imageNavBtn2.classList.add('d-none');
        // console.log("this is showing")
      }

      imageCarousel.append(carouselDiv);
      return;
    });

    // Elements to use to display bid table
    const bidList = document.querySelector('#bidList');
    let startNum = 0;

    const { bids: countBids } = _count;
    const bidAmount = JSON.stringify(countBids);

    if (storageToken) {
      bids.forEach((bid) => {
        const { bidderName, amount, created: bidCreated, id: biddersId } = bid;
        let num;
        num = ++startNum;

        // Changing timeFormat
        const bidAdded = changeTimeFormat(bidCreated);

        const listItem = document.createElement('tr');
        listItem.innerHTML = `<th scope="row">${num}</th>
                              <td>${bidderName}</td>
                              <td>${bidAdded}</td>
                              <td class="text-end">${amount} <i class="fa-solid fa-coins"></i></td>
                              `;
        bidList.append(listItem);
      });
    } else if (storageToken || _count == 0) {
      const listItem = document.createElement('tr');
      listItem.classList.add('table-info');
      listItem.innerHTML = `<th scope="row" class="table-info"></th>
                              <td class="table-info">No bids placed yet! Be the first one to bid on this entry</td>
                              <td class="table-info"></td>
                              <td class="table-info"></td>`;
      bidList.append(listItem);
    } else {
      const listItem = document.createElement('tr');
      listItem.classList.add('table-info');
      listItem.innerHTML = `<th scope="row" class="table-info"></th>
                              <td class="table-info">Please sign in to see bids placed</td>
                              <td class="table-info"></td>
                              <td class="table-info"></td>`;
      bidList.append(listItem);
    }
  }
}
