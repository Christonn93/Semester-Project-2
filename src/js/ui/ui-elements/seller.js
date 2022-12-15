export const itemSeller = (seller) => {
  // Selecting and adding content to seller information
  const sellerInfo = document.querySelector('#itemSeller');
  sellerInfo.innerHTML = `<img src="${seller.avatar}" class="seller-image-small" alt="...">
           <h6 class="">${seller.name}</h6>`;
};
