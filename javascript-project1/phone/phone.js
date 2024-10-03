function pressKey(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function callNumber() {
  const number = document.getElementById("display").value;
  if (number) {
    alert(`Calling ${number}...`);
  } else {
    alert("Please enter a number to call.");
  }
}
