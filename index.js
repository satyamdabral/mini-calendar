const today = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("date").innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
document.getElementById("day").innerHTML = weekDays[today.getDay()];
document.getElementById("month").innerHTML = allMonths[today.getMonth()];
document.getElementById("year").innerHTML = today.getFullYear();
