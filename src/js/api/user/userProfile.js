export class UserProfile {
  constructor(name, avatar, credits, email) {
    this.Name = name;
    this.Avatar = avatar;
    this.Credits = credits;
    this.Email = email;
  }

  createUserContent() {}
}

const profile = JSON.parse(localStorage.getItem('Profile'));
const { Name: username, Avatar: imageUrl, Credits: credits } = profile;

const user = document.querySelector('#profileContent');
user.innerHTML = `<div class="card p-2">
<div id="userImage">
<img src="${imageUrl}" class="ac-profile-img shadow" /></div>
<div class="card-body">
  <ul class="list-group d-flex flex-column gap-2">
    <li class="list-item" id="userName"><p>${username}</p></li>
    <li class="list-item" id="userCredits"><p><i class="fa-solid fa-coins"></i>  ${credits}</p></li>
    <li class="list-item"><hr class="sidebar-divider" /></li>
  </ul>
</div>
</div>`;
