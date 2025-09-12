//ts- utility types  
// TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.
// This chapter covers the most popular utility types.

//partial- Partial changes all the properties in an object to be optional.

interface Persons {
    name: string,
    age: number,
    address: string,
    dob: string,
}

let newPerson: Partial<Persons> = {};
newPerson.name = "raghav";
console.log(newPerson);  

//required -Required changes all the properties in an object to be required.
interface Car {
    model: string,
    milege: number,
    price: number,
    isCNG: boolean,
}
let newShape: Required<Car> = {
    model: "innova-hycross",
    milege: 25,
    price: 50000000,
    isCNG: true,
}
console.log(newShape);

//record- Record is a shortcut to defining an object type with a specific key type and value type.

const newStudent: Record<string, number> = {
    'raghav': 21,
    'prakhar': 22,
    
}
console.log(newStudent);

//omit - omit removes keys from an object type

interface School {
    location: string,
    establishedYear: number,
    isCBSE: boolean, 
}

let removeField: Omit<School, 'location' > = {
    establishedYear: 2005,   
    isCBSE: true,
}
console.log(removeField);       

//pick
interface ShowRoom {
    type: string,
    name: string,
    space: number,  
}
let selectOne: Pick<ShowRoom, 'type'> = {
    type: 'two-wheeler',    
}
console.log(selectOne);   

//exclude - Exclude removes types from a union.

type Primitive = string | number | boolean 
const value: Exclude<Primitive, string> = true;       
console.log(value);                                      

