// Get Year
const year = new Date().getFullYear();
document.querySelector("#copyright-year").textContent = `© ${year}`;

// Last Update
document.querySelector("#last-update").textContent = `Last Updated: ${document.lastModified}`

// -  -  -  -  W E A T H E R   -  -  -  -  -

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'http://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=4c0f9bbc39fef5d82166c66bab59f1ed';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        // displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}

//https://api.openweathermap.org/data/2.5/weather?q=Conkal&appid=4c0f9bbc39fef5d82166c66bab59f1ed`;