export function displayListingFactory(elementName = '', className = '', elementId = '', media, title, description, tags, endsAt, id) {
  const element = document.createElement(elementName);
  element.classList.add(className);
  element.id = elementId;
  element.innerHTML = `<div class="card ac-listing-item">
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
  <a href="../../listings/listing-item/index.html?id=${id}" class="card-link">Card link</a>
</div>
</div>
</div>`;
  return element;
}
