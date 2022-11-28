import * as url from '../../constant';

const storageToken = localStorage.getItem('Token');

async function getListings(token, id) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(),
  };

  try {
    const req = await fetch(url.api_base_url + url.listingEndPoint, +`${id}` + url.sellerAndBidsFlags, options);
    if (req.ok) {
      return await req.json();
    }
  } catch {
    // Show user a message that they couldn't log in
  }
}

const urlParams = new URL(location.href);
const id = urlParams.searchParams.get('id');

const data = await getListings(storageToken, id);
console.log(data);
