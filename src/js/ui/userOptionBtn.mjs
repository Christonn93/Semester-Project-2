export function displayLoggedInButtons(){
  const userOptionBtn = document.querySelector('#userOptionBtn');
  const storageToken = localStorage.getItem('Token');
  
  if (storageToken) {
    userOptionBtn.innerHTML = `<div class="container d-flex justify-content-center gap-2">
    <a href="./pages/user/dashboard/index.html" class="btn btn-theme-beige">Dashboard</a>
    <button class="btn btn-theme-beige" id="signOutBtn" type="button" data-bs-toggle="modal" data-bs-target="#signOutModal">Sign out</button>
    </div>`;
  }
}


