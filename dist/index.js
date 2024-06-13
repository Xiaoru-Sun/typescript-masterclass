
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
=======
// addTwoNumbers('2', 5)
addTwoNumbers(3, 9);
subtractTwoNumbers(10, 7);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([5, 7, 9, 11, 3, 2, 1]);
//-----------------------
// return type inference
//-----------------------
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
// we get inference on return types, but not on argument types
// type inference on return values does not enforce a return type

