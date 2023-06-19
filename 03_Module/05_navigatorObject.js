//5.Navigator Object:
//a. Write a JavaScript function that detects the user's browser name and version using the navigator object.
function browserNameVersion() {
  let browserName = navigator.userAgent;
  let browserVersion = navigator.appVersion;
  document.write(browserName + "<br>");
  document.write(browserVersion);
}

//b. Implement the function to display the user's browser name and version.
browserNameVersion();
