// class declaration
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

// const saapto = new Person("Sappto", 1996);
// console.log(saapto);
// saapto.calcAge();
// console.log(saapto.age);

// console.log(saapto.__proto__ == Person.prototype);

// const account = {
//   owner: "Jonas",
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-2).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// //console.log(account.latest);

// account.latest = 30;
//console.log(account.movements);

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return this.password.toUpperCase();
  }

  set password(value) {
    this.password = value;
  }
}

const saapto = new User("saptatirtha@protonmail.com", "neon213");

console.log(saapto.password);
