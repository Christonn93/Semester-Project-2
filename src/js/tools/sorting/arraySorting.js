/*
This code is based on the structure from the code created by pretzl
repo/file: https://github.com/pretzL/Auctioneer/blob/tailwind/src/js/components/filters/amountFilter.mjs
*/

export function sortAmountAsc(data) {
  const sorted = data.sort((a, b) => {
    const amountA = a.amount;
    const amountB = b.amount;
    if (amountA >= amountB) {
      return -1;
    }
    if (amountA <= amountB) {
      return 1;
    }
    return 0;
  });
  return sorted;
}

export function sortAmountDsc(data) {
  const sorted = data.sort((a, b) => {
    const amountA = a.amount;
    const amountB = b.amount;
    if (amountA >= amountB) {
      return 1;
    }
    if (amountA <= amountB) {
      return -1;
    }
    return 0;
  });
  return sorted;
}
