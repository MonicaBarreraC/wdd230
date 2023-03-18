// Current Date
document.querySelector("#current-date").textContent = `${new Date().toLocaleDateString('en-uk', {dateStyle: "full"})}`;

// Get Day
const day = new Date().getDay();
/// Mondays and Tuesdays
if (day == 1 || day == 2){
    document.querySelector("#banner-news").removeAttribute("class");
}
/// Rest of the days
else {
    document.querySelector("#banner-news").setAttribute("class", "hidden");
}

// Get Year
const year = new Date().getFullYear();
document.querySelector("#copyright-year").textContent = `© ${year}`;

// Last Update
document.querySelector("#last-update").textContent = `Last Updated: ${document.lastModified}`;

// -  -  -  -  -  -  M E N U -  -  -  -  -  - 

// Hamburger Menu
const mainNav = document.querySelector("nav");
const hamButton = document.querySelector("#menu");

/* OLD Version
//  Toggle Part
hamButton.addEventListener("click", () => {mainNav.classList.toggle("responsive")}, false);
*/

hamButton.addEventListener("click", function(){
    // Change ≡ <-> ×
    if (hamButton.textContent == "≡"){
        hamButton.textContent = "×";
        mainNav.removeAttribute("class");
    }
    else {
        hamButton.textContent = "≡";
        mainNav.setAttribute("class", "hidden-nav");
    }
});