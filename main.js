let foodToSearch = null;

function handleRecipeClick() {
    fetchRecipe(foodToSearch);
};

function handleFoodChange() {
    foodToSearch = document.querySelector("#food-input").value;

};
const aTag = document.getElementById("recipe-label");
async function fetchRecipe(food) {
    const requestUrl = await fetch(`https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
    const dataResponse = await requestUrl.json();
    console.log(dataResponse);
    const dataResult = dataResponse.hits[0].recipe;
    console.log(dataResult)
    return dataResult;
};
const YOUR_APP_ID = "81aff1ee"
const YOUR_APP_KEY = "d92c008e55cda9f4f056523dc8dbd57a"

async function displayRecipe() {
    foodToSearch = document.querySelector("#food-input").value;
    let recipeObject = await fetchRecipe(foodToSearch);
    let {

        //to add more of the object names for full display
        // style more css
        // create a for loop to go through the array so the recipe is different each time.
        label,
        cuisineType,
        dishType,
        healthLabels,
        dietLabels,
        mealType,
        image,
        url,
        ingredientLines,
        ingredients,
    } = recipeObject;

    let imageEl = document.querySelector(".food-image")
    imageEl.src = image;
    let labelEl = document.querySelector(".label");
    labelEl.innerHTML = label;
    console.log(labelEl)
    let cuisineTypeEl = document.querySelector(".cuisine-type");
    cuisineTypeEl.innerHTML = cuisineType;
    let dishTypeEl = document.querySelector(".dish-type");
    dishTypeEl.innerHTML = dishType;
    let healthLabelsEl = document.querySelector(".health-labels");
    healthLabelsEl.innerHTML = healthLabels;
    let dietLabelsEl = document.querySelector(".diet-labels");
    dietLabelsEl.innerHTML = dietLabels;
    let mealTypeEl = document.querySelector(".meal-type");
    mealTypeEl.innerHTML = mealType;
    let urlEl = document.querySelector(".link-to-recipe");
    urlEl.innerHTML = url;
    let ingredientLinesEl = document.querySelector(".ingredient-lines");
    ingredientLinesEl.innerHTML = ingredientLines;

}
let button = document.querySelector("button");
button.addEventListener("click", displayRecipe);