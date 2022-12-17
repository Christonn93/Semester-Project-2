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

      // Displaying button & modal for avatar changes

      let content = `<!-- Button trigger modal -->
        <button type="button" class="btn ag-absolute avatar-gear" data-bs-toggle="modal" data-bs-target="#avatarUpdateModal" >
        <a data-bs-toggle="tooltip" title="Update user avatar" data-bs-custom-class="custom-tooltip">
        <i class="fa-solid fa-user-gear text-theme-blue"></i>
        </a>
       </button>
       
       <!-- Modal -->
       <div class="modal fade" id="avatarUpdateModal" tabindex="-1" aria-labelledby="avatarUpdateModalLabel" aria-hidden="true">
         <div class="modal-dialog ">
           <div class="modal-content bg-theme-blue">
             <div class="modal-header">
               <h1 class="modal-title fs-5 text-theme-beige" id="avatarUpdateModalLabel">Update user avatar</h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div class="modal-body">
               <form class="d-flex flex-column gap-2 p-2 needs-validation" id="userAvatarUpdate">
               <div class="form-group was-validated">
               <label class="form-label text-theme-beige" for="userAvatarInput">Avatar* </label>
               <input class="form-control" type="url" name="userAvatarInput" placeholder="https://www.example.com/imageUrl.jpg" required/>
               <div class="invalid-feedback">Please enter your URL</div>
             </div>
                 <div class="form-group">
                 <button class="btn btn-outline-theme-beige" id="submitUserAvatar">Submit form</button>
                 </div>
               </form>
             </div>
           </div>
         </div>
       </div>
      <!-- Modal end -->
      `;
      const displayModalButton = displayFactory('div', ['container'], 'updateUserAvatar', content);

      // Displaying sidebar divider
      const sidebarDivider = displayFactory('hr', 'sidebar-divider', 'sidebar-divider', '');

      // displaying link for re routing to create new entry
      const linkUrl = '/pages/user/dashboard/new-listing/index.html';
      const displayLinkNewEntry = linkFactory(['nav-link', 'mb-3', 'text-center'], 'newEntryLink', linkUrl, `Create listing`);

      user.append(displayUserImage, displayUserName, displayUserEmail, displayUserCredits, displayWinAmount, displayUserListingAmount, displayModalButton, sidebarDivider, displayLinkNewEntry);
    }
  }
}
