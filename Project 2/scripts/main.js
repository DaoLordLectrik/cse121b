const apiKey = '821046535cc54d619ec32c6e2eb238bd';

document.getElementById('searchBtn').addEventListener('click', searchRecipes);

async function searchRecipes() {
  const ingredients = document.getElementById('ingredientsInput').value;
  const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      displayRecipes(data);
    } else {
      displayError(data.message);
    }
  } catch (error) {
    displayError('Failed to fetch recipe data. Please try again.');
  }
}

function displayRecipes(recipes) {
  const recipeResultsDiv = document.getElementById('recipeResults');
  recipeResultsDiv.innerHTML = '';

  recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    recipeCard.innerHTML = `
      <h2>${recipe.title}</h2>
      <img src="${recipe.image}" alt="${recipe.title}">
    `;
    recipeResultsDiv.appendChild(recipeCard);
  });
}

function displayError(message) {
  document.getElementById('errorMessage').textContent = message;
  document.getElementById('recipeResults').innerHTML = '';
}
