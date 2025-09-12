"use strict";
//ts- utility types  
// TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.
// This chapter covers the most popular utility types.
Object.defineProperty(exports, "__esModule", { value: true });
let newPerson = {};
newPerson.name = "raghav";
console.log(newPerson);
let newShape = {
    model: "innova-hycross",
    milege: 25,
    price: 50000000,
    isCNG: true,
};
console.log(newShape);
//record- Record is a shortcut to defining an object type with a specific key type and value type.
const newStudent = {
    'raghav': 21,
    'prakhar': 22,
};
console.log(newStudent);
let removeField = {
    establishedYear: 2005,
    isCBSE: true,
};
console.log(removeField);
let selectOne = {
    type: 'two-wheeler',
};
console.log(selectOne);
const value = true;
console.log(value);
//# sourceMappingURL=utility.js.map