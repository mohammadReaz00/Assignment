function changeTextColor() {
  const paragraphs = document.querySelectorAll(".paragraph-class");

  paragraphs.forEach((paragraph) => {
    paragraph.style.color = "red";
  });
}
