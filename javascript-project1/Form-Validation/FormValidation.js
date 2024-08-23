document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear any existing error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (error) {
      error.style.display = "none";
    });

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();

    let isValid = true;

    // Name validation
    if (name === "") {
      showError("name", "Name is required");
      isValid = false;
    }

    // Email validation
    if (email === "") {
      showError("email", "Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      showError("email", "Email is not valid");
      isValid = false;
    }

    // Password validation
    if (password === "") {
      showError("password", "Password is required");
      isValid = false;
    } else if (password.length < 6) {
      showError("password", "Password must be at least 6 characters");
      isValid = false;
    }

    // Confirm password validation
    if (confirmPassword === "") {
      showError("confirmPassword", "Please confirm your password");
      isValid = false;
    } else if (password !== confirmPassword) {
      showError("confirmPassword", "Passwords do not match");
      isValid = false;
    }

    // If the form is valid, you can proceed with form submission (e.g., send data to a server)
    if (isValid) {
      alert("Form submitted successfully!");
      // You can reset the form here if needed
      // document.getElementById('registrationForm').reset();
    }
  });

function showError(fieldId, message) {
  const inputField = document.getElementById(fieldId);
  const errorMessage = inputField.nextElementSibling;
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
