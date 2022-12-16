import { sortAmountDsc, sortAmountAsc } from '../../tools/sorting/arraySorting.js';
import { changeTimeFormat } from '../../tools/time/changeTime.js';

// Defining if token is saved
const storageToken = localStorage.getItem('Token');

export const itemBids = (_count, bid) => {
  // Destructing the array data
  const { bids: countBids } = _count;

  // Elements to use to display bid table
  let bidList = document.querySelector('#bidList');

  // Checking if user is logged in or nop
  if (!storageToken) {
    const listItem = document.createElement('tr');
    listItem.classList.add('table-info');
    listItem.innerHTML = `<th scope="row" class="table-info"></th>
                                <td class="table-info">Please sign in to see bids placed</td>
                                <td class="table-info"></td>
                                <td class="table-info"></td>`;
    bidList.append(listItem);
  }

  // If user is logged in
  if (storageToken) {
    // Sorting out the bids array
    const sortedBids = sortAmountDsc(bid);
    const bidData = sortedBids.slice(-3);
    const sortedBidData = sortAmountAsc(bidData);

    // Setting numbers for displaying bids table
    let startNum = 0;
    let num;

    // Printing out the return
    sortedBidData.forEach((bids) => {
      const { bidderName, amount, created: bidCreated } = bids;
      num = ++startNum;

      // Setting time format for when bid is added
      const bidAdded = changeTimeFormat(bidCreated);

      const listItem = document.createElement('tr');
      listItem.innerHTML = `<th scope="row">${num}</th>
                                <td>${bidderName}</td>
                                <td>${bidAdded}</td>
                                <td class="text-end">${amount} <i class="fa-solid fa-coins"></i></td>
                                `;
      bidList.append(listItem);
    });

    // Checking if bids are placed
    if (countBids === 0) {
      const listItem = document.createElement('tr');
      listItem.classList.add('table-info');
      listItem.innerHTML = `<th scope="row" class="table-info"></th>
                            <td class="table-info">No bids placed yet! Be the first one to bid on this entry</td>
                            <td class="table-info"></td>
                            <td class="table-info"></td>`;
      bidList.append(listItem);
    }
  }
};
