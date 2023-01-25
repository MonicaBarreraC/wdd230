// Current Date
//document.querySelector("#current-date").textContent = `${new Date().toLocaleDateString('en-uk', {weekday: "long"})}`;
document.querySelector("#current-date").textContent = `${new Date().toLocaleDateString('en-uk', {dateStyle: "full"})}`;

// Get Year
const year = new Date().getFullYear();
document.querySelector("#copyright-year").textContent = `© ${year}`;

// Last Update
document.querySelector("#last-update").textContent = `Last Updated: ${document.lastModified}`