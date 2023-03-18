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

// -  -  -  -  W E A T H E R  -  -  -  -  -

// select HTML elements in the document
let currentTemp = document.querySelector("#weather-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-desc");
let degreesUnits = document.querySelector("#degrees");
let windSpeed = document.querySelector("#wind-speed");
let windSpeedUnits = document.querySelector("#speed-units");
let windChillTemp = document.querySelector("#wind-chill");
let windChillUnits = document.querySelector("#wind-chill-units");

const url = "http://api.openweathermap.org/data/2.5/weather?q=Conkal&appid=4c0f9bbc39fef5d82166c66bab59f1ed&units=imperial";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
        displayWindChill();
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

function displayResults(weatherData) {

    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;

    const iconSrc = `images/weather/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    weatherIcon.setAttribute("title", desc);
    captionDesc.textContent = desc;
    degreesUnits.textContent = "F";
    windSpeed.textContent = weatherData.wind.speed.toFixed(1);
    windSpeedUnits.textContent = "mph";
}

// -  -  -  -  W I N D  C H I L L   -  -  -  -  -

function calcWindChill(temperature, windSpeed) {
  // Receive Temperature in Fahrenheit and Wind Speed in mph

  let windChill;

  // Check if they meet specifiaction limits (<=50°F and >3.0mph)
  if (temperature <= 50 && windSpeed > 3.0){
      windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
      windChill = Math.round(windChill * 10)/10;
  }

  // Not Applicable
  else {
      windChill = "N/A";
      document.querySelector("#wind-chill-units").setAttribute("class","hidden");
  }

  // Return Wind Chill
  return windChill;
}

function displayWindChill() {

  // Get values
  let t = currentTemp.textContent;
  let s = windSpeed.textContent;

  // Wind Chill Calculation
  windChillTemp.textContent = calcWindChill(t, s);

}

// -  -  -  -  -  B U T T O N  -  -  -  -  -  -

const degreesButton = document.querySelector("#degree-button");

degreesButton.addEventListener("click", function(){

  // Change C <-> F
  if ( degreesButton.textContent == "°C"){
    degreesButton.textContent = "°F";

    // Change Degrees Displayed
    t = fahrenheitToC(currentTemp.textContent).toFixed(0);
    degrees = "C";

    // Change Wind Speed Displayed
    s = mphToKmh(windSpeed.textContent).toFixed(1);
    speedUnits = "kmh";

    // Change Wind Chill Degrees
    if (windChillTemp.textContent != "N/A"){
      windChillTemp.textContent = fahrenheitToC(windChillTemp.textContent).toFixed(0);
      windChillUnits.textContent = "°C";
    }
  }
  else {
    degreesButton.textContent = "°C";

    // Change Degrees Displayed
    t = celsiusToF(t).toFixed(0);
    degrees = "F";

    // Change Wind Speed Displayed
    s = kmToMph(s).toFixed(1);
    speedUnits = "mph";

    // Change Wind Chill Degrees
    if (windChillTemp.textContent != "N/A"){
      windChillTemp.textContent = celsiusToF(windChillTemp.textContent).toFixed(0);
      windChillUnits.textContent = "°F";
    }

  }

  currentTemp.textContent = t;
  degreesUnits.textContent = degrees;
  windSpeed.textContent = s;
  windSpeedUnits.textContent = speedUnits;

});