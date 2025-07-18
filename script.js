function daysSince(dateString) {
  const start = new Date(dateString);
  const now = new Date();
  const diffTime = now - start;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function updateCounter() {
  const counter = document.getElementById("counter");
  const days = daysSince("2012-10-09");
  counter.innerText = `${days} Days Without Justice`;
}

updateCounter();


