const storageToken = localStorage.getItem('Token');

if (storageToken) {
  const profile = JSON.parse(localStorage.getItem('Profile'));
  const { Name: username, Avatar: imageUrl, Credits: credits } = profile;

  const user = document.querySelector('#profileContent');
  if (user) {
    user.innerHTML = `<div class="card p-2">
    <div id="userImage">
    <img src="${imageUrl}" class="ac-profile-img shadow" /></div>
    <div class="card-body">
      <ul class="list-group d-flex flex-column gap-2">
        <li class="list-item" id="userName"><p>${username}</p></li>
        <li class="list-item" id="userCredits"><p><i class="fa-solid fa-coins"></i>  ${credits}</p></li>
        <li class="list-item"><hr class="sidebar-divider" /></li>
        <li class="list-item"><a href="./new-listing/index.html" class="nav-link">Create listing</a></li>
      </ul>
    </div>
    </div>`;
  }
}
