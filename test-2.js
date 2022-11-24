async function getListings() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };

  try {
    const req = await fetch('https://api.noroff.dev/api/v1/auction/listings', options);
    if (req.ok) {
      // Destructuring response object
      return await req.json();
    }
  } catch {
    // Show user a message that they couldn't log in
  }
}

const data = await getListings();
console.log(data);

data.forEach((el) => {
  const { title, description, tags: tags = [], media, endsAt, id, updated, created, _count } = el;

  const listingItemsList = document.querySelector('#listingItems');

  if (tags) {
    listingItemsList.innerHTML += `<div class="card ac-listing-item">
        <div class="d-flex flex-column justify-content-evenly gap-1">
        <div>
        <img src="${media}" class="card-img-top" alt="..." />
        </div>
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <article class="card-text">${description}</article>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${tags}</li>
        <li class="list-group-item">${endsAt}</li>
      </ul>
      <div class="card-body mb-0">
        <a href="../listing/listing-item/index.html?id=${id}" class="card-link">Card link</a>
      </div>
      </div>
    </div>`;
  }
});
