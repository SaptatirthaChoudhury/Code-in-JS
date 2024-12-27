"use strict";

// Use ANY data type, return ANY data type,
// short-circuiting

// OR(||) operator

console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(0 || "Jonas");
console.log(null || "Jonas");
console.log(undefined || "Jonas");
console.log(NaN || "Jonas");
console.log(false || "Jans");
console.log(null || undefined);
console.log(undefined || null);

console.log(null || NaN);
console.log(0 || null);
console.log(`last 1 ${false || undefined}`);
console.log(`last 2 ${false || null || NaN || 0 || "" || undefined}`);
console.log(`last 3 ${false || null || NaN || 0 || "haha"}`);

// AND(&&) operator

console.log(7 && "Jonas");
console.log("Hello" && 23 && null && "jonas");

const restaurent = {
    orderPizza(name) {
        console.log(`${name} Pizza ordered!`);
    }
};

if (restaurent.orderPizza) {
    restaurent.orderPizza('mushrooms');
}

restaurent.orderPizza && restaurent.orderPizza('spinach')
