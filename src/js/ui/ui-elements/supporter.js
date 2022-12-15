const links = [
  {
    name: 'Auctioneer™',
    link: 'https://auctioneer-sp2.netlify.app/',
  },
  {
    name: 'Find.no',
    link: 'https://auction-chasju.netlify.app/',
  },
  {
    name: 'Forgotten Treasures',
    link: 'https://anclagen.github.io/Semester-Project-2/index.html',
  },
  {
    name: 'Biddable',
    link: 'https://fluffy-shortbread-738c45.netlify.app/index.html',
  },
];

export const serviceProvider = () => {
  links.forEach((e) => {
    const unorderedListContainer = document.getElementById('otherAuctionHousesList');
    const listItems = document.createElement('li');
    listItems.innerHTML = `<a href="${e.link}" target="_blank" class="dropdown-item">${e.name}</a>`;
    unorderedListContainer.append(listItems);
  });
};
