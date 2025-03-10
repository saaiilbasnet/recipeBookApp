const API_KEY = "05e5c69f819c421aa6b705c705afe89a";
const recpListEl = document.getElementById("recipe-list")

function displayRecipes(recipes){
    recpListEl.innerHTML = "";

    recipes.forEach((r) => {
        const recpItemEl = document.createElement("li");
        recpItemEl.classList.add("recipe-item");

        const recpImageEl = document.createElement("img");
        recpImageEl.src = r.image;
        recpImageEl.alt = `Image of ${r.title}`;

       const recpTitleEl = document.createElement("h2");
        recpTitleEl.innerText =  r.title;

        const recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML = `
            <strong>Ingredients:</strong> ${r.extendedIngredients
              .map((ingredient) => ingredient.original)
              .join(", ")}
        `;

       const recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = r.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";
        recipeLinkEl.target = "_blank";
    
      recpItemEl.appendChild(recpImageEl);
      recpItemEl.appendChild(recpTitleEl);
      recpItemEl.appendChild(recipeIngredientsEl);
      recpItemEl.appendChild(recipeLinkEl);
      recpListEl.appendChild(recpItemEl);

    });
}

async function getRecipe() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    
    const data = await response.json();
    return data.recipes;
    console.log(data);
    
}

async function init(){

    const recipes = await getRecipe();
    displayRecipes(recipes);

}

init();
