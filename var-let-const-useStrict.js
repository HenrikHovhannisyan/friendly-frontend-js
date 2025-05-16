"use strict";
console.log("var-let-const-useStrict.js");
// let, const, var
// let and const are block scoped
// var is function scoped

// console.log(message); // error - message is not defined
let message = "Hello World!";
console.log(message);
message = "Goodbye World!";
console.log(message);

console.log(message1); // Undefined
var message1 = "Hello World!";
console.log(message1);

const message2 = "Hello World!";
console.log(message2);
// message2 = "Goodbye World!"; // error - Assignment to constant variable.

const name = "John",
  age = 30,
  isDeveloper = true;
console.log(name, age, isDeveloper);

const name1 = "John";
const admin = name1;
console.log(admin);

lastName = "Doe";
console.log(lastName); // error - lastName is not defined in use strict mode

let $name;
let _name;
let name5;
//let 1name; // error - Invalid or unexpected token

// Зарезервированные ключевые слова в ECMAScript 2015
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar#%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D1%8B%D0%B5_%D1%81%D0%BB%D0%BE%D0%B2%D0%B0
