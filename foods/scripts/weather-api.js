// -  -  -  -  W E A T H E R  -  -  -  -  -

// select HTML elements in the document
let currentTemp = document.querySelector("#weather-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-desc");
let degreesUnits = document.querySelector("#degrees");
let humidPercent = document.querySelector("#humidity");

let forecastList = [];
const currentDay = new Date().getDay();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const url = "http://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=4c0f9bbc39fef5d82166c66bab59f1ed&units=imperial";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
        
        setForecast(data);
        displayForecast(forecastList);

      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

function displayResults(weatherData) {

  currentTemp.innerHTML = `${weatherData.list[0].main.temp.toFixed(0)}`;

  const iconSrc = `images/weather/${weatherData.list[0].weather[0].icon}.png`;
  const desc = weatherData.list[0].weather[0].description;
  const humidity = weatherData.list[0].main.humidity;

  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
  humidPercent.textContent = humidity;

}
function setForecast(weatherList) {

  const n = 8;

  forecastList.push(weatherList.list[n], weatherList.list[2*n], weatherList.list[3*n]);
  //console.log(forecastList);

}
const displayForecast = (days) => {

  const forecastDays = document.querySelector("div.forecast");
  let n = 1;

  days.forEach((day) => {

    // Create elements to add to the div.forecasts element
    let forecast = document.createElement('section');
    forecast.setAttribute("class", "forecast-day");
    let h3 = document.createElement('h3');
    let icon = document.createElement('img');
    let temperature = document.createElement("p");
    let description = document.createElement("p");

    // Build the h3 content
    h3.textContent = `${weekday[currentDay + n]}`;
    n++;

    // Setting image attributes
    icon.setAttribute('src', `images/weather/${day.weather[0].icon}.png`);
    icon.setAttribute('alt', `${day.description}`);
    icon.setAttribute('loading', 'lazy');
    icon.setAttribute('width', '60');
    icon.setAttribute('height', '60');

    // Set content
    temperature.textContent = `${day.main.temp.toFixed(0)} °F`
    description.textContent = `${day.weather[0].description}`

    // Append the forecast(day) with the created elements
    forecast.appendChild(h3);
    forecast.appendChild(icon);
    forecast.appendChild(temperature);
    forecast.appendChild(description);

    forecastDays.appendChild(forecast);
    
  });
    
}  