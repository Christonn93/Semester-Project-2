import * as url from '../../constant';

export async function getListings(token, id) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(),
  };

  try {
    const req = await fetch(url.api_base_url + url.singleListingEndPoint + `${id}/` + url.sellerAndBidsFlags, options);
    if (req.ok) {
      return await req.json();
    }
  } catch {
    // Show user a message that they couldn't log in
  }
}
