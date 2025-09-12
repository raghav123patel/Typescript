"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//class and object example
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
const person = new Person("raghav", 24, "khandwa");
console.log(person);
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.height = height,
            this.width = width;
    }
    getArea() {
        return this.width * this.height;
    }
}
const area = new Rectangle(4, 5);
console.log(area);
console.log(area.getArea());
class Sides {
    constructor(side, sides) {
        this.side = side;
        this.sides = sides;
        this.side = side,
            this.sides = sides;
    }
    getSum() {
        return this.side * this.sides;
    }
}
class Square extends Sides {
}
const sum = new Sides(2, 5);
console.log(sum);
console.log(sum.getSum());
const square = new Square(6, 8);
console.log(square);
console.log(square.getSum());
//generics 
// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
// Generics makes it easier to write reusable code.
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair("raghav", 19));
//# sourceMappingURL=classes.js.map