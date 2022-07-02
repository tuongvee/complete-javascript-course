'use strict';

// Constructor Functions and the new Operator
const PersonCF = function (firstName, birthYear) {
  // Instacne properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2022 - this.birthYear);
  // };
};

const vee = new PersonCF('Vee', 2000);
console.log(vee);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new PersonCF('Matilda', 1998);
const john = new PersonCF('John', 1990);
console.log(matilda, john);

console.log(vee instanceof PersonCF);

PersonCF.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
PersonCF.hey();

// Prototypes
console.log(PersonCF.prototype);

PersonCF.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

vee.calcAge();
matilda.calcAge();

console.log(vee.__proto__);
console.log(vee.__proto__ === PersonCF.prototype);

console.log(PersonCF.prototype.isPrototypeOf(vee));
console.log(PersonCF.prototype.isPrototypeOf(matilda));
console.log(PersonCF.prototype.isPrototypeOf(PersonCF));

// .prototypeOfLinkedObjects

PersonCF.prototype.species = 'Homo Sapiens';
console.log(vee.species, matilda.species);

console.log(vee.hasOwnProperty('firstName'));
console.log(vee.hasOwnProperty('species'));

console.log(vee.__proto__);
// Object.prototype (top of prototype chain)
console.log(vee.__proto__.__proto__);
console.log(vee.__proto__.__proto__.__proto__);

console.dir(PersonCF.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance method
  // Method will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1995);
PersonCl.hey();

const account = {
  owner: 'Vee',
  movements: [200, 530, 120, 300],

  get lastest() {
    return this.movements.slice(-1).pop();
  },

  set lastest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.lastest);

account.lastest = 50;
console.log(account.movements);

const PersonPT = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonPT);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonPT);

const sarah = Object.create(PersonPT);
sarah.init('Sarah', 1997);
console.log(sarah);
sarah.calcAge();

// Inheritance Between "Classes": Constructor Funtions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Person.prototype;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} nad I study ${this.course}`);
};

const mike = new Student('Mike', 2002, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// Inheritance Between "Classes": ES6 Classes
class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance method
  // Method will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

class StudentClass extends PersonClass {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2022 - this.birthYear
      } years old, but as a student I feel more like ${
        2022 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentClass('Martha Jones', 2001, 'Computer Science');
martha.introduce();
martha.calcAge();

// Inheritance Between "Classes": Object.create
const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const ashe = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 1997, 'Computer Science');
jay.introduce();
jay.calcAge();

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instance)
  locale = navigator.language;

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approve`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#pin);
// console.log(acc1.#movements);
// console.log(acc1.#approveLoan);

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

///////////////////////////////////////////////
// Coding Challenge #1
///////////////////////////////////////////////

/*
const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.name} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.name} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mer = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.brake();

mer.accelerate();
mer.brake();
mer.accelerate();
mer.brake();

*/

///////////////////////////////////////////////

///////////////////////////////////////////////
// Coding Challenge #2
///////////////////////////////////////////////

/*
class CarClass {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.name} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.name} is going at ${this.speed} km/h`);
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
}

const ford = new CarClass('Ford', 120);
console.log(ford);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();
ford.speedUS = 50;
console.log(ford);

*/

///////////////////////////////////////////////

///////////////////////////////////////////////
// Coding Challenge #3
///////////////////////////////////////////////

/*
const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.name} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.name} is going at ${this.speed} km/h`);
};

const EC = function (name, speed, charge) {
  Car.call(this, name, speed);
  this.charge = charge;
};

// Link the prototype
EC.prototype = Object.create(Car.prototype);

EC.prototype.chargeBattery = function (chargeTo) {
  this.battery = chargeTo;
};

EC.prototype.accelerate = function () {
  this.speed += 20;
  this.battery -= 1;
  console.log(
    `${this.name} is going at ${this.speed} km/h, with a charge of ${this.battery}%`
  );
};

const tesla = new EC('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.accelerate();

*/
///////////////////////////////////////////////

///////////////////////////////////////////////
// Coding Challenge #4
///////////////////////////////////////////////

/*
class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.name} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.name} is going at ${this.speed} km/h`);
    return this;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
}

class EC extends Car {
  // Private property
  #charge;

  constructor(name, speed, charge) {
    super(name, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.name} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EC('Rivian', 120, 23);

console.log(rivian);
rivian.accelerate().accelerate().chargeBattery(90).brake().accelerate();

console.log(rivian.speedUS);

*/
///////////////////////////////////////////////
