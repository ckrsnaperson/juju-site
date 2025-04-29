function updateTimer() {
  const launchDate = new Date("2018-11-13T21:34:35");
  const now = new Date();

  let years = now.getFullYear() - launchDate.getFullYear();
  let months = now.getMonth() - launchDate.getMonth();
  let days = now.getDate() - launchDate.getDate();
  let hours = now.getHours() - launchDate.getHours();
  let minutes = now.getMinutes() - launchDate.getMinutes();
  let seconds = now.getSeconds() - launchDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  document.getElementById("timer").textContent =
    `${years} years, ${months} months, ${days} days, ` +
    `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

setInterval(updateTimer, 1000);
updateTimer();
