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
console.log("The square root of the sum is " + sumOfSquareRoot);
