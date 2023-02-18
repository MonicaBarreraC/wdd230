// -  -  -  -  L O C A L   S T O R A G E  -  -  -  -

// Not needed actually because I can just create a new variable and don't grab info from the HTML file
let visitMessage = document.querySelector("#n-visits").textContent;
console.log(visitMessage);

// Get number of visits from localStorage
let nVisits = Number(window.localStorage.getItem("visits-ls")); /* Number() prevents "Undefined" or something like that */
console.log(nVisits);

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

// -  -  -  -  

// Today
const today = new Date();
console.log(today);

// 5 mayo

// 1 octubre


