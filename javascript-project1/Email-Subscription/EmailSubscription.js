function subscribe() {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");

  if (validateEmail(email)) {
    message.textContent = "Thank you for subscribing!";
    message.style.color = "green";
    document.getElementById("email").value = ""; // Clear the input field
  } else {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
