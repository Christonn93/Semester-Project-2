import * as url from '/src/js/api/constant.js';
import { uiMessage } from '/src/js/ui/errorHandling.js';

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
    if (!req.ok) {
      uiMessage('error', 'Sorry, we could not proceed with your request. Try again later');
    } else {
      return;
    }
  } catch {
    uiMessage('error', 'Sorry, we could not proceed with your request. Try again later');
  }
}
