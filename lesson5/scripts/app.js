//
const inp = document.querySelector("input");
const addBtn = document.querySelector("button");
const chapList = document.getElementById("list");

addBtn.addEventListener("click", function(){

    if (inp.value != ""){

        //alert("Hi!");
        //console.log(inp.value);
        
        const liElem = document.createElement("li");
        const delBtn = document.createElement("button");

        liElem.textContent = inp.value;
        delBtn.textContent = "❌";

        chapList.appendChild(liElem);
        liElem.appendChild(delBtn);

        delBtn.addEventListener("click", function(){
            liElem.remove();
            document.getElementById("favchap").focus();
        });
    }

    inp.value = "";
    document.getElementById("favchap").focus();
    
});

document.getElementById("favchap").focus();