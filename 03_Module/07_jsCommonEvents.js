// 7.JS Common Events:
// Implement a webpage with the following functionality:
// a. When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.
document.addEventListener("click", function (event) {
  const x = event.pageX;
  const y = event.pageY;

  alert(`Clicked at coordinates: (${x}, ${y})`);
});
// b. When the user presses any key on the keyboard, display an alert with the key code of the pressed key.
document.addEventListener("keydown", function (event) {
  const keyCode = event.keyCode;

  alert("Pressed key code: " + keyCode);
});
// c. When the user moves the mouse over an image, change the image source to another image of your choice.

const image = document.getElementById("myImage");
image.addEventListener("mouseover", function () {
  image.src = "img/pic_bulbon.gif";
});

image.addEventListener("mouseout", function () {
  image.src = "img/pic_bulboff.gif";
});
