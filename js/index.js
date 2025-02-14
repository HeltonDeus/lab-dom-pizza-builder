// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {1
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  
  // Iteration 1: set the visibility of `<section class="mushroom">`
  const mushrooms = document.querySelectorAll('.mushroom');

  mushrooms.forEach(function (oneMushroom) {
    oneMushroom.style.visibility = state.mushrooms ? 'visible' : 'hidden';
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  const greenPeppers = document.querySelectorAll('.green-pepper');

  greenPeppers.forEach(function (greenPeppers) {
    greenPeppers.style.visibility = state.greenPeppers ? 'visible' : 'hidden';
  });

}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const whiteSauceEl = document.querySelectorAll(
    '#pizza > section.crust.crust-gluten-free > section.sauce.sauce-white'
  );

  whiteSauceEl.forEach(function (whiteSauce){
    whiteSauceEl.style.visibility = state.whiteSauce ? 'visible' : 'hidden';
  });




  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  const crustEl = document.querySelector('#pizza > section.crust');

  crustEl.className = state.glutenFreeCrust ? 'crust crust-gluten-free' : 'crust';
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderPepperoni();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('body > div.panel.controls > ul > li:nth-child(2) > button')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderMushrooms();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderGreenPeppers();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
});
