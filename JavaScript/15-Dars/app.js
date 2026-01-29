// Klonlash

// Primitive malumot turi (oddiy malumot turi)
// let a = 10
// b = a
// b = b +12

// console.log(a);
// console.log(b);

// Yuzaki klonlash (shallow clone)
// Chuqur klonlash (deep clone)

// Object === kompleks malumot turi

// Yuzaki klonlash emas, Bu nusxalash yani reference nusxalash
const person = {
    firstName: "Asad",
    age: 23,
    hobbies: {
        sport: "F1",
        music: "Pop"
    }
}
// const clonePerson = person
// clonePerson.firstName = "Ali"
// clonePerson.age = 30

// console.log(person);
// console.log(clonePerson);

// Yuzaki klonlash usullari

// 1-usuli Iteratsiya
// const copyObject = (Object) => {
//     const newObject = {}

//     for (let key in Object) {
//         newObject[key] = Object[key]
//     }
//     return newObject
// }

// const clonePerson = copyObject(person)
// clonePerson.age = 30

// console.log(person)
// console.log(clonePerson)

// 2-usuli Object.assign()

// const clonePerson = Object.assign({lastName: 'Hasanov', person})

// clonePerson.firstName = "Kamol"
// clonePerson.age = 40

// console.log(person)
// console.log(clonePerson)

// 3-usuli Spread operator ...

// const clonePerson = {...person}
// clonePerson.firstName = "Aziz"
// clonePerson.age = 16

// console.log(person);
// console.log(clonePerson);


// Array clonlash
// 1-usuli Slice()

// const cars = ['BMW', 'Kia', 'GM', 'Chevrolet']

// const cloneArr = cars.slice()

// cloneArr[0] = "Audi"

// console.log(cars);
// console.log(cloneArr);

// const cloneArr = [...cars]
// cloneArr[1] = "Hyundai"
// console.log(cars);
// console.log(cloneArr);

// const numbers = [1, 2, 3, 4]
// const cloneArr = Array.from(numbers)
// cloneArr.push(5)
// console.log(numbers);
// console.log(cloneArr);

// const product = {
//     productName: "tomatoes",
//     price: 4000,
//     weight: "1kg"
// }

// const cloneProduct = {...product}
// cloneProduct.name = "Qatiq"
// cloneProduct.price = 5000

// console.log(product);
// console.log(cloneProduct);

// function dokon(cola, food, snak) {

// }


const produktsanoq = +prompt("Nechta mahsulot kiritmoqchisiz?");
const dokonDB = {
    count: produktsanoq,
    items: {},
    privat: false
};

const products = ["cola", "food", "snack"];

for (let i = 0; i < 3; i++) {
    const a = products[i];
    let b = prompt(`${a} uchun miqdor kiriting:`);

    if (b !== null && b !== "") {
        dokonDB.items[a] = b;
    } else {
        i--;
    }
}

if (dokonDB.count < 2) {
    alert("Siz kam mahsulot kiritdingiz");
} else if (dokonDB.count >= 2 && dokonDB.count < 5) {
    alert("Siz o'rtacha xaridor ekansiz");
} else if (dokonDB.count >= 5) {
    alert("Siz katta xaridor ekansiz");
}

console.log(dokonDB);
