export function signOutBtn() {
  const signOutBtn = document.querySelector('#signOutBtn');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', () => {
      localStorage.clear('Token', 'Profile');
      window.location.reload();
    });
  }
}
