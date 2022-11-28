const storageToken = localStorage.getItem('Token');
let fetchUrl;

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
    const req = await fetch(`https://api.noroff.dev/api/v1/auction/listings/${id}?_seller=true&_bids=true`, options);
    if (req.ok) {
      return await req.json();
    }
  } catch {
    // Show user a message that they couldn't log in
  }
}

const url = new URL(location.href);
const id = url.searchParams.get('id');

const data = await getListings(storageToken, id);
console.log(data);
