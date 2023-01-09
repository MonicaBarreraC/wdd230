// Get Year
const year = new Date().getFullYear();
document.querySelector("#year").textContent = year;

// Last Update
document.querySelector("#last-update").textContent = `Last Updated: ${document.lastModified}`