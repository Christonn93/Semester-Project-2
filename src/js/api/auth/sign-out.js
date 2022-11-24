export function signOutBtn() {
  const signOutBtn = document.querySelector('#signOutBtn');
  signOutBtn.addEventListener('click', () => {
    localStorage.clear('Token', 'Profile');
  });
}
