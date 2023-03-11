// -  -  -  -  W E A T H E R  -  -  -  -  -

// select HTML elements in the document
const currentTemp = document.querySelector("#weather-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-desc");
const degreesUnits = document.querySelector("#degrees");
const windSpeed = document.querySelector("#wind-speed");
const windsSpeedUnits = document.querySelector("#speed-units");


const url = "http://api.openweathermap.org/data/2.5/weather?q=Conkal&appid=4c0f9bbc39fef5d82166c66bab59f1ed&units=imperial";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
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

    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
    degreesUnits.textContent = "F";
    windSpeed.textContent = weatherData.wind.speed.toFixed(1);
    windsSpeedUnits.textContent = "mph";
}