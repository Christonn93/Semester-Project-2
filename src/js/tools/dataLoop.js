export const loopCardData = (data, num) => {
  for (let i = 0; i < data.length; i++) {
    if (num) {
      if (i === num) {
        break;
      }
    }
    // Do something with the data
  }
};
