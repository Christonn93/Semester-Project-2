export const htmlCards = (title, media, endsAt, tags, id) => {
  let imageElement = `<img class="image" src="${media}" loading="lazy" alt="Image-${id} have no alt text due to difficulties adding this from the api when its not option to add this" />`;
  let headerElement = `<h2 class="card-title ms-3">${title}</h2>`;
  let timeElement = `<span class="ag-time shadow d-inline-flex justify-content-center align-items-center gap-2" data-timeLeft">${endsAt}</span>`;
  let tagElement = '';
  let linkElement = `<a href="/pages/listings/listing-item/index.html?id=${id}&title=${title}" class="btn btn-theme-blue text-center shadow">Read more</a>`;


  if(tags.length >= 1){
    const tag = tags.join(', ')
    tagElement = `<span>Tags: ${tag}</span>`;
  }

  return `<div class="col entry-items" id="listingId=${id}">
  <div class="card mb-2 mx-2 h-100 w-85 shadow bg-theme-beige">
  <a href="/pages/listings/listing-item/index.html?id=${id}&title=${title}" class="ag-card-link text-theme-blue">
  <div class="row g-0">
    <div class="col d-flex flex-fill flex-column mb-2">
      <div class="image-ratio">
       ${imageElement}
        </div>
      </div>
    </div>
    <div class="col d-flex flex-column">
    ${headerElement}
      <div class="card-body ag-relative">
		  ${tagElement}
     </div>
     <div class="d-flex flex-column gap-1 mx-2 justify-content-center mb-0 mt-auto p-2">
      ${timeElement}
     <div class="d-flex gap-2 justify-content-end">
       ${linkElement}
     </div>
     </div>
    </div>
  </div>
  </a>
</div>
</div>`;
};
