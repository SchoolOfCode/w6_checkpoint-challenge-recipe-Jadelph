let foodToSearch = null;

function handleRecipeClick() {
    fetchRecipe(foodToSearch);
}

function handleFoodChange() {
    foodToSearch = document.querySelector("#food-input").value;
}


const aTag = document.getElementById("recipe-label");

async function fetchRecipe(food) {
    const requestUrl = await fetch(`https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
    const dataResponse = await requestUrl.json();
    console.log(dataResponse);
    const dataResult = dataResponse.hits[0]


};

const YOUR_APP_ID = "81aff1ee"
const YOUR_APP_KEY = "d92c008e55cda9f4f056523dc8dbd57a"