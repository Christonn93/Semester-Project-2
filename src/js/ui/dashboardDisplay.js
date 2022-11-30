export function displayProfileInformation() {
  const storageToken = localStorage.getItem('Token');

  if (storageToken) {
    const profile = JSON.parse(localStorage.getItem('Profile'));
    const { Name: username, Avatar: imageUrl, Credits: credits } = profile;

    const user = document.querySelector('#profileContent');
    if (user) {
      // Setting src for user avatar image
      const userAvatar = document.getElementById('userAvatar');
      if (userAvatar) {
        const createImageElement = document.createElement('img');
        createImageElement.src = imageUrl;
        createImageElement.classList.add('shadow');
        createImageElement.classList.add('ag-relative');
        userAvatar.append(createImageElement);
      } else {
        console.log('Error!!!');
      }

      // Displaying user name
      const displayUserName = document.getElementById('userName');
      if (displayUserName) {
        displayUserName.innerText = username;
      } else {
        console.log('Error!!!');
      }

      // Displaying userCredits
      const userCredits = document.getElementById('userCredits');
      if (userCredits) {
        userCredits.innerHTML = `<p><i class="fa-solid fa-coins"></i> ${credits}</p>`;
      } else {
        console.log('Error!!!');
      }
    }
  }
}
