const obj = []

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(obj));

const money = 0;
if (money) {
    console.log(`Don't spend it all`);
} else {
    console.log(`You should get a job`);
}

let height
if (height) {
    console.log(`Height has been defined`);
} else {
    console.log(`Height has not been defined`);
}