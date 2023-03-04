// Set url 
const url = "https://monicabarrerac.github.io/wdd230/chamber/json/data.json";
let directory = "";

// Function to fetch data using async/await
async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();

    directory = data.companies; 
    //console.table(data.companies);

    // Display Directory
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    const cards = document.querySelector("div.cards"); 
  
    companies.forEach((company) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        card.setAttribute("class", "dir-sect");
        let h2 = document.createElement('h2');
        let div = document.createElement("div");
        let logo = document.createElement('img');
    
        // Build the h2 content out to show the company name 
        h2.textContent = `${company.name}`;

        // Build div with description
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        website.setAttribute("href", company.src);

        // Set description content
        address.textContent = `${company.address}`
        phone.textContent = `${company.phone}`
        website.textContent = `${company.website}`

        // Append the paragraphs to div
        div.appendChild(address);
        div.appendChild(phone);
        div.appendChild(website);
    
        // Setting image attributes
        logo.setAttribute('src', company.imageurl);
        logo.setAttribute('alt', `Logo of ${company.name}`);
        logo.setAttribute('title', `Logo of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '150');
    
        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(h2);
        card.appendChild(div);
        
    
        cards.appendChild(card);
    }); 
}
  
getBusinessData();

/*
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
*/