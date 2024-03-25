/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName= 'Fiifi Cudjoe Debrah';
let currentYear = '2024';
let profilePicture = 'images/profile-image.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt',`Profile image of ${fullName}`);

/* Step 5 - Array */
const favourateFoods = ['Fufu', 'Jollof', 'Tuo Zaafi', 'Banku', 'Khebab'];
foodElement.innerHTML = favourateFoods;
const anotherFavourateFood = 'Konkonte';
favourateFoods.push(anotherFavourateFood);
foodElement.innerHTML += `<br>${favourateFoods}`;
favourateFoods.shift();
foodElement.innerHTML += `<br>${favourateFoods}`;
favourateFoods.pop();
foodElement.innerHTML += `<br>${favourateFoods}`;

