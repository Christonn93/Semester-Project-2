import * as url from '../constant.js';

export async function placeBidOnEntry(token, id, amount) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ amount }),
  };

  let feedbackBid = document.getElementById('feedback-bid');

  try {
    const req = await fetch(url.api_base_url + `auction/listings/${id}/bids`, options);
    if (!req.ok) {
      const res = await req.json();
      const statusCode = res.statusCode;
      const message = res.errors[0].message;

      if (statusCode === 400) {
        feedbackBid.innerHTML = `<div class="d-flex flex-column gap-2">
          <p class="text-danger m-0">Sorry! ${message}</p> 
        </div>`;
        document.getElementById('placeBidForm').classList.add('shake', '');
      }
    }
    if (req.ok) {
      feedbackBid.innerHTML = `<div class="d-flex flex-column gap-2">
      <p class="text-success m-0">Congratulation! Bid have been placed. Keep an eye on the item!</p> 
    </div>`;
      const itemData = await req.json();
      return await itemData;
    }
  } catch (error) {
    throw new Error(error);
  }
}
