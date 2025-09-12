"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = "aditya";
console.log(a);
let b = 12;
console.log(b);
b = 46;
console.log(b);
let v = "rahul";
console.log(v);
v = 13;
console.log(v);
let u = "rishabh";
console.log(u);
const name = [];
name.push("raghav");
console.log(name);
const numbers = [];
numbers.push(2, 3, 5, 7);
console.log(numbers);
const numbering = [1, 2, 4, 5, 6, 7];
numbering.push(10);
console.log(numbering);
//readonly concept -  cannot be modified after the initialization
const number = [1, 2, 4];
console.log(number);
//inference
let numbered = [1, 4, 5, 6, "raj"];
numbered.push("ratan");
console.log(numbered);
//tuple-A tuple is a typed array with a pre-defined length and types for each index.
let newTuple;
newTuple = [10, false, "ravi"];
console.log(newTuple);
//readonly tuple
let newTuples;
newTuples = [14, true, "shobhit"];
newTuples.push("neeraj"); //here no type safety for more than three indexes
console.log(newTuples);
//readonly case-here cannot apply the push property in tuples
let tupleExample;
tupleExample = [29, "typescript", false];
console.log(tupleExample);
//named tuples - Named tuples allow us to provide context for our values at each index.
const graph = [10, 40];
console.log(graph);
//destructuring tuples - Since tuples are arrays we can also destructure them.
const newGraph = [40, 90];
const [x, y] = newGraph;
console.log(newGraph);
//ts object types -
const car = {
    type: "Grand Vitara",
    model: "zeta",
    fuelType: "CNG",
    milege: 26,
    available: true,
};
console.log(car);
//ts object type inference - TypeScript can infer the types of properties based on their values.
const cars = {
    type: "toyota"
};
cars.type = "innova";
//cars.type=2 - error
console.log(cars);
// enums in typescript-
//An enum is a special "class" that represents a group of constants (unchangeable variables).
//nums come in two flavors string and numeric. Lets start with numeric.
//numeric enums - default
var myEnum;
(function (myEnum) {
    myEnum[myEnum["Indore"] = 0] = "Indore";
    myEnum[myEnum["Bhopal"] = 1] = "Bhopal";
    myEnum[myEnum["Mumbai"] = 2] = "Mumbai";
    myEnum[myEnum["Pune"] = 3] = "Pune";
})(myEnum || (myEnum = {}));
console.log(myEnum.Mumbai);
//numeric enums - initialized 
var myCities;
(function (myCities) {
    myCities["Indore"] = "rajwada";
    myCities[myCities["Bhopal"] = 1] = "Bhopal";
    myCities["Bombay"] = "tajPalace";
})(myCities || (myCities = {}));
console.log(myCities.Indore);
//example two 
var statusCode;
(function (statusCode) {
    statusCode[statusCode["NotFound"] = 404] = "NotFound";
    statusCode[statusCode["OK"] = 200] = "OK";
    statusCode[statusCode["ServerError"] = 500] = "ServerError";
    statusCode[statusCode["BadRequest"] = 400] = "BadRequest";
    statusCode[statusCode["Accepted"] = 202] = "Accepted";
    statusCode[statusCode["Unauthorized"] = 403] = "Unauthorized";
})(statusCode || (statusCode = {}));
console.log(statusCode.NotFound);
//string enums
(function (statusCode) {
    statusCode["Ok"] = "request fetched successfully";
    statusCode["Error"] = "server error";
    statusCode["UserNotFound"] = "unauthorized";
})(statusCode || (statusCode = {}));
console.log(statusCode.Error);
const information = {
    name: 'rajat',
    age: 20,
    college: 'symbiosis',
    branch: 'data science',
};
console.log(information);
console.log(information.college);
const newBox = {
    height: 144,
    width: 67,
    weight: 50,
};
console.log(newBox);
//typescript union types
///Union types are used when a value can be more than a single type.
//Such as when a property would be string or number.
// Using the | we are saying our parameter is a string or number:
function printStatusCode(code) {
    console.log(`status code is: ${code}`);
}
printStatusCode(200);
//functions 
function multiply(a, b) {
    return a * b;
}
const multiplication = multiply(2, 3);
console.log(multiplication);
function printHello() {
    console.log('welcome to the typescript course');
}
printHello();
function addNumber(a, b) {
    return a + b;
}
const addition = addNumber(3, 6);
console.log(addition);
//casting-A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
// There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
//Casting is the process of overriding a type.
//casting with as
let z = 'hello';
console.log(z);
//# sourceMappingURL=variables.js.map