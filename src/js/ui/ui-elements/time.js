import { changeTimeFormat } from '../../tools/time/changeTime.js';

export const itemTime = (time) => {
  // Setting time display
  let timeFormat = changeTimeFormat(time);
  const itemDate = new Date(timeFormat);
  const todayDate = new Date();

  const itemTime = document.getElementById('timeLeft');

  // Changing time display if listing have ended
  if (itemDate <= todayDate) {
    itemTime.innerHTML = `<p>Auction have ended..</p>`;
  } else {
    itemTime.innerHTML = `<p>Auction ends: ${timeFormat}</p>`;
  }
};
