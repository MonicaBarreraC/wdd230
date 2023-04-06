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
