/**
 *
 * @param {*} type
 */
export function uiMessage(type, message) {
  // Selecting html
  const main = document.querySelector('main');
  const errorContainer = document.createElement('div');

  // Setting the innerHTML of the message
  // Switch to define what feedback should be given
  switch (type) {
    case 'error':
      errorContainer.classList.add('feedback-container', 'error');
      errorContainer.innerHTML = message;
      break;

    case 'success':
      errorContainer.classList.add('feedback-container', 'success');
      errorContainer.innerHTML = message;
      break;

    case 'alert':
      errorContainer.classList.add('feedback-container', 'alert');
      errorContainer.innerHTML = message;
      break;

    case 'warning':
      errorContainer.classList.add('feedback-container', 'warning');
      errorContainer.innerHTML = message;
      break;

    case 'invalid':
      errorContainer.classList.add('feedback-container', 'alert');
      errorContainer.innerHTML = message;
      break;

    case 'confirm':
      errorContainer.classList.add('feedback-container', 'confirm-action');
      break;
  }
  main.append(errorContainer);
}
