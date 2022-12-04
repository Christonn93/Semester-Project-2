import * as url from '../../constant.js';

export async function createNewEntry(title, description, media, tags, endsAt) {
  const token = JSON.parse(localStorage.getItem('Token'));

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, description, media, tags, endsAt }),
  };

  try {
    const req = await fetch(url.api_base_url + url.createNewListingEndPoint, options);
    if (req.ok) {
      console.log(req.json());
      return await req.json();
    }
  } catch {
    // Show user a message that they couldn't log in
  }
}
