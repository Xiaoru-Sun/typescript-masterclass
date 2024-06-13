"use strict";
/* functions */
function addNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
    // return total;
}
addAllNumbers([1, 2, 4, 5]);
// return type inference //
const formatGreeting = (name, greeting) => {
    return `${greeting} ${name}`;
};
const result = formatGreeting("marios", "hello");
console.log(result);
