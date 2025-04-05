const diff = new Date() - new Date("2025-3-18");
const days = Math.ceil(diff / (1000 * 60 * 60 * 24)) - 1;
document.getElementById('daysCounter').innerHTML = days + " días "