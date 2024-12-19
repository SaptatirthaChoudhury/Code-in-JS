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
};

/**
 *  Array destructuring
 */

const [first, second, third] = restaurent.categories;

console.log(first, second, third);

const [f, , , s] = restaurent.categories;
console.log(f, s);

let [primary, secondary] = restaurent.categories;
console.log(primary, secondary);

[primary, secondary] = [secondary, primary];
console.log(primary, secondary);

console.log(restaurent.order(2, 1));

const [starter, main] = restaurent.order(2, 0);
console.log(starter, main);

/**
 * Destructuring on nested array
 */

const nested = [2, 4, [5, 6, [7, 8, 9]]];
const [i, , [j, , [k, , m]]] = nested;
console.log(i, j, k, m);

const ratings = [
  ["rating", 4.19, ["rating", 5.0]],
  ["ratingsCount", 144584],
];
const [[, rating1, [, rating2]], [, ratingsCount]] = ratings;
console.log(rating1, rating2);

const ratingStars = [63405, 1808];
const [fiveStarRatings, , threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, threeStarRatings);
