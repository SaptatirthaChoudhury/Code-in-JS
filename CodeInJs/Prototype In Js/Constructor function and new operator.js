'use strict';

function Person(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}

Person.prototype.spaceWeb2 = function () {
    this.domain1 = "Web 2.0"
}

Person.prototype.spaceWeb3 = function () {
    this.domain2 = "Web 3.0"
}

Person.prototype.spaceAI = function () {
    this.domain3 = "Artificial Intelligence"
}

const web3Developer = {
    technology: "Blochchain",
    techStack: ["Solidity", "Rust", "Solana"],
    location: "India",
    product: "Dbank"
}

const developer = {
    domain: "Technology"
}
developer.__proto__ = web3Developer
Person.prototype = developer
//console.log(developer);

const saapto = new Person("Saapto", 1996)
console.log(Person.prototype);

console.log(saapto);

console.log(Person.prototype.isPrototypeOf(saapto));
console.log(saapto.hasOwnProperty('firstName'));





