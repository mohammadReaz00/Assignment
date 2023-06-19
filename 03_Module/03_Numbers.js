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
