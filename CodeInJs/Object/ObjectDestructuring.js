"use strict";

const restaurent = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const { name, openingHours, categories, location } = restaurent;
console.log(name, openingHours, categories, location);

const {
  name: restaurentName,
  openingHours: hours,
  categories: tags,
} = restaurent;

console.log(restaurentName, hours, tags);

// Mutating variables

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurent;
console.log(starters);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);
