const links = [
  {
    name: 'name',
    link: 'www.google.com',
  },
  {
    name: 'second name',
    link: 'www.finn.no',
  },
  {
    name: '',
    link: '',
  },
  {
    name: '',
    link: '',
  },
  {
    name: '',
    link: '',
  },
];

export function serviceProvider() {
  links.forEach((e) => {
    const unorderedListContainer = document.getElementById('otherAuctionHousesList');
    const listItems = document.createElement('li');
    listItems.innerHTML = `<a href="${e.link}" target="_blank" class="dropdown-item">${e.name}</a>`;
    unorderedListContainer.append(listItems);
  });
}
