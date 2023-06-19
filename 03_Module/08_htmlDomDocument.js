// 8.HTML DOM Document:
// a. Create a webpage with a button and a paragraph element.
// b. Implement a JavaScript function that changes the text content of the paragraph element to "Button Clicked!" when the button is clicked.

const message = document.getElementById("message");
const button = document.getElementById("Button");

button.addEventListener("click", function () {
  message.textContent = "Button Clicked";
});
