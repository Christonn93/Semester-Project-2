// This code i got from
// https://stackoverflow.com/questions/5210376/how-to-get-first-and-last-day-of-the-current-week-in-javascript

const curr = new Date(); // get current date
const first = curr.getDate(); // First day is the day of the month
const last = first - curr.getDay() - 30; // getting last 30 days because that's the average length of a month throughout the year

// Convert to ISO strings since the API requires that
const firstDay = new Date(curr.setDate(first)).toISOString();
const lastDay = new Date(curr.setDate(last)).toUTCString();

console.log(firstDay);
console.log(lastDay);
