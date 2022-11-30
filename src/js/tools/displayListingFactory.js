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
  element.innerHTML = `<div class="card mb-1 h-100 shadow bg-theme-beige">
  <div class="row g-0">
    <div class="col-md-4 d-flex justify-content-center">
      <img src="${media}" class="img-fluid h-85" alt="..." loading="lazy">
    </div>
    <div class="col-md-8 d-flex flex-column">
    <div class="card-body">
    <h3 class="card-title">${title}</h3>
    </div>
      <div class="card-body ag-relative">
      <div>${description}</div>
		  <span>Tags: ${tags}</span>
     </div>
     <div class="d-flex flex-column gap-1 mx-2 justify-content-center">
     <span class="ag-time shadow d-inline-flex justify-content-center align-items-center gap-2"><i class="fa-solid fa-clock"></i> ${endsAt}</span>
     <div class="d-flex gap-2 justify-content-end">
     <a href="../../listings/listing-item/index.html?id=${id}" class="btn btn-outline-theme-blue text-center">Read more</a>
     </div>
     </div>
    </div>
  </div>
</div>`;
  return element;
}
