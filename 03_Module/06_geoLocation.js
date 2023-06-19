//6.Geolocation:
//a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API.
navigator.geolocation.getCurrentPosition(function (position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  document.write("latitude: " + latitude + "<br>");
  document.write("longtitude: " + longitude);
});
