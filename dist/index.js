"use strict";
//--------
// tuples
//--------
let person = ["mario", 30, true];
// person[0] = false
person[0] = "luigi";
console.log(person[0]);
//-----------------
// tuples examples
//-----------------
let hsla;
hsla = [200, "100%", "50%", 1];
let xy;
xy = [94.7, 20.1];
let tup;
tup = ["Alex", 5];
function useCoords() {
    // get coords of something
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
const arsenal = ["Man city", true];
const city = ["Man united", true];
const hotspur = ["Livepool", true];
//meaning it expects two or more tuples of type Matches followed by a string
function processMatches(...matches) {
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
let user;
user = ["peach", 25];
console.log(user[0]);
