import * as url from '../../constant.js';

export async function placeBidOnEntry(token, id, amount) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ amount }),
  };

  try {
    const req = await fetch(url.api_base_url + `auction/listings/${id}/bids`, options);
    if (req.ok) {
      const itemData = await req.json();
      return await itemData;
    }
  } catch {
    // Show user a message that they couldn't log in
  }
}
