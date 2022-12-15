export const itemImages = (images) => {
  // Selecting and adding content to image
  const imageCarousel = document.querySelector('#imageCarousel');
  let imageArray = images;
  const imageObject = {};

  imageArray.forEach((elem, i) => {
    imageObject[`url-${i}`] = elem;

    // console.log(imageObject);
    const carouselDiv = document.createElement('div');
    carouselDiv.classList.add('carousel-item', 'ag-carousel', 'image-ratio-2');

    const imageEl = document.createElement('img');
    imageEl.classList.add('image-2');
    if (imageArray.length == 0) {
      imageEl.src = 'https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png';
    } else {
      imageEl.src = `${elem}`;
    }

    carouselDiv.append(imageEl);
    const parent = document.querySelector('#imageCarousel');

    if (imageArray.length == 1) {
      carouselDiv.classList.add('carousel-item', 'ag-carousel', 'active');
      const imageNavBtn1 = document.querySelector('.carousel-control-next');
      const imageNavBtn2 = document.querySelector('.carousel-control-prev');
      imageNavBtn1.classList.add('d-none');
      imageNavBtn2.classList.add('d-none');
    } else {
      for (let i = 0; i < parent.children.length; i++) {
        const child = parent.children[0];
        child.classList.add('active');
      }
      carouselDiv.classList.add('carousel-item', 'ag-carousel');
    }

    imageCarousel.append(carouselDiv);
    return;
  });
};
