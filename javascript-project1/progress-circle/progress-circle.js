document
  .getElementById("progress-input")
  .addEventListener("input", function () {
    const progress = this.value;
    const progressCircle = document.getElementById("progress-circle");
    const progressText = document.getElementById("progress-text");

    progressText.textContent = `${progress}%`;

    progressCircle.style.background = `conic-gradient(
        #4caf50 ${progress * 3.6}deg,
        #e0e0e0 ${progress * 3.6}deg
    )`;
  });
