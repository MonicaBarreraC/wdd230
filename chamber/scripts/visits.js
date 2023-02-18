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

// May 5 -> Virgen de la concepción
const virgen = daysToFestival(5, 5, "#virgen-festival");

// October 1 -> St. Francisco de Asís
const francisco = daysToFestival(10, 1, "#st-francisco-festival");

//const test = daysToFestival(2, 17, "#st-francisco-festival");
