// Set url 
const directoryUrl = "https://monicabarrerac.github.io/wdd230/chamber/json/data.json";
let premiumB = [];

// Function to fetch data using async/await
async function getBusinessData() {
    const response = await fetch(directoryUrl);
    const data = await response.json();

    // Check if Membership -> Silver or Gold
    premiumB = membershipCheck(data.companies);

    // Display Spotlights
    displaySpotlights(premiumB);
}

const membershipCheck = (companies) => {
    let list = [];
    companies.forEach((company) => {
        if(company.membership == "Silver" || company.membership == "Gold"){
            list.push(company);
        }
    });

    return list;
}

const displaySpotlights = (business) => {
    const spotlights = document.querySelector("section.spotlights"); 
    let originalList = business;
    let selected = [];

    for (let i = 0; i < 3; i++ ){

        // Select random business
        let random = Math.floor(Math.random() * originalList.length);
        selected.push(originalList[random]);
        originalList.splice(random, 1);

    }
  
    selected.forEach((company) => {
        // Create elements to add to the section.spotlights element
        let spotlight = document.createElement('div');
        let h3 = document.createElement('h3');
        let logo = document.createElement('img');
        let div = document.createElement("div");
    
        // Build the h3 content out to show the company name 
        h3.textContent = `${company.name}`;

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
        div.setAttribute("class","details");
    
        // Setting image attributes
        logo.setAttribute('src', company.imageurl);
        logo.setAttribute('alt', `Logo of ${company.name}`);
        logo.setAttribute('title', `${company.name} Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '150');
    
        // Append the created elements
        spotlight.appendChild(h3);
        spotlight.appendChild(logo);
        spotlight.appendChild(div);
        spotlight.setAttribute("class", "spotlight");
    
        spotlights.appendChild(spotlight);
    }); 
}
  
getBusinessData();