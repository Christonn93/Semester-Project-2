import { displayFactory, linkFactory, imageFactory } from '../../tools/functionFactory.js';
import { getProfileDetails } from '../../api/auth/profile-info.js';

/**
 * Displaying user profile information
 */
export async function displayProfileInformation() {
  await getProfileDetails();
  const storageToken = localStorage.getItem('Token');
  if (storageToken) {
    const profile = JSON.parse(localStorage.getItem('Profile'));
    const { Name: username, Avatar: imageUrl, Credits: credits, Email: email, Listings, Wins: wins } = profile;

    const user = document.querySelector('#profileContent');
    if (user) {
      document.getElementById('username').innerText = username;

      // Setting src for user avatar image
      const displayUserImage = imageFactory(['ag-profile-img', 'shadow', 'ag-relative', 'mx-auto', 'mb-3'], 'userImage', `${imageUrl}`, 'Profile image');

      // Displaying user name
      const displayUserName = displayFactory('h4', ['text-black', 'mb-3'], 'userName', username);

      // Display user email
      const displayUserEmail = displayFactory('span', ['text-black', 'mb-3'], 'userEmail', `<a href="mailto:${email}" target="_blank" class="link-success text-decoration-none"><i class="fa-solid fa-envelope"></i> Contact<a/>`);

      // Display user listings
      let displayUserListingAmount = displayFactory('span', ['text-black', 'mb-3'], '', `<i class="fa-solid fa-list"></i> ${Listings.length}`);

      // Display win and win amount
      let displayWinAmount = displayFactory('span', ['text-black', 'mb-3'], '', `<i class="fa-solid fa-handshake"></i> ${wins.length}`);

      // Displaying userCredits
      const displayUserCredits = displayFactory('span', ['userCredits', 'mb-3'], 'userCredits', `<i class="fa-solid fa-coins"></i> ${credits}`);

      // Displaying sidebar divider
      const sidebarDivider = displayFactory('hr', 'sidebar-divider', 'sidebar-divider', '');

      // displaying link for re routing to create new entry
      const linkUrl = '/pages/user/dashboard/new-listing/index.html';
      const displayLinkNewEntry = linkFactory(['nav-link', 'mb-3', 'text-center'], 'newEntryLink', linkUrl, `Create listing`);

      user.append(displayUserImage, displayUserName, displayUserEmail, displayUserCredits, displayWinAmount, displayUserListingAmount, sidebarDivider, displayLinkNewEntry);
    }
  }
}
