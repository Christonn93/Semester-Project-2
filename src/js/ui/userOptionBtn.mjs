const userOptionBtn = document.querySelector('#userOptionBtn');
const storageToken = localStorage.getItem('Token');

if (storageToken) {
  userOptionBtn.innerHTML = `<button class="btn btn-theme-beige" id="signOutBtn" type="submit">Sign out</button>`;
}


