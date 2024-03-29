// Get Year
const year = new Date().getFullYear();
document.querySelector("#copyright-year").textContent = `© ${year}`;

// Last Update
document.querySelector("#last-update").textContent = `Last Updated: ${document.lastModified}`

// -  -  -  -  P R O P H E T S  -  -  -  -  -

// Set url 
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
let listP = "";

// Function to fetch data using async/await
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    //
    listP = data.prophets; 
    //console.log(listP);
    //

    // Display Prophets
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
        let number = "";
        let deathAge = "";
    
        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        // Build div with description
        let birth = document.createElement("p");
        let birthPlace = document.createElement("p");
        let children = document.createElement("p");
        let pYears = document.createElement("p");
        let death = document.createElement("p");
        let age = document.createElement("p");

        // Set description content
        birth.textContent = `Birth: ${prophet.birthdate}`
        birthPlace.textContent = `Place: ${prophet.birthplace}`
        children.textContent = `Children: ${prophet.numofchildren}`
        pYears.textContent = `Prophet Years: ${prophet.length}`
        death.textContent = `Death: ${prophet.death}`

        /// Calculate Prophet Age
        let birthDate = new Date (prophet.birthdate);
        birthDate = birthDate.getTime();
        let deathDate = "";

        if (prophet.death == null) {
            // Today
            deathDate = Date.now();
        }
        else {
            // Use Death Date from API
            deathDate = new Date (prophet.death);
            deathDate = deathDate.getTime();
        }
        
        // Subtract deathdate - birthdate
        deathAge = (deathDate - birthDate) / 31556926000;
        deathAge = Math.floor(deathAge);

        age.textContent = `Age: ${deathAge}`

        // Append the paragraphs to div
        div.appendChild(birth);
        div.appendChild(birthPlace);
        div.appendChild(children);
        div.appendChild(pYears);
        div.appendChild(death);
        div.appendChild(age);

        // President Number Setup
        if (prophet.order == 1) {
            number = "st";
        }
        else if (prophet.order == 2) {
            number = "nd";
        }
        else if (prophet.order == 3) {
            number = "rd";
        }
        else {
            number = "th";
        }
    
        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${number} Latter-day President`);
        portrait.setAttribute('title', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${number} Latter-day President`);
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

// B U T T O N S
const allProphets = document.querySelector("#all");
const years10 = document.querySelector("#ten-years");

// All Prophets
allProphets.addEventListener("click", function(){
    years10.removeAttribute("class");
    allProphets.setAttribute("class","active");

    // Clear HTML
    const node = document.querySelector(".cards");
    node.innerHTML = "";
    
    //Display Filter List
    displayProphets(listP);
});

// 10+ Years of Service
years10.addEventListener("click", function(){
    allProphets.removeAttribute("class");
    years10.setAttribute("class","active");

    let filterList = [];

    // Filter 10+ Years
    listP.forEach((prophet) => {
        if (prophet.length >= 10){
            filterList.push(prophet);
        }
    });
    // Clear HTML
    const node = document.querySelector(".cards");
    node.innerHTML = "";
    
    //Display Filter List
    displayProphets(filterList);
});

/** Atempt to convert in funtion ...
const buttons = [allProphets, years10];

// Add "active" class to clicked button and display list
function filterBtn(btnName, list) {

    // Add class "active" to clicked button only
    buttons.forEach(btn => {
        btn.removeAttribute("class");
    });
    btnName.setAttribute("class","active");

    // Clear HTML
    const node = document.querySelector(".cards");
    node.innerHTML = "";

    //Display List of Prophets
    displayProphets(list);
}

function prophetService (minYears){
    let filterList = [];

    // Filter Years
    listP.forEach((prophet) => {
        if (prophet.length >= minYears){
            filterList.push(prophet);
        }
    });

    return filterList;
}

// All Prophets
allProphets.addEventListener("click", filterBtn(allProphets, listP));
*/