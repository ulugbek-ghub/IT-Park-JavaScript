// Callbacks and Objects

// Callback - bu bitta function bajarailgandan keyin ishlaydigan function

// const firstLog = () => {
//     setTimeout.(function() {
//         console.log(1);
//     }, 2000)
// }

// const secondLog = () => {
//     console.log(2);
// }

// firstLog();
// secondLog();


// function hello (Callback) {
//     console.log("Hello World");
//     Callback();
// }

// hello (function() {
//     console.log(1);
// })

// function callBack() {
//     console.log(2);
// }

// hello(callBack)

// Object distructuring

// const person = {
//     firstName: "Asad",
//     lastName: "Komilov",
//     age: 23,
//     hobbies: {
//         sport: "Football",
//         music: "Rock"
//     }
// }

// console.log(Object.keys(person)); // Object ichidagi elementlarning soni


// Iteratsiya qilish - ichidagi elementlarni olish
// in - faqat obyektlarda ishlatiladi
// of - faqat massivlarda ishlatiladi
// for (let key in person) {b
//     // console.log(key);
//     // console.log(`Property ${key}: Value: $j{person[key]}`);
//     // console.log(typeofe person[key]);

//     if (typeof person[key] === "object") {
//         for (let i in person[key]) {
//             console.log(`Property ${i}: Value: ${person[key][i]}`);
//         }
//     } else {
//         console.log(`Property ${key}: Value: ${person[key]}`);
//     }
// }

// console.log(Object.keys(person));

