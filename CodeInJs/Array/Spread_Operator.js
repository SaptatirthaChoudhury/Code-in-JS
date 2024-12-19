"use strict";

const restaurent = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];

console.log(newArr);
const newMenu = [...restaurent.mainMenu, "Gnocci"];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurent.mainMenu];
console.log(mainMenuCopy);

//Join 2 array
const menu = [...restaurent.starterMenu, ...restaurent.mainMenu];
console.log("Join array : ", menu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = "Jonas";
const letters = [...str, "", "s"];
console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurent.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurent.orderPasta(...ingredients);

//Objects

const newRestaurent = {
  foundedIn: 1998,
  ...restaurent,
  founder: "Guiseppe",
};
console.log(newRestaurent);

const restaurentCopy = { ...restaurent };
restaurentCopy.name = "Ristorante Roma";
console.log(restaurentCopy);
console.log(restaurent.name);
