// OOP === Object Oriented Programming

// Obyektga yo'naltirilgan dasturlash 

// Hamma narsa obyektlardan tashkil topgan deb hisoblanadi

const cars = {
    ogirligi: 1500,
    uzunligi: 4,
    tezlik: function() {
        console.log("2200km/h");
    }
}

// const nexia3 = {
//     rang: "oq"
// }

// // eskiroq usuli 
// nexia3.__proto__ = cars;
// console.log(nexia3.ogirligi);
// console.log(nexia3.tezlik);

// Object.setPrototypeOf(nexia3, cars);

// const gentra = Object.create(cars)
// console.log(gentra.ogirligi);
// gentra.rang = "qora";


// const dokon1 = {
//     produkt1: "cola",
//     produkt2: "non",
//     produkt3: "shokolad",
//     produkt4: "sigaret"
// }
// const dokon5 = {
//     produkt10: "kuzov",
//     produkt11: "shina"
// }
// const dokon8 = {
//     produkt17: "noutbuk",
//     produkt18: "RAM"
// }

// dokon5.__proto__ = dokon1
// dokon8.__proto__ = dokon1
// console.log(dokon8.produkt3);

// const dokon2 = {
//     produkt5: "banan",
//     procukt6: "apple"
// }

// 1usul
// dokon2.__proto__ = dokon1
// console.log(dokon2.produkt4);

// // 2 usul
// Object.setPrototypeOf(dokon2, dokon1)
// console.log(dokon2.produkt3);

// 3usul

// const dokon2 = Object.create(dokon1)
// dokon2.produkt7 = "chips"
// console.log(dokon2.produkt2);
// console.log(dokon2.produkt7);