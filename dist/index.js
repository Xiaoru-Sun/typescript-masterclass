"use strict";
//------
//any type
//------
let age;
age = 30;
age = true;
let title;
title = 25;
title = "title";
//------
//any type in arrays
//------
let things = ["hello", 5, null];
things.push({ id: 123 });
//------
//functions & any
//------
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether("hello");
const resultTwo = addTogether(3);
//useful when migrating from js to ts
// because using any won't cause errors initially
