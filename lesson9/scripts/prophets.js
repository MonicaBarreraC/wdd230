// Get Year
const year = new Date().getFullYear();
document.querySelector("#copyright-year").textContent = `© ${year}`;

// Last Update
document.querySelector("#last-update").textContent = `Last Updated: ${document.lastModified}`

// -  -  -  -  P R O P H E T S  -  -  -  -  -

// Set url 
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Function to fetch data using async/await
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); 
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let div = document.createElement("div");
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;

      // Build div with description
      let birth = document.createElement("p");
      let birthPlace = document.createElement("p");

      // Set description content
      birth.textContent = `Birth: ${prophet.birthdate}`
      birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`

      // Append the paragraphs to div
      div.appendChild(birth);
      div.appendChild(birthPlace);
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(div);
      card.appendChild(portrait);
      
  
      cards.appendChild(card);
    }); // end of forEach loop
} // end of function expression
  
getProphetData();