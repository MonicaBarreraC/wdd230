// Get values
/*let t = document.querySelector("#weather-temp").textContent;
let s = document.querySelector("#wind-speed").textContent;*/
let t = 10;
let s = 5;
let f = 0;
let degrees = document.querySelector("#degrees").textContent;
let speedUnits = document.querySelector("#speed-units").textContent;

console.log("t = " + t);
console.log("s = " + s);
console.log("°" + degrees);
console.log("Units: " + speedUnits);
console.log("");

// Convert °C to °F
// Formula: (0°C * 9/5) + 32 = 32°F
if (degrees == "C") {

    t = (t * 9/5) + 32;
    degrees = "F";

}

// Convert km/h to mph
// Formula: Divide speed by 1.609344
if (speedUnits == "km/h") {

    s = s / 1.609344;
    speedUnits = "mph";

}

console.log("t = " + t);
console.log("s = " + s);
console.log("°" + degrees);
console.log("Units: " + speedUnits);
console.log("");

// Check if they meet spacifiaction limits
// <=50°F and >3.0mph
if (t <= 50 && s > 3.0){
    console.log("Meet Requirements");
    f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
}

// Not Applicable
else {
    console.log("Not Applicable");
    f = "N/A";
}

console.log(f);
console.log(Math.round(f * 10)/10);