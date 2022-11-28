/**
 *
 * This function is used to populate cards with information from the API call you are making. You can change the innerHTML property of the function to adjust it to what your heart desire
 *
 * @param {*} elementName Input the HTML element you want to create
 * @param {*} className Input the classname you want the element to have
 * @param {*} elementId Input the element id
 * @param {*} media This one is adding profile image for the author of the post
 * @param {*} title Adds the title to the post
 * @param {*} description Adds the author of the post
 * @param {*} tags Adds the time the post was created
 * @param {*} endsAt Adds the body content for the card
 * @param {*} id Adds post media if it is any
 * @returns the card with the information you want
 */
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
