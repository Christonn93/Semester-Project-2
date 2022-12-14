import { getListings } from '../api/fetch/listItemDetail.js';
import { changeTimeFormat } from '../tools/time/changeTime.js';
import { sortAmountAsc } from '../tools/sorting/arraySorting.js';

const storageToken = localStorage.getItem('Token');
const urlParams = new URL(location.href);
const id = urlParams.searchParams.get('id');

export async function displaySingleEntryData() {
  const routeName = document.body.id;
  if (routeName == 'singleEntry') {
    const data = await getListings(storageToken, id);
    console.log('From singleEntry.js', data);

    // Destructing arrays
    const { _count, bids, description, endsAt, media, seller, title } = data;

    document.querySelector('title').innerText += title;

    const time = changeTimeFormat(endsAt);

    // Selecting and adding content to title
    const titleElement = document.querySelector('#title');
    titleElement.innerText = title;

    // Selecting and adding content to Description
    const descriptionElement = document.querySelector('#description');
    descriptionElement.innerText = description;

    // Selecting and adding content to timeLeft
    const timeLeft = document.querySelector('#timeLeft');
    timeLeft.innerHTML = `<i class="fa-solid fa-clock"></i> ${time}`;

    // Selecting and adding content to seller information
    const sellerInfo = document.querySelector('#itemSeller');
    sellerInfo.innerHTML = `<img src="${seller.avatar}" class="seller-image-small" alt="...">
          <h6 class="">${seller.name}</h6>`;

    // Selecting and adding content to image
    const imageCarousel = document.querySelector('#imageCarousel');
    let imageArray = media;
    const imageObject = {};

    imageArray.forEach((elem, i) => {
      imageObject[`url-${i}`] = elem;

      // console.log(imageObject);
      const carouselDiv = document.createElement('div');
      carouselDiv.classList.add('carousel-item', 'ag-carousel', 'image-ratio-2');

      const imageEl = document.createElement('img');
      imageEl.classList.add('image-2');
      if (imageArray.length == 0) {
        imageEl.src = 'https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png';
      } else {
        imageEl.src = `${elem}`;
      }

      carouselDiv.append(imageEl);
      const parent = document.querySelector('#imageCarousel');

      if (imageArray.length == 1) {
        carouselDiv.classList.add('carousel-item', 'ag-carousel', 'active');
        const imageNavBtn1 = document.querySelector('.carousel-control-next');
        const imageNavBtn2 = document.querySelector('.carousel-control-prev');
        imageNavBtn1.classList.add('d-none');
        imageNavBtn2.classList.add('d-none');
      } else {
        for (let i = 0; i < parent.children.length; i++) {
          const child = parent.children[0];
          child.classList.add('active');
        }
        carouselDiv.classList.add('carousel-item', 'ag-carousel');
      }

      imageCarousel.append(carouselDiv);
      return;
    });

    // Elements to use to display bid table
    const bidList = document.querySelector('#bidList');
    let startNum = 0;

    const { bids: countBids } = _count;

    if (storageToken) {
      const sortedBids = sortAmountAsc(bids);

      sortedBids.forEach((bid) => {
        const { bidderName, amount, created: bidCreated } = bid;

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
      if (countBids == 0) {
        // console.log('something');
        const listItem = document.createElement('tr');
        listItem.classList.add('table-info');
        listItem.innerHTML = `<th scope="row" class="table-info"></th>
                                <td class="table-info">No bids placed yet! Be the first one to bid on this entry</td>
                                <td class="table-info"></td>
                                <td class="table-info"></td>`;
        bidList.append(listItem);
      }
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
