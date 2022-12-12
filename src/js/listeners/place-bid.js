import { placeBidOnEntry } from '/src/js/api/listings/place-bid.js';

export const addBidListener = () => {
  const bidForm = document.querySelector('#placeBidForm');
  if (bidForm) {
    bidForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const storageToken = JSON.parse(localStorage.getItem('Token'));
      const urlParams = new URL(location.href);
      const id = urlParams.searchParams.get('id');

      const form = e.target;
      const data = new FormData(form);
      const amountValue = data.get('amount');

      await placeBidOnEntry(storageToken, id, Number(amountValue));
      window.location.reload();
    });
  }
};
