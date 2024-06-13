//--------
// tuples
//--------

let person: [string, number, boolean] = ["mario", 30, true];

// person[0] = false
person[0] = "luigi";
console.log(person[0]);

//-----------------
// tuples examples
//-----------------

let hsla: [number, string, string, number];
hsla = [200, "100%", "50%", 1];

let xy: [number, number];
xy = [94.7, 20.1];

let tup: [string, number];
tup = ["Alex", 5];

function useCoords(): [number, number] {
  // get coords of something

  const lat = 100;
  const long = 50;

  return [lat, long];
}

const [lat, long] = useCoords();

// Rest parameters
declare function example(...args: [string, number]): void;
declare function example(args0: string, args1: number): void;

type Matches = [string, boolean];
const arsenal: Matches = ["Man city", true];
const city: Matches = ["Man united", true];
const hotspur: Matches = ["Livepool", true];
//meaning it expects two or more tuples of type Matches followed by a string
function processMatches(...matches: [...Matches[], string]): void {
  const lastMatch = matches.pop();
  console.log("previous matches:");

  for (const match of matches) {
    console.log(match[0]);
  }
  console.log("last match:", lastMatch);
}

processMatches(arsenal, city, hotspur, "Chelsea vs. Arsenal");
//--------------
// named tuples
//--------------

let user: [name: string, age: number];

user = ["peach", 25];
console.log(user[0]);
