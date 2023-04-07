// - - - - - O P T I O N S - - - - - 

const ingredientsUrl = "https://brotherblazzard.github.io/canvas-content/fruit.json";

let localIngredientsData = "";

async function getIngredientsData() {
    const response = await fetch(ingredientsUrl);
    const data = await response.json();

    // Display Options
    displayOptions(data);
    localIngredientsData = data;
    //console.log(localIngredientsData);
}

const displayOptions = (ingredientsData) => {

    const ingredients = document.querySelector("div.ingredients");

    for (let i = 1; i < 4; i++) {

        // Create the selectors
        let select = document.createElement("select");
        select.name = `ingredient-${i}`;

        ingredientsData.forEach((ingredient) => {

            //console.log(ingredient.name);

            // Create the options
            let option = document.createElement("option");
            option.textContent = `${ingredient.name}`;
            option.value = `${ingredient.name}`;

            // Append
            select.appendChild(option);
            
        });

        ingredients.appendChild(select);
    }      
}

getIngredientsData();

// -  -  -  -  -  B U T T O N  -  -  -  -  -  -

const drinksButton = document.querySelector("#submit-btn");

drinksButton.addEventListener("click", displayOrder);

function displayOrder() {

    const summary = document.querySelector("div.summary");

    // Reset InnerHTML
    summary.innerHTML = "";

    const timestamp = new Date();

    // Create elements 
    let h3 = document.createElement("h3");
    let personalInfo = document.createElement("div");
    let ingredients = document.createElement("div");
    let instructions = document.createElement("p");
    let orderDate = document.createElement("p");
    let nutritionalData = document.createElement("div");

    // Heading
    h3.textContent = "Your Order";

    // Personal Info
    let name = document.createElement("p");
    let email = document.createElement("p");
    let phone = document.createElement("p");

    name.textContent =  `First Name: ${document.getElementsByName("fname")[0].value}`
    email.textContent = `Email: ${document.getElementsByName("email")[0].value}`
    phone.textContent = `Phone Number: ${document.getElementsByName("phone")[0].value}`

    personalInfo.appendChild(name);
    personalInfo.appendChild(email);
    personalInfo.appendChild(phone);

    // Div Ingredients
    let subtitle = document.createElement("p");
    let ingredientsList = document.createElement("ul");

    // - - - - - - - - - -
    let ingredient1 = document.getElementsByName("ingredient-1")[0]
    let ingredient2 = document.getElementsByName("ingredient-2")[0]
    let ingredient3 = document.getElementsByName("ingredient-3")[0]
    // - - - - - - - - - -

    let ing1 = document.createElement("li");
    let ing2 = document.createElement("li");
    let ing3 = document.createElement("li");

    subtitle.textContent = "Drink Ingredients: "
    ing1.textContent = ingredient1.value;
    ing2.textContent = ingredient2.value;
    ing3.textContent = ingredient3.value;

    ingredientsList.appendChild(ing1);
    ingredientsList.appendChild(ing2);
    ingredientsList.appendChild(ing3);

    ingredients.appendChild(subtitle);
    ingredients.appendChild(ingredientsList);

    // Special Instructions
    instructions.textContent =  `Special Instructions: ${document.getElementsByName("instructions")[0].value}`

    // Order Date
    orderDate.textContent = `Order Date: ${timestamp}`;
    
    // Nutritional Data

    let carbohydrates = document.createElement("p");
    let protein = document.createElement("p");
    let fat = document.createElement("p");
    let sugar = document.createElement("p");
    let calories = document.createElement("p");

    // Total Sum
    const arrayIngredients = [ingredient1.value, ingredient2.value, ingredient3.value];

    const carbSum = sumValues(arrayIngredients, "carbs");
    const protSum = sumValues(arrayIngredients, "protein");
    const fatSum = sumValues(arrayIngredients, "fat");
    const sugarSum = sumValues(arrayIngredients, "sugar");
    const calSum = sumValues(arrayIngredients, "calories");

    carbohydrates.textContent = `Carbohydrates: ${carbSum}`;
    protein.textContent = `Protein: ${protSum}`;
    fat.textContent = `Fat: ${fatSum}`;
    sugar.textContent = `Sugar: ${sugarSum}`;
    calories.textContent = `Calories: ${calSum}`;

    nutritionalData.appendChild(carbohydrates);
    nutritionalData.appendChild(protein);
    nutritionalData.appendChild(fat);
    nutritionalData.appendChild(sugar);
    nutritionalData.appendChild(calories);

    summary.appendChild(h3);
    summary.appendChild(personalInfo);
    summary.appendChild(ingredients);
    summary.appendChild(instructions);
    summary.appendChild(orderDate);
    summary.appendChild(nutritionalData);

}

function searchIngredient(ingredientsList, requiredIngredient, requiredInfo) {

    let info;

    ingredientsList.forEach((ingredient) => {

        if (ingredient.name == requiredIngredient){

            // Carbs
            if (requiredInfo == "carbs") {
                info = ingredient.nutritions.carbohydrates;
            }

            // Protein
            else if (requiredInfo == "protein") {
                info = ingredient.nutritions.protein;
            }

            // Fat
            else if (requiredInfo == "fat") {
                info = ingredient.nutritions.fat;
            }

            // Calories
            else if (requiredInfo == "calories") {
                info = ingredient.nutritions.calories;
            }

            // Sugar
            else if (requiredInfo == "sugar") {
                info = ingredient.nutritions.sugar;
            }
        }        
    });

    return info;

}

function sumValues(arrayIngredients, requiredInfo) {

    let sum = 0;

    // Search Values
    for (let i = 0; i < arrayIngredients.length ; i++) {

        value = searchIngredient(localIngredientsData, arrayIngredients[i], requiredInfo);
        //console.log(value);
        sum += value;
    } 

    return sum.toFixed(2);
}