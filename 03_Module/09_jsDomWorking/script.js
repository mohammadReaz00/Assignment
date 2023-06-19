const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Reset error messages
  clearErrors();

  // Validate form fields
  let isValid = true;

  if (!isValidName(nameInput.value)) {
    showErrorMessage(nameInput, "Name should not be empty and should contain only letters.");
    isValid = false;
  }

  if (!isValidEmail(emailInput.value)) {
    showErrorMessage(emailInput, "Email should be a valid email address.");
    isValid = false;
  }

  if (!isValidPassword(passwordInput.value)) {
    showErrorMessage(
      passwordInput,
      "Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit."
    );
    isValid = false;
  }

  if (!isValidConfirmPassword(confirmPasswordInput.value, passwordInput.value)) {
    showErrorMessage(confirmPasswordInput, "Confirm Password should match the Password field.");
    isValid = false;
  }

  if (isValid) {
    // Form is valid, do something (e.g., submit the form)
    alert("Form submitted successfully!");
    form.reset(); // Reset the form
  }
});

function isValidName(name) {
  return /^[A-Za-z]+$/.test(name);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
  // Minimum length of 8 characters and contains at least one uppercase letter, one lowercase letter, and one digit
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
}

function isValidConfirmPassword(confirmPassword, password) {
  return confirmPassword === password;
}

function showErrorMessage(inputElement, message) {
  const errorElement = document.getElementById(inputElement.id + "Error");
  errorElement.textContent = message;
}

function clearErrors() {
  const errorElements = document.getElementsByClassName("error");
  for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = "";
  }
}
