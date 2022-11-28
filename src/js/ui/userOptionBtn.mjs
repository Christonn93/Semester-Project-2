export function displayLoggedInButtons(){
  const userOptionBtn = document.querySelector('#userOptionBtn');
  const userOptionModalContainer = document.querySelector("#userOptionModalContainer");
  const storageToken = localStorage.getItem('Token');
  
  if (storageToken) {
    userOptionBtn.innerHTML = `<div class="container d-flex justify-content-center gap-2">
    <a href="./pages/user/dashboard/index.html" class="btn btn-theme-beige">Dashboard</a>
    <button class="btn btn-theme-beige" id="signOutBtn" type="button" data-bs-toggle="modal" data-bs-target="#signOutModal">Sign out</button>
    </div>`;
  
    const signOutModal = document.createElement("div");
    signOutModal.innerHTML = `<!-- Modal sign out -->
    <div class="modal fade" id="signOutModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="signInModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content bg-theme-blue">
          <div class="modal-header">
            <h5 class="modal-title text-theme-beige" id="signOutModalLabel">Sign in</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="d-flex flex-column gap-2 p-2 bg-theme-blue" id="signInForm">
              <p><strong>NB!</strong> Your are about to sign out. Are you sure?</p>
              <button type="submit" id="signInBtn" class="btn btn-outline-danger">Sign out</button>
            </form>
          </div>
        </div>
      </div>
    </div>`
    userOptionModalContainer.append(signOutModal)
    userOptionBtn.append(userOptionModalContainer)
  }
}


