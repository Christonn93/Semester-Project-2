// Borrowed code from this: https://github.com/Anclagen/Semester-Project-2/blob/main/src/js/tools/countdown.js

export const countdown = function (totalSeconds) {
  const countdownTimer = document.querySelectorAll('[data-timeLeft]');

  const countdown = setInterval(() => {
    totalSeconds -= 1;

    const secondsLeft = ('0' + Math.floor(totalSeconds % 60)).slice(-2);
    const minutesLeft = ('0' + Math.floor((totalSeconds / 60) % 60)).slice(-2);

    countdownTimer.innerHTML = `<i class="fa-regular fa-clock"></i> ${minutesLeft}:${secondsLeft}`;

    if (totalSeconds <= 0) {
      countdownTimer.innerHTML = '<i class="fa-solid fa-exclamation"></i> Bidding Is Over';
      clearInterval(countdown);
    }
  }, 1000);

  return countdownTimer;
};
