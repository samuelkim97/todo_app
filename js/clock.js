const clockHourMin = document.getElementById("clock");
const clockSecond = document.getElementById("seconds");

function handleClockHourMin() {
  const hours = String(new Date().getHours()).padStart(2, "0");
  const minutes = String(new Date().getMinutes()).padStart(2, "0");

  clockHourMin.innerText = `${hours}:${minutes}`;
}

function handleClockSec() {
  const seconds = String(new Date().getSeconds()).padStart(2, "0");

  clockSecond.innerText = `:${seconds}`;
}

handleClockHourMin();
handleClockSec();
setInterval(handleClockHourMin, 1000);
setInterval(handleClockSec, 1000);
