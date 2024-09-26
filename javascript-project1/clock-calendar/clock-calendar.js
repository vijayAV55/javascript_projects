function updateClock() {
  const now = new Date();
  const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
  const timeString = now.toLocaleTimeString([], options);

  document.getElementById("clock").innerText = timeString;
}

function updateCalendar() {
  const now = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateString = now.toLocaleDateString([], options);

  document.getElementById("calendar").innerText = dateString;
}

function updateTimeAndDate() {
  updateClock();
  updateCalendar();
}

updateTimeAndDate();

setInterval(updateTimeAndDate, 1000);
