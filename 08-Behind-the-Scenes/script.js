'use strict';

/*
function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let ouput = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(ouput);

    if (birthYear >= 1981 && birthYear <= 2004) {
      var millenial = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Tuong Vy';

      // Reassigning outer scope's variable
      ouput = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // cannot call here
    console.log(millenial); // var variables do not care about block
    // console.log(add(2, 3));
    console.log(ouput);
  }
  printAge();
  return age;
}

const firstName = 'Vee';
calcAge(2000);

// Cannot call here
// console.log(age);
// printAge();

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Vee';
let job = 'student';
const year = 2000;

// functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAge(2000);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAgeArrow(2000);

const vee = {
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
vee.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = vee.calcAge;
matilda.calcAge();

const f = vee.calcAge;
f();

var firstName = 'Matilda';

const vee = {
  firstName: 'Vee',
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    // Solution 1
    // const self = this; // self of that
    // const isMatilda = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 2004);
    //   // console.log(this.year >= 1981 && this.year <= 2004);
    // };

    // Solution 2
    const isMatilda = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 2004);
    };
    isMatilda();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
vee.greet();
vee.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5);
addArrow(2, 5, 8, 12);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Vee',
  age: 22,
};

const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('Me: ', me);
*/

// Primitive types
let lastName = 'Luong';
let oldLastName = lastName;
lastName = 'Nguyen';
console.log(lastName, oldLastName);

const vee = {
  firstName: 'Vee',
  lastName: 'Luong',
  age: 22,
};
const marriedVee = vee;
marriedVee.lastName = 'Nguyen';
console.log('Before marriage: ', vee);
console.log('After marriage: ', marriedVee);
// marriedVee = {};

// Copying objects
const vee2 = {
  firstName: 'Vee',
  lastName: 'Luong',
  age: 22,
  family: ['Alice', 'Bob'],
};

const veeCopy = Object.assign({}, vee2);
veeCopy.lastName = 'Nguyen';

veeCopy.family.push('Mary');
veeCopy.family.push('John');

console.log('Before marriage: ', vee2);
console.log('After marriage: ', veeCopy);
