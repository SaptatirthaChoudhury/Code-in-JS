const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );

        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

//lufthansa.book(239, 'Jonas Schmedtmann');
//lufthansa.book(635, 'John Smith');
//console.log(lufthansa);

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
};

const indigo = {
    airline: "Indigo",
    iataCode: "IG",
    bookings: [],
};

const book = lufthansa.book;

// Doesn't work
//book(23, 'Sarah Conner');

book.call(eurowings, 23, "Sarah Conner");
book.call(eurowings, 33, "Mike Bend");
console.log(eurowings);

book.call(indigo, 28, "Saapto");
book.call(indigo, 23, "Mudra");
console.log(indigo);

function sum(a, b) {
    return a + b;
}

//Bind method

const bookEW = book.bind(eurowings);
const bookIG = book.bind(indigo);
bookEW(23, "Steven Williams");
bookIG(28, "Babai");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Martha Cooper");

// Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log("this :", this);

    this.planes++;
    console.log(this.planes);
};

//lufthansa.buyPlane();
document
    .querySelector(".buy")
    .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.2, 300));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(500));
console.log(addVAT(89));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};

const addVAT2 = addTaxRate(0.333);
console.log(addVAT2(100));
console.log(addVAT2(340));

// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things: 

  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
       What is your favourite programming language?
       0: JavaScript
       1: Python
       2: Rust
       3: C++
       
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouln't make sense, right?)
  
2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array' simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".

4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

  
HINT: Use many of the tools you learned about in this and the last section.

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what should the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]


*/

const poll = {
    question: "What is your favourite programming language ?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // Get answer
    answers: new Array(4).fill(0),
    registerNewArray() {
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join("\n")}\n(Write option number)`
            )
        );

        // Register answer
        typeof answer === "number" &&
            answer < this.answers.length &&
            this.answers[answer]++;

        this.displayResults();
        this.displayResults('string');
    },

    displayResults(type = "array") {
        if (type === "array") {
            console.log(this.answers);
        } else if (type === "string") {
            console.log(`Poll results are ${this.answers.join(",")}`);
        }
    },
};

document
    .querySelector(".poll")
    .addEventListener("click", poll.registerNewArray.bind(poll));

 

