// -  -  -  -  -  B U T T O N  -  -  -  -  -  -

const degreesButton = document.querySelector("#degree-button");

degreesButton.addEventListener("click", function(){
    // Change C <-> F
    if ( degreesButton.textContent == "°C"){
        degreesButton.textContent = "°F";
        // Change Degrees Displayed
        // Change Wind Speed Displayed
    }
    else {
        degreesButton.textContent = "°C";
        // Change Degrees Displayed
        // Change Wind Speed Displayed
    }
});

// -  -  -  -  C H A N G E  U N I T S  -  -  -  -  -

// Formula: (0°C * 9/5) + 32 = 32°F
function celsiusToF(temperature) {
    temperature = (temperature * 9/5) + 32;
    return temperature;
}

// Formula: (32°F − 32) × 5/9 = 0°C
function fahrenheitToC(temperature) {
    temperature = (temperature - 32) * 5/9;
    return temperature;
}


// -  -  -  -  W I N D  C H I L L   -  -  -  -  -

// Get values
let t = document.querySelector("#weather-temp").textContent;
let s = document.querySelector("#wind-speed").textContent;
let f = document.querySelector("#wind-chill").textContent;;
let degrees = document.querySelector("#degrees").textContent;
let speedUnits = document.querySelector("#speed-units").textContent;

// Convert °C to °F
if (degrees == "C") {

    t = celsiusToF(t);
    degrees = "F";

}

// Convert km/h to mph
// Formula: Divide speed by 1.609344
if (speedUnits == "km/h") {

    s = s / 1.609344;
    speedUnits = "mph";

}

// Wind Chill Calculation

// Check if they meet spacifiaction limits
// <=50°F and >3.0mph
if (t <= 50 && s > 3.0){
    f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
    f = Math.round(f * 10)/10;
}

// Not Applicable
else {
    f = "N/A";
}

// Set Values
document.querySelector("#wind-chill").textContent = f;

// Change to °F and mph -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/*// Note: Uncomment this and add a button later to change C -> F and reverse
t = Math.round(t);
document.querySelector("#weather-temp").textContent = t;
s = Math.round(s * 10)/10;
document.querySelector("#wind-speed").textContent = s;
document.querySelector("#degrees").textContent = degrees;
document.querySelector("#speed-units").textContent = speedUnits;
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - */


