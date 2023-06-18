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
// console.log("The Day of the date is " + dayOfTheDate);

// 2.Math Object:
// a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.
function getSquareRootOfSum(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum = sum + number * number;
  }
  return Math.sqrt(sum);
}
// b. Implement the function to display the square root of the sum of squares for an array of numbers.
let sumOfSquareRoot = getSquareRootOfSum([3, 4]);
// console.log("The square root of the sum is " + sumOfSquareRoot);

// 3.Numbers:
// a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.
function checkIsPrime(input) {
  if (Number.isInteger(input) && input > 0) {
    for (let i = 2; i <= Math.sqrt(input); i++) {
      if (input % i === 0) {
        return false;
      }
    }
    return true;
  } else {
    return "Please provide a positive integer as input.";
  }
}
// b. Implement the function to check if a given positive integer is a prime number.
let primeOrNot = checkIsPrime(0);
// console.log(primeOrNot);

//4.Window Object:
//a. Create a function that opens a new window with a specified URL and dimensions (width and height).

//b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.
