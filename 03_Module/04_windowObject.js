//4.Window Object:
//a. Create a function that opens a new window with a specified URL and dimensions (width and height).
function openNewWindow(url, width, height) {
  window.open(url, "_blank", `width=${width},height=${height}`);
}

//b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.
openNewWindow("https://www.example.com", 800, 600);
