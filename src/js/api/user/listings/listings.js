import * as url from '../../constant';

export async function getListings() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };

  try {
    const req = await fetch(url.api_base_url + url.listingEndPoint, options);
    if (req.ok) {
      // Destructuring response object

      const data = await req.json();
      return data;
    }
  } catch {
    // Show user a message that they couldn't log in
  }
}
