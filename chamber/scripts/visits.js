// -  -  -  -  L O C A L   S T O R A G E  -  -  -  -

// Declare visitMessage
let visitMessage = "";

// Get last time visit
let lastVisit = Number(window.localStorage.getItem("last-visit"));
console.log(lastVisit);

// Set current visit
const thisVisit = Date.now();
console.log(thisVisit);

// Calculate days
let daysAgo = (thisVisit - lastVisit) / 84600000;
console.log(daysAgo);

// Set messages
if (thisVisit - lastVisit == thisVisit){ // First time here -> 0
    visitMessage = `Welcome, this is your first time here!`;
}
else if (daysAgo < 1) { // Less than a day
    visitMessage = `You've been here recently.`;
}
else {
    // Round number
    daysAgo = Math.floor(daysAgo);
    if (daysAgo == 1){ // 1 day ago
        visitMessage = `Your last visit was yesterday.`;
    }
    else { // Days ago
        visitMessage = `Your last visit was ${daysAgo} days ago.`;
    }
}

// Update message in HTML file
document.querySelector("#n-visits").textContent = visitMessage;

// Update last visit in localStorage
window.localStorage.setItem("last-visit", thisVisit);


// -  -  -  -  F E S T I V A L S  -  -  -  -

// Days to Festival Function
// month: (1-12), date: (1-31), selector: (i.e. = "#somehting", ".thing")
function daysToFestival(month, date, selector){

    const today = new Date();
    const festival = new Date(today.getFullYear(), month - 1, date); // Subtract 1 because months are from 0 to 11

    // Change to next year if the date has passed
    if (today.getMonth() == (month - 1)  && today.getDate() > date) {
        festival.setFullYear(festival.getFullYear() + 1);
    }

    // Days Left to Festival
    let daysLeftFestival = (festival.getTime() - Date.now()) / 84600000; // 84600000 is the 
    //daysLeftFestival = daysLeftFestival.toFixed(0); // Fix to 0 decimals
    daysLeftFestival = Math.ceil(daysLeftFestival);

    // Output
    if (daysLeftFestival == 0) { 
        document.querySelector(selector).textContent = `today.`;
    } else if (daysLeftFestival == 1) { 
        document.querySelector(selector).textContent = `tomorrow.`;
    } else {
        document.querySelector(selector).textContent = `in ${daysLeftFestival} days.`;
    }
}

// May 8 -> Virgen de la concepción
const virgen = daysToFestival(5, 8, "#virgen-festival");

// October 4 -> St. Francisco de Asís
const francisco = daysToFestival(10, 4, "#st-francisco-festival");