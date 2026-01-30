// Function Constructor

// const number = new Number(42)
// console.log(number);

// function Person(firstName, lastName){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.hello = function(){
//         console.log(`Hello ${this.firstName} ${this.lastName}`);
//     }
// }

// const PersonOne = new Person('Gofur', 'Ruziev')
// console.log(PersonOne);

function Car(brand, model, year, color){
    this.brand = brand
    this.color = color
    this.year = year
    this.getInfo = function(){
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
    }
}

const carOne = new Car('BMW', 'm3', 2015, 'cobalt midnight')
const carTwo = new Car('Mercedes F1', 'W11', 2020, 'black')
const carThree = new Car('Lamborghini', 'Aventador', 2021, 'yellow')

console.log(carOne);
console.log(carTwo);
console.log(carThree);