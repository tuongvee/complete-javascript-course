/*
'use strict;

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

function logger() {
  console.log("My name is Vee");
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));


// Function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calcAge1(2000);

// Function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(2000);

// Arrow function
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(2000);

console.log(age1, age2, age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2000, "Vee"));
console.log(yearsUntilRetirement(2004, "My"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🥳`);
    return -1;
  }

  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2000, "Vee"));
console.log(yearsUntilRetirement(1950, "Bob"));



/////////////////////////////
// Coding Challenge #1
/////////////////////////////

// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins! 😓");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

/////////////////////////////

const friend1 = "Dat";
const friend2 = "Linh";
const friend3 = "Tien";

const friends = ["Dat", "Linh", "Tien"];
console.log(friends);

const y = new Array(1991, 1986, 2000, 2094);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Anh";
console.log(friends);
// friends = ["AA", "BB"];

const firstName = "Vee";
const vee = [firstName, "Luong", 2022 - 2000, "student", friends];
console.log(vee);
console.log(vee.length);

// Exercise
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1])
];
console.log(ages);


const friends = ["Dat", "Linh", "Tien"];

// Add elements
const newLength = friends.push("Anh");
console.log(friends);
console.log(newLength);

friends.unshift("Hoa");
console.log(friends);

// Rremove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Dat"));
console.log(friends.indexOf("Anh"));

friends.push(23);
console.log(friends.includes("Dat"));
console.log(friends.includes("Anh"));
console.log(friends.includes("23")); //fasle
console.log(friends.includes(23)); //true

if (friends.includes("Dat")) {
  console.log("You have a friend called Dat");
}

/////////////////////////////
// Coding Challenge #2
/////////////////////////////

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [];
// tips.push(calcTip(bills[0]));
// tips.push(calcTip(bills[1]));
// tips.push(calcTip(bills[2]));

// const totals = [];
// totals.push(bills[0] + tips[0]);
// totals.push(bills[1] + tips[1]);
// totals.push(bills[2] + tips[2]);
// console.log(bills, tips, totals);

/////////////////////////////

const veeArray = [
  "Vee",
  "Luong",
  2022 - 2000,
  "student",
  ["Dat", "Linh", "Anh"],
];

const vee = {
  firstName: "Vee",
  lastName: "Luong",
  age: 2022 - 2000,
  job: "student",
  friends: ["Dat", "Linh", "Anh"],
};

console.log(vee);

const vee = {
  firstName: "Vee",
  lastName: "Luong",
  age: 2022 - 2000,
  job: "student",
  friends: ["Dat", "Linh", "Anh"],
};

console.log(vee);

console.log(vee.lastName);
console.log(vee["lastName"]);

const nameKey = "Name";
console.log(vee["first" + nameKey]);
console.log(vee["last" + nameKey]);

const interestIn = prompt(
  "What do you want to know about Vee? Choose between firstName, lastName, age, job and friends"
);
console.log(vee[interestIn]);

if (vee[interestIn]) {
  console.log(vee[interestIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

vee.location = "Vietnam";
vee["intagram"] = "@lnt_vee";
console.log(vee);

// Challenge
// "Vee has 3 friends, and her best friend is called Dat"
console.log(
  `${vee.firstName} has ${vee.friends.length} friends, and her best friend is called ${vee.friends[0]}`
);

const vee = {
  firstName: "Vee",
  lastName: "Luong",
  birthYear: 2000,
  job: "student",
  friends: ["Dat", "Linh", "Anh"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(vee.calcAge());
// console.log(vee["calcAge"]());

console.log(vee.age);

// Challenge
// "Vee is a 22-year old student, and she has a/no driver's license"
console.log(vee.getSummary());

/////////////////////////////
// Coding Challenge #3
/////////////////////////////

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})`
//   );
// } else {
//   console.log("It's a draw! 💪");
// }

/////////////////////////////

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} ➿`);
}

const vee = [
  "Vee",
  "Luong",
  2022 - 2000,
  "student",
  ["Dat", "Linh", "Anh"],
  true,
];

const types = [];

for (let i = 0; i < vee.length; i++) {
  // Reading from vee array
  console.log(vee[i], typeof vee[i]);

  // Filling types array
  // types[i] = typeof vee[i];
  types.push(typeof vee[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < vee.length; i++) {
  if (typeof vee[i] !== "string") continue;

  console.log(vee[i], typeof vee[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < vee.length; i++) {
  if (typeof vee[i] === "number") break;

  console.log(vee[i], typeof vee[i]);
}

const vee = [
  "Vee",
  "Luong",
  2022 - 2000,
  "student",
  ["Dat", "Linh", "Anh"],
  true,
];

// 0, 1, ... 4
// 4, 3, ... 0

for (let i = vee.length - 1; i >= 0; i--) {
  console.log(i, vee[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------ Starrting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} ➿`);
  }
}

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} ➿`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`Lifting weights repetition ${rep} ➿`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end ...");
}

*/

/////////////////////////////
// Coding Challenge #4
/////////////////////////////

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }

// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(totals));

/////////////////////////////

////////////////////////////////////
// ASSIGNMENT
////////////////////////////////////

/*

//LECTURE: Functions
console.log("--- LECTURE: Functions ---");

const describeCountry = function (country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and it's capital city is ${capitalCity}`
  );
};

describeCountry("Vietnam", 95, "Hanoi");
describeCountry("C", 8, "D");
describeCountry("E", 8, "F");

//LECTURE: Function Declarations vs. Expressions
console.log("--- LECTURE: Function Declarations vs. Expressions ---");
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
console.log(percentageOfWorld2(95) + "%");

// LECTURE: Arrow Functions
console.log("--- LECTURE: Arrow Functions ---");
const percentageOfWorld3 = (population) => (population / 7900) * 100;
console.log(percentageOfWorld3(95) + "%");

// LECTURE: Functions Calling Other Functions
console.log("--- LECTURE: Functions Calling Other Functions ---");

const describePopulation = function (country, population) {
  console.log(
    `${country} has ${population} million people, which is about ${percentageOfWorld1(
      population
    )}% of the world`
  );
};
console.log(describePopulation("Vietnam", 95));

// LECTURE: Introduction to Arrays
console.log("--- LECTURE: Introduction to Arrays ---");
const countries = ["Vietnam", "China", "Portugal", "Finland"];
const populations = [95, 1441, 10, 6];
console.log(populations.length === 4 ? true : false);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// LECTURE: Basic Array Operations (Methods)
console.log("--- LECTURE: Basic Array Operations (Methods) ---");
const neighbours = ["Combodia", "Laos", "China"];

neighbours.push("Utopia");
// neighbours.unshift("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) {
  console.log("Array has Germany");
} else {
  console.log("Probably not a central European country :D");
}

neighbours.push("Sweden");
neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
console.log(neighbours);

// LECTURE: Introduction to Objects
console.log("--- LECTURE: Introduction to Objects ---");
const myCountry = {
  country: "Vietnam",
  capital: "Hanoi",
  language: "Vietnamese",
  population: 95,
  neighbours: ["Combodia", "Laos", "China"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry["population"]);

// LECTURE: Object Methods
console.log("--- LECTURE: Object Methods ---");
myCountry.describe = function () {
  console.log(
    `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
  );
};
myCountry.describe();

myCountry.checkIsland = function (isIsland) {
  this.isIsland = isIsland;
};
myCountry.checkIsland(false);
console.log(myCountry.isIsland);

// LECTURE: Iteration: The for Loop
console.log("--- LECTURE: Iteration: The for Loop ---");
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

// LECTURE: Looping Arrays, Breaking and Continuing
console.log("--- LECTURE: Looping Arrays, Breaking and Continuing ---");
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages, percentages2);

// LECTURE: Looping Backwards and Loops in Loops
console.log("--- LECTURE: Looping Backwards and Loops in Loops ---");
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

// LECTURE: The while Loop
console.log("--- LECTURE: The while Loop ---");
const percentages3 = [];
let rep = 0;
while (rep < populations.length) {
  percentages3.push(percentageOfWorld1(populations[rep]));
  rep++;
}
console.log(percentages3);

let i = 0;
while (i < listOfNeighbours.length) {
  let j = 0;
  while (j < listOfNeighbours[i].length) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    j++;
  }
  i++;
}

*/
