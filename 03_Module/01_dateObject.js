// 1.Date Object:
// a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.
function getDayOfDate(dateString) {
  let date = new Date(dateString);
  let dateIndex = date.getDay();
  let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekdays[dateIndex];
}
// b. Implement the function to display the day of the week for the current date.
let dayOfTheDate = getDayOfDate("2023-06-18");
console.log("The Day of the date is " + dayOfTheDate);
