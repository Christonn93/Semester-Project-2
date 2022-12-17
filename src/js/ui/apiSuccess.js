export const sendSuccess = async (message) => {
  const successContainer = document.getElementById('feedback-container');
  successContainer.innerHTML = `<p class="text-success">${message}</p>`;
  setTimeout(location.reload(), 5000);
};
