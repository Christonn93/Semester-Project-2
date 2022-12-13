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
export function displayListingFactory(elementName = '', className = [], elementId = '', media, title, tags, endsAt, id) {
  const element = document.createElement(elementName);
  element.classList.add(...className);
  element.id = elementId;
  element.innerHTML = `<div class="card mb-2 mx-2 h-100 w-85 shadow bg-theme-beige">
  <a href="/pages/listings/listing-item/index.html?id=${id}" class="ag-card-link text-theme-blue">
  <div class="row g-0">
    <div class="col d-flex flex-fill flex-column mb-2">
      <div class="image-ratio">
        <img class="image" src="${media}" loading="lazy" alt="Image-${id} have no alt text due to difficulties adding this from the api when its not option to add this" />
        </div>
      </div>
    </div>
    <div class="col d-flex flex-column">
    <h2 class="card-title ms-3">${title}</h2>
      <div class="card-body ag-relative">
		  <span>Tags: ${tags}</span>
     </div>
     <div class="d-flex flex-column gap-1 mx-2 justify-content-center mb-0 mt-auto p-2">
     <span class="ag-time shadow d-inline-flex justify-content-center align-items-center gap-2" data-timeLeft">${endsAt}</span>
     <div class="d-flex gap-2 justify-content-end">
     <a href="/pages/listings/listing-item/index.html?id=${id}" class="btn btn-theme-blue text-center shadow">Read more</a>
     </div>
     </div>
    </div>
  </div>
  </a>
</div>`;
  return element;
}
