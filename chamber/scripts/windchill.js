// -  -  -  -  C H A N G E  U N I T S  -  -  -  -  -

// Formula: (0°C * 9/5) + 32 = 32°F
function celsiusToF(temperature) {
    temperature = (temperature * 9 / 5) + 32;
    return temperature;
}

// Formula: (32°F − 32) × 5/9 = 0°C
function fahrenheitToC(temperature) {
    temperature = (temperature - 32) * 5 / 9;
    return temperature;
}

// Formula: Divide speed by 1.609344
function kmToMph(speed) {
    speed = speed / 1.609344;
    return speed;
}

// Formula: Divide speed by 1.609344
function mphToKmh(speed) {
    speed = speed * 1.609344;
    return speed;
}

// -  -  -  -  W I N D  C H I L L   -  -  -  -  -

function calcWindChill(temperature, windSpeed) {
    let windChill;
    // Temperature in Fahrenheit
    // Check if they meet specifiaction limits (<=50°F and >3.0mph)
    if (temperature <= 50 && windSpeed > 3.0){
        windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        windChill = Math.round(f * 10)/10;
    }

    // Not Applicable
    else {
        windChill = "N/A";
    }

    // Return Wind Chill
    return windChill;
}

// Get values
let t = document.querySelector("#weather-temp").textContent;
let s = document.querySelector("#wind-speed").textContent;
let f = document.querySelector("#wind-chill").textContent;
let degrees = document.querySelector("#degrees").textContent;
let speedUnits = document.querySelector("#speed-units").textContent;

// Units Check
// Convert °C to °F
if (degrees == "C") {
    t = celsiusToF(t);
    degrees = "F";
}

// Convert km/h to mph
// Formula: Divide speed by 1.609344
if (speedUnits == "km/h") {
    s = kmToMph(s);
    speedUnits = "mph";
}

// Wind Chill Calculation
f = calcWindChill(t, s);

// Set wind chill value
document.querySelector("#wind-chill").textContent = f;

// -  -  -  -  -  B U T T O N  -  -  -  -  -  -

const degreesButton = document.querySelector("#degree-button");

degreesButton.addEventListener("click", function(){

    let temp = document.querySelector("#weather-temp");
    let wSpeed = document.querySelector("#wind-speed");
    let degreesU = document.querySelector("#degrees");
    let speedU = document.querySelector("#speed-units");

    // Change C <-> F
    if ( degreesButton.textContent == "°C"){
        degreesButton.textContent = "°F";

        // Change Degrees Displayed
        t = fahrenheitToC(temp.textContent).toFixed(0);
        degrees = "C";

        // Change Wind Speed Displayed
        s = mphToKmh(wSpeed.textContent).toFixed(1);
        speedUnits = "kmh";

        //console.log(`Fahrenheit to C\n${temp.textContent}${degreesU.textContent} -> ${t}${degrees}`);
    }
    else {
        degreesButton.textContent = "°C";

        // Change Degrees Displayed
        t = celsiusToF(t).toFixed(0);
        degrees = "F";

        // Change Wind Speed Displayed
        s = kmToMph(s).toFixed(1);
        speedUnits = "mph";

        //console.log(`Celsius to F\n${temp.textContent}${degreesU.textContent} -> ${t}${degrees}`);
    }

    temp.textContent = t;
    degreesU.textContent = degrees;
    wSpeed.textContent = s;
    speedU.textContent = speedUnits;

});