const button = document.getElementById("highlightButton");
const paragraph = document.getElementById("myParagraph");

button.addEventListener("click", function () {
  paragraph.classList.add("highlight");
});
