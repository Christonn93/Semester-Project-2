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
export function displayListingFactory(elementName = '', className, elementId = '', media, title, description, tags, endsAt, id) {
  const element = document.createElement(elementName);
  element.classList.add(className);
  element.id = elementId;
  element.innerHTML = `<div class="card h-100">
  <img src="${media}" class="card-img-top ac-listing-img" alt="..." loading="lazy" />
  <div class="card-body d-flex flex-column gap-2">
  <h3 class="card-title">${title}</h3>
  <p class="card-text">${description}</p>
  <div class="d-flex flex-column gap-2">
  <span>Auction ends: </br>${endsAt}</span>
  <span>Tags: ${tags}</span>
  </div>
</div>
<div class="card-footer d-flex justify-content-center">
<a href="../../listings/listing-item/index.html?id=${id}" class="btn btn-outline-theme-blue">Read more</a>
</div>
</div>`;
  return element;
}
