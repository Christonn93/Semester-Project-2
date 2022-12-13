// Borrowed code from this: https://github.com/Anclagen/Semester-Project-2/blob/main/src/js/tools/timeLeft.js
import { countdown } from './countDownCounter.js';

export const timeLeft = function (endsAt) {
  const totalSeconds = (new Date(endsAt) - new Date()) / 1000;
  const countdownTimer = document.querySelectorAll('[data-timeLeft]');

  if (totalSeconds < 0) {
    return '<i class="fa-solid fa-exclamation"></i> Listing has finished!';
  }

  // const secondsLeft = Math.floor(totalSeconds % 60);
  const minutesLeft = Math.floor((totalSeconds / 60) % 60);
  const hoursLeft = Math.floor((totalSeconds / 3600) % 24);
  const daysLeft = Math.floor((totalSeconds / 86400) % 30);
  const monthsLeft = Math.floor((totalSeconds / 2592000) % 12);

  const clock = `<i class="fa-regular fa-clock"></i>`;

  if (monthsLeft > 0) {
    countdownTimer.innerHTML = clock + `${monthsLeft} Months, ${daysLeft} Days`;
    return countdownTimer;
  }

  if (daysLeft > 0) {
    countdownTimer.innerHTML = clock + `${daysLeft} Days, ${hoursLeft} Hours`;
    return countdownTimer;
  }

  if (hoursLeft > 0) {
    countdownTimer.innerHTML = clock + `${hoursLeft} Hours, ${minutesLeft} Minutes`;
    return countdownTimer;
  }

  //countdown timer? need to build listing with document create element.
  return countdown(totalSeconds);
};
