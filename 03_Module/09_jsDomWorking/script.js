// Get the form element
var form = document.getElementById("myForm");

// Get the error elements
var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");
var confirmPasswordError = document.getElementById("confirmPasswordError");

// Define the regular expressions for validation
var nameRegex = /^[A-Za-z]+$/;
var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

// Define the error messages for validation
var nameErrorMessage = "Name cannot be empty and should contain only letters.";
var emailErrorMessage = "Email should be a valid email address.";
var passwordErrorMessage =
  "Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.";
var confirmPasswordErrorMessage = "Confirm Password should match the Password field.";

// Define a function to validate a field
function validateField(field, regex, errorElement, errorMessage) {
  // Get the field value
  var value = field.value;
  // Check if the value matches the regex
  if (regex.test(value)) {
    // If yes, clear the error message
    errorElement.textContent = "";
    return true;
  } else {
    // If no, display the error message
    errorElement.textContent = errorMessage;
    return false;
  }
}

// Define a function to validate the confirm password field
function validateConfirmPassword() {
  // Get the password and confirm password values
  var passwordValue = document.getElementById("password").value;
  var confirmPasswordValue = document.getElementById("confirmPassword").value;
  // Check if they match
  if (passwordValue === confirmPasswordValue) {
    // If yes, clear the error message
    confirmPasswordError.textContent = "";
    return true;
  } else {
    // If no, display the error message
    confirmPasswordError.textContent = confirmPasswordErrorMessage;
    return false;
  }
}

// Add an event listener for form submission
form.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Validate all the fields
  var nameValid = validateField(document.getElementById("name"), nameRegex, nameError, nameErrorMessage);
  var emailValid = validateField(document.getElementById("email"), emailRegex, emailError, emailErrorMessage);
  var passwordValid = validateField(
    document.getElementById("password"),
    passwordRegex,
    passwordError,
    passwordErrorMessage
  );
  var confirmPasswordValid = validateConfirmPassword();
  // Check if all the fields are valid
  if (nameValid && emailValid && passwordValid && confirmPasswordValid) {
    // If yes, submit the form data
    alert("Form submitted successfully!");
    form.reset();
  }
});
