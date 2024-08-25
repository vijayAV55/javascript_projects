const toggleButton = document.getElementById("mode-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Toggle Light Mode";
  } else {
    toggleButton.textContent = "Toggle Dark Mode";
  }
});
