//class and object example
class Person {
    constructor(public name: String, public age: number, public address: String) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
const person = new Person("raghav", 24, "khandwa");
console.log(person);   


//inheritance implements word 
//Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.


interface Shape {
    getArea: () => number;
}
class Rectangle implements Shape{
      constructor(public width: number, public height: number) {
        this.height = height,
        this.width = width
      }
      public getArea(): number {
        return this.width * this.height;
      }
}
const area = new Rectangle(4, 5);
console.log(area);
console.log(area.getArea());
   
//extends
interface Square {
    getSum: () => number;
}

class Sides implements Square {
    constructor(public side: number, public sides: number){
        this.side = side,
        this.sides = sides
    }
    public getSum(): number {
           return this.side * this.sides;
    }
}
class Square extends Sides {

}
const sum = new Sides(2,5);
console.log(sum);
console.log(sum.getSum());
const square = new Square(6,8);
console.log(square)
console.log(square.getSum());  

//generics 
// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

// Generics makes it easier to write reusable code.

function createPair<S, T>(v1: S, v2: T) {  
    return [v1 , v2];
}
console.log(createPair<string, number>("raghav", 19));   