/*
let js = "amazing";
console.log(100 - 60 + 40);

console.log("Vee");
console.log(8);

let firstName = "Vee";
console.log(firstName);
console.log(firstName);

// Variable name conventions
let tuong_vee = "VL";
let $function = 20;

let person = "Vy";
let PI = 3.1415;


let jsIsFun = true;
console.log(jsIsFun);

// console.log(typeof true);
console.log(typeof jsIsFun);
// console.log(typeof 8);
// console.log(typeof "Vee");

jsIsFun = "Yes!";
console.log(typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(year);
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 2000;
// birthYear = 2022;
// const job;

var job = "programer";
job = "teacher";

lastName = "Luong";
console.log(lastName);


// Math Operators
const now = 2022;
const ageVee = now - 2000;
const ageMy = now - 2004;
console.log(ageVee, ageMy);

console.log(ageVee * 2, ageVee / 2, 2 ** 3);
// 2 ** 3 mwans 2 to the power of 3 = 2 * 2 * 2

const firstName = "Vy";
const lastName = "Luong";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10;
x++;
x++;
x--;
console.log(x);

// Comparation Operators
console.log(ageVee > ageMy);
console.log(ageMy >= 18);

const isFullAge = ageVee >= 18;
console.log(now - 2000 > now - 2020);


const now = 2022;
const ageVee = now - 2000;
const ageMy = now - 2004;

console.log(now - 2000 > now - 2020);

let x, y;
x = y = 10 - 2 - 4; // x = y = 4, x = 4
console.log(x, y);

const averageAge = (ageVee + ageMy) / 2;
console.log(ageVee, ageMy, averageAge);
*/

////////////////////////////////////
// Coding Challenge #1

/*
Vee and Dat are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Vee's and Dat's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'veeHigherBMI' containing information about whether Vee has a higher BMI than Dat.

GOOD LUCK 😀
*/

// const massVee = 52;
// const heightVee = 1.54;
// const massDat = 75;
// const heightDat = 1.7;

// const bmiVee = massVee / heightVee ** 2;
// const bmiDat = massDat / (heightDat * heightDat);
// console.log("Vee: " + massVee + " " + heightVee);
// console.log("Dat: " + massDat + " " + heightDat);

// console.log("Vee's BMI: ", bmiVee);
// console.log("Dat's BMI: ", bmiDat);

// const veeHigherBMI =bmiVee > bmiDat;
// console.log(veeHigherBMI);

////////////////////////////////////

/*
const firstName = "Vee";
const job = "student";
const birthYear = 2000;
const year = 2022;

const vee =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(vee);

const veeNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(veeNew);

console.log(`Just a regular string ...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String 
multiple 
lines`);


const age = 22;

if (age >= 18) {
  console.log("Vee can start driving license 🚗"); // icon: Window + .
} else {
  const yearsLeft = 18 - age;
  console.log(`Vee is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2000;
let century;
if (birthYear < 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Vee's BMI is higher than Dat's!" or "Dat's BMI is higher than Vee's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Vee's BMI (28.3) is higher than Dat's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// const massVee = 52;
// const heightVee = 1.54;
// const massDat = 75;
// const heightDat = 1.7;

// const bmiVee = massVee / heightVee ** 2;
// const bmiDat = massDat / (heightDat * heightDat);
// console.log("Vee: " + massVee + " " + heightVee);
// console.log("Dat: " + massDat + " " + heightDat);

// console.log("Vee's BMI: ", bmiVee);
// console.log("Dat's BMI: ", bmiDat);

// if (bmiVee > bmiDat) {
//   console.log("Vee's BMI is higher than Dat's!");
// } else {
//   console.log("Dat's BMI is higher than Vee's!");
// }

// if (bmiVee > bmiDat) {
//   console.log(`Vee's BMI (${bmiVee}) is higher than Dat's (${bmiDat}) !`);
// } else {
//   console.log(`Dat's BMI (${bmiDat}) is higher than Vee's (${bmiVee}) !`);
// }

////////////////////////////////////

/*
const inputYear = "2000";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Vee"));
console.log(typeof NaN);

console.log(String(20), 20);

// Type coercion
console.log("I am " + 22 + "years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" > "10");

let n = "1" + 1; // '11'
n = n - 1; // 10
console.log(n);

// 5 falsy values: 0, '', undefined, null, Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("vee"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 10;
if (money) {
  console.log("Don't spend it all ;");
} else {
  console.log("You should get a job!");
}

let height = 152;
if (height) {
  console.log("YAY! height is defined");
} else {
  console.log("Height is UNDEFINED");
}


const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const number = Number(prompt("What's your favourite number?"));
console.log(number);
console.log(typeof number);

if (number === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (number === 7) {
  console.log("7 is also a cool number");
} else if (number === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 9 or 7");
}

if (number !== 23) console.log("Why not 23?");

const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//   console.log("Vee is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Vee is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// let averageDolphins = (96 + 108 + 89) / 3;
// let averageKoalas = (88 + 91 + 110) / 3;
// console.log(averageDolphins, averageKoalas);

// if (averageDolphins > averageKoalas) {
//   console.log("The winner is Dolphins");
// } else if (averageDolphins === averageKoalas) {
//   console.log("Both teams are equal");
// } else {
//   console.log("The winner is Koalas");
// }

// averageDolphins = (97 + 112 + 101) / 3;
// averageKoalas = (109 + 95 + 123) / 3;
// console.log(averageDolphins, averageKoalas);

// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//   console.log("The winner is Dolphins");
// } else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
//   console.log("The winner is Koalas");
// } else if (
//   averageDolphins === averageKoalas &&
//   averageDolphins >= 100 &&
//   averageKoalas >= 100
// ) {
//   console.log("Both teams are equal");
// } else {
//   console.log("No one is winner! :(");
// }

////////////////////////////////////

/*
const day = "wednesday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}


3 + 4;
1990;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Vee";
console.log(`I'm ${2022 - 2000} years old ${me}`);

const age = 22;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink juice 🥤");

const drink = age >= 18 ? "wine 🍷" : "juice 🥤";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "juice 🥤";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "juice 🥤"}`);
*/

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

////////////////////////////////////

////////////////////////////////////
// ASSIGNMENT
////////////////////////////////////

//LECTURE: Values and Variables
console.log("--- LECTURE: Values and Variables ---");
let country = "Vietnam";
let continent = "Asia";
let population = 95;
console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types
console.log("--- LECTURE: Data Types ---");
let isIsland = false;
let language;
console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

// LECTURE: let, const and var
console.log("--- LECTURE: let, const and var ---");
language = "Vietnamese";
const c_language = "Vietnamese";
var v_language = "Vietnamese";
// c_language = "C"; CAN'T BE CHANGED
v_language = "V";
console.log(language);
console.log(c_language);
console.log(v_language);

// LECTURE: Basic Operators
console.log("--- LECTURE: Basic Operators ---");
console.log(population / 2);
console.log(population + 1);
console.log(population - 6);
console.log(33 - population);
let description =
  country +
  " is in " +
  continent +
  ", and it's " +
  population +
  " million people speak " +
  language;
console.log(description);

// LECTURE: Strings and Template Literals
console.log("--- LECTURE: Strings and Template Literals ---");
description = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
console.log(description);

// LECTURE: Taking Decisions: if / else Statements
console.log("--- LECTURE: Taking Decisions: if / else Statements ---");
if (population > 130) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${130 - population} million below average`
  );
}

// LECTURE: Equality Operators: == vs. ===
// console.log("--- LECTURE: Equality Operators: == vs. === ---");
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// LECTURE: Logical Operators
console.log("--- LECTURE: Logical Operators ---");
if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// LECTURE: The switch Statement
console.log("--- LECTURE: The switch Statement ---");
switch (language) {
  case "chinese" || "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("2nd place in number of native speakers");
    break;
  default:
    console.log("Great language too :D");
}

// LECTURE: The Conditional (Ternary) Operator
console.log("--- LECTURE: The Conditional (Ternary) Operator ---");
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
