export function signOutBtn() {
  const signOutBtn = document.querySelector('#signOutBtn');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', () => {
      localStorage.clear('Token', 'Profile');
      const token = localStorage.getItem('Token');
      if (!token) {
        window.location.replace('./');
      }
    });
  }
}
