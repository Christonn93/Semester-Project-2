export async function getListings() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };

  try {
    const req = await fetch('https://api.noroff.dev/api/v1/auction/listings/?limit=3', options);
    if (req.ok) {
      // Destructuring response object
      return await req.json();
    }
  } catch {
    // Show user a message that they couldn't log in
  }
}
