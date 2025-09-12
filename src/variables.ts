let a: string = "aditya"
console.log(a); 

let b: number = 12;
console.log(b);

b = 46;
console.log(b);

let v: any = "rahul"
console.log(v);

v=13;
console.log(v);    

let u = "rishabh";
console.log(u);

const name :string[] = [];   
name.push("raghav");
console.log(name);

const numbers : number[] = [];
numbers.push(2,3,5,7);
console.log(numbers);  

const numbering: number[] = [1,2,4,5,6,7];
numbering.push(10);
console.log(numbering);         

//readonly concept -  cannot be modified after the initialization
const number : readonly number[] = [1,2,4];       
console.log(number);
          
//inference
let numbered = [1,4,5,6, "raj"];
numbered.push("ratan");
console.log(numbered);

 //tuple-A tuple is a typed array with a pre-defined length and types for each index.
 let newTuple : [number, Boolean, String];
 newTuple = [10,false, "ravi"];
 console.log(newTuple);   

 //readonly tuple
 let newTuples : [number, Boolean, String];
 newTuples = [14, true, "shobhit"];
 newTuples.push("neeraj"); //here no type safety for more than three indexes
 console.log(newTuples);

 //readonly case-here cannot apply the push property in tuples
 let tupleExample : readonly[number, String, Boolean];
 tupleExample = [29, "typescript", false];
 console.log(tupleExample);
 
 //named tuples - Named tuples allow us to provide context for our values at each index.
 const graph: [x: number, y: number] = [10,40];
 console.log(graph);

 //destructuring tuples - Since tuples are arrays we can also destructure them.
 const newGraph: [number, number] = [40,90];
 const [x,y] = newGraph;
 console.log(newGraph);  

 //ts object types -
 const car: {type: string, model: string, fuelType: string, milege: Number, available: Boolean} ={
    type: "Grand Vitara",
    model: "zeta",
    fuelType: "CNG",
    milege: 26,
    available: true,
 }
 console.log(car);   

 //ts object type inference - TypeScript can infer the types of properties based on their values.
 const cars = {
    type: "toyota"
 };
 cars.type="innova";
 //cars.type=2 - error
 console.log(cars);

  // enums in typescript-
//An enum is a special "class" that represents a group of constants (unchangeable variables).
//nums come in two flavors string and numeric. Lets start with numeric.
//numeric enums - default

enum myEnum {
    Indore,
    Bhopal,
    Mumbai,
    Pune,
}
console.log(myEnum.Mumbai);

//numeric enums - initialized 
enum myCities {
    Indore = 'rajwada',
    Bhopal = 1,
    Bombay = 'tajPalace',
}
console.log(myCities.Indore);
//example two 
enum statusCode {
    NotFound = 404,
    OK = 200,
    ServerError = 500,
    BadRequest = 400,
    Accepted = 202,
    Unauthorized = 403,
}
console.log(statusCode.NotFound);
//string enums
enum statusCode {
    Ok = 'request fetched successfully',
    Error = 'server error',
    UserNotFound = 'unauthorized',
}
console.log(statusCode.Error);

//type aliases and interfaces 
//creating a new interface and using it 

interface Details {
    name : String,
    age: Number,
    college: String,
    branch: String,
}

const information: Details = {
   name: 'rajat',
   age: 20,
   college: 'symbiosis',
   branch: 'data science',  
}  
console.log(information);
console.log(information.college)

  //extending interfaces-
  interface Box {   
    height: number,
    width: number,
  }

  interface BoxDetail extends Box {
    weight: number,
  }
  const newBox : BoxDetail = {
    height: 144,
    width: 67,
    weight: 50,
  }
  console.log(newBox);    

  //typescript union types
 ///Union types are used when a value can be more than a single type.
//Such as when a property would be string or number.
// Using the | we are saying our parameter is a string or number:
function printStatusCode(code: number | string) {
    console.log(`status code is: ${code}`);
}
printStatusCode(200);                                   

//functions 
function multiply(a: number, b: number) {
    return a*b;
}
const multiplication = multiply(2,3);
console.log(multiplication);
               
function printHello() : void {
    console.log('welcome to the typescript course');
}
printHello();    

function addNumber(a: number,b: number)  {
      return a + b;
}
const addition = addNumber(3,6);
console.log(addition);  

//casting-A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
// There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
//Casting is the process of overriding a type.
//casting with as
let z: unknown = 'hello';
console.log((z as string));
         

