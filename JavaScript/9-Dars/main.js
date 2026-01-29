// Functions

// Function Declaration === Function ishga tushishidan oldin chaqiradi, va uni yuqorida ham ishga tushirsa bo'ladi
// function showHello() {
//     console.log("Hello world");
// }

// showHello()

// let age = 25 // Global ozgaruvchi
// function showName(name, age) {
//     age = 18 // Local ozgaruvchi
//     console.log(`Mening ismim ${name}, yoshim ${age}`);
// }
// showName("Ali");
// console.log(age); 

// function calc(a, b) {
//     console.log(a + b);
    
// }

// calc(5,5)

// function calc(a, b) {
//     return a + b;
// }

// const pluCalc = calc(10, 20);
// console.log(pluCalc);

// const minusCalc = calc(50, 30);
// console.log(minusCalc - 10);

// Function Expression === Kod ketma ketligida function yaratiladi, va faqat undan keyin chaqirilishi mumkin
// showHello();
// const showHello = function() {
//     console.log("Hello world");
// }


// Arrow Functions === Cantac this mavjud emas

// const calc = (a, b) => {
//     return a + b;
// }

// calc()

// const calc = (a, b) => a + b;
// console.log(calc(15, 25));

// const calc = (a) => a ** 2
// console.log(calc(5));

// const age = year => 2025 - year
// console.log(age(2008));

// Massivdagi eng katta sonni topuvchi function

// function getMax(arr) {
//     let max = arr[0];
//     for(let num of arr) {
//         if(num > max) max = num
//     }
//     return max
// }
// console.log(getMax([10,5,100,75]));

// function getArifmetik(arr) {
//     let sum = 0;
//     for(let num of arr) {
//         arr.length 
//     }


// console.log(getArifmetik([912, 25, 57, 346, 32]));

// function number(num){
//     if (num > 0) return "Musbat son";
//     if (num < 0) return "Manfiy son";
//     return "Son 0 ga teng";
// }

// console.log(number(5));

// 1-misol
// function getSum(arr){
//     let sum = 0
//     for(let num of arr){
//         sum += num
//     }
//     return sum
// }

// console.log(getSum([10, 20, 30, 40, 50]));

// 2 misol
// function kattaIsm(name) {
//     return name[0].toUpperCase() + name.slice(1)
// }
// console.log(kattaIsm("ali"))

//3 misol

// function juftSon(numbersArray) {
//     const evenNumbers = numbersArray.filter(num => num % 2 === 0)
//     return evenNumbers
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbersArray = juftSon(numbers);
// console.log(evenNumbersArray)

// 4 misol
// function wordNumber(word) {
//     return word.length;
// }
// console.log(wordNumber("salom"));