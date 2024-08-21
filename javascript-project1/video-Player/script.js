const videoPlayer = document.getElementById("videoPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const volumeSlider = document.getElementById("volumeSlider");

playPauseBtn.addEventListener("click", () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playPauseBtn.textContent = "Pause";
  } else {
    videoPlayer.pause();
    playPauseBtn.textContent = "Play";
  }
});

volumeSlider.addEventListener("input", (e) => {
  videoPlayer.volume = e.target.value;
});
