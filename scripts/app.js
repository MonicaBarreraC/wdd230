// Get Year
const year = new Date().getFullYear();
document.querySelector("#year").textContent = year;

// Last Update
let lastUpdate = document.lastModified;
document.querySelector("#last-update").textContent = `Last Updated: ${lastUpdate}`