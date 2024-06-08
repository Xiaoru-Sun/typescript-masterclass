// ---------
// arrays
// ---------

let names: string[] = ["Marios", "Luigi", "Peach"];
let ages: number[] = [23, 24, 35];
names.push("browser");
ages.push(27);

// ---------
// type inference with arrays
// ---------
let fruits = ["apples", "pear"];

fruits.push("bananas");
const f = fruits[3];

let things = [1, true, "hello"];

const t = things[0];

// ---------
// object literals
// ---------

// defines the structure of this object and the types of these properties
let user: { firstName: string; age: number; id: number } = {
  firstName: "mario",
  age: 30,
  id: 3,
};

// ---------
// type inference with object literals
// ---------

let person = { name: "luigi", score: 88 };

person.name = "bowser";
person.score = 66;

const score = person.score;

console.log("hello typescript", score);
