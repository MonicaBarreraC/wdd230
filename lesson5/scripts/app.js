// Select Elements
const inp = document.querySelector("input");
const addBtn = document.querySelector("button");
const chapList = document.getElementById("list");

// Submit Button
addBtn.addEventListener("click", function(){

    if (inp.value != ""){
        
        // Create list and button elements
        const liElem = document.createElement("li");
        const delBtn = document.createElement("button");

        // Set content
        liElem.textContent = inp.value;
        delBtn.textContent = "❌";

        // Append elements to list (ul)
        chapList.appendChild(liElem);
        liElem.appendChild(delBtn);

        // Delete Button
        delBtn.addEventListener("click", function(){
            liElem.remove();
            document.getElementById("favchap").focus();
        });
    }

    // Clear and Focus Input
    inp.value = "";
    document.getElementById("favchap").focus();
    
});

// Focus Input
document.getElementById("favchap").focus();

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

// Get Year
const year = new Date().getFullYear();
document.querySelector("#copyright-year").textContent = `© ${year}`;

// Last Update
document.querySelector("#last-update").textContent = `Last Updated: ${document.lastModified}`