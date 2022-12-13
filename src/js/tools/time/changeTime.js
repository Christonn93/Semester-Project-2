/**
 *
 * This function will change the time stamp output from a API and turn it into the way you want it to be displayed.
 *
 * @param {*} date
 * @returns Returns the time format you set inside the function
 */
export function changeTimeFormat(date) {
  const apiDate = new Date(date);
  let hours = apiDate.getHours();
  let minutes = apiDate.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return apiDate.getMonth() + 1 + '/' + apiDate.getDate() + '/' + apiDate.getFullYear() + '  ' + strTime;
}
