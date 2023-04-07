// -  -  -  -  -  -  M E N U -  -  -  -  -  - 

// Hamburger Menu
const mainNav = document.querySelector("nav");
const hamButton = document.querySelector("#menu");

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

// -  -  -  -  -  -  F O O T E R  -  -  -  -  - 

// Get Year
const year = new Date().getFullYear();
document.querySelector("#copyright-year").textContent = `© ${year}`;

// Last Update
document.querySelector("#last-update").textContent = `Last Updated: ${document.lastModified}`;

// -  -  -  -  -  -  D R I N K S -  -  -  -  -  - 

//document.querySelector("#special-drinks").textContent = "0";

if (document.querySelector("#special-drinks") != null){
    document.querySelector("#special-drinks").textContent =  window.localStorage.getItem("current-drinks");
}