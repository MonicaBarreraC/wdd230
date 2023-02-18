// -  -  -  -  L O C A L   S T O R A G E  -  -  -  -

// Not needed actually because I can just create a new variable and don't grab info from the HTML file
let visitMessage = document.querySelector("#n-visits").textContent;
//console.log(visitMessage);

// Get number of visits from localStorage
let nVisits = Number(window.localStorage.getItem("visits-ls")); /* Number() prevents "Undefined" or something like that */
//console.log(nVisits);

// First visit message
if (nVisits == 0) {
    visitMessage = `Welcome, this is your first visit!`;
}
// Next visits message
else {
    visitMessage = `Number of visits: ${nVisits + 1}`;
}
// Update message in HTML file
document.querySelector("#n-visits").textContent = visitMessage;

// Add 1 every visit
nVisits ++;

// Save changes in localStorage
localStorage.setItem("visits-ls", nVisits);

// -  -  -  -  F E S T I V A L S  -  -  -  -

// Today
const today = new Date();
console.log("DAY: " + today.getDate()); /* getDate (1-31), getDay (0-6) */
console.log("MONTH: " + today.getMonth()); /* From 0 to 11 */
console.log("YEAR: " + today.getFullYear());

// May 5 -> Virgen de la concepción
const virgen = new Date(today.getFullYear(), 4, 5); /* Subtract 1 to the month (0-11) */

// Avoid negative numbers changing to next year if the date has passed
if (today.getMonth() == 4 && today.getDate() > 5) {
    virgen.setFullYear(virgen.getFullYear() + 1);
}
// Days Left to May 5
let daysLeftVirgen = (virgen.getTime() - Date.now()) / 84600000; /* 84600000 */
/// 0 Decimals
daysLeftVirgen = daysLeftVirgen.toFixed(0);

// Update HTML file
// 0 days to festival
if (daysLeftVirgen == 0) {
    document.querySelector("#virgen-festival").textContent = `today.`;
} else if (daysLeftVirgen == 1) {
    document.querySelector("#virgen-festival").textContent = `tomorrow.`;
} else {
    document.querySelector("#virgen-festival").textContent = `in ${daysLeftVirgen} days.`;
}


// October 1 -> St. Francisco de Asís
const francisco = new Date(today.getFullYear(), 9, 1);


