console.log("types.js");

// STRING
const message = `Hello
World!`;
console.log(message); // Hello World!

// NUMBER
console.log("text" / 100); // NaN
console.log("text" + 100); // text100
console.log(100 / 0); // Infinity
console.log(-100 / 0); // -Infinity
//Number > infinity -> false
//Number < infinity -> true (Always)
//Number < -infinity -> false
//Number > -infinity -> true (Always)

// BOOLEAN
console.log(true); // true
console.log(false); // false
console.log(typeof true); // boolean

// BIGINT
//console.log(9900000000000000000001n + 1); // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
//console.log(9900000000000000000001n + 2); // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(9900000000000000000001n + 1n); // 9900000000000000000002n
console.log(9900000000000000000001n + 2n); // 9900000000000000000003n
console.log(1_000_000); // 1000000

// NULL
let data = null;
console.log(data); // null
console.log(typeof data); // object
console.log(data === null); // true

// UNDEFINED
let un;
console.log(un); // undefined
console.log(typeof un); // undefined
console.log(un === undefined); // true

// OBJECT
let user = {
  name: "John",
  age: 30,
  isDeveloper: true,
};
console.log(user); // {name: "John", age: 30, isDeveloper: true}
console.log(typeof user); // object

console.log(typeof "String"); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof Symbol("symbol")); // symbol
console.log(typeof 100n); // bigint
console.log(typeof {}); // object

console.log(typeof []); // object
console.log(typeof function () {}); // function

console.log(Boolean(-1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("text")); // true
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true
console.log(Boolean("")); // f

// Everything is an true except false, 0, '', null, undefined, NaNalse
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean('')); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false


