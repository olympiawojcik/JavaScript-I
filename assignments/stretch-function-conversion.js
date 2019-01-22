// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
// No parameters, so place an empty parenthesis before
let myFunction = ()=> {};

// let anotherFunction = function (param) {
//   return param;
// };
//Single parameter, so parenthesis are optional

let anotherFunction = param => {return param};

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
//Multiple parameters, so parenthesis are required. Returns statement (performs an action) so needs to have curly braces 

let add = (param1, param2) => {return (param1 + param2)};
console.log(add(1, 2));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (param1, param2) => {return(param1 - param2)};

console.log(subtract(1, 2));

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

exampleArray = [1,2,3,4]

let triple = exampleArray => {
    return exampleArray.map(function(num) {
        return num*3;
    })
}

console.log(triple(exampleArray));
