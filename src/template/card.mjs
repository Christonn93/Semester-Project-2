export const htmlCards = (response) => {
  const {title, media, description, endsAt, tags, id} = response
  
  
  return `<div class="card h-100">
  <div class="card-img-top">
    <img src="${media}" alt="..." loading="lazy" />
  </div>
  <div class="card-body d-flex flex-column gap-2">
    <h3 class="card-title">${title}</h3>
    <p class="card-text">${description}</p>
    <div class="d-flex flex-column gap-2">
      <span>Auction ends:${endsAt}</span>
      <span>Tags: ${tags}</span>
    </div>
  </div>
  <div class="card-footer d-flex justify-content-center">
    <a href="../../listings/listing-item/index.html?id=${id}" class="btn btn-outline-theme-blue">Read more</a>
  </div>
</div>`
}
