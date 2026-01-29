// Looplar va Cyclelar

// While loop
// Do while loop
// For loop

// While
// let n = 1
// while (n <= 10) {
//     console.log(n);
//     n++
// }   

// Do While
// let n = 1
// do {
//     console.log(n);
//     n++
// } while (n <= 10);

// For
// let n = 1
// for (n; n <= 10; n++){
//     console.log(n);
// }

// Faqat 1 dan 10 gacha juft
// for (let n = 2; n <= 10; n++){
//     if (n % 2 === 0){
//         console.log(n);
//     }
// }

// let fruits = ['banana', 'apple', 'orange']
// for (fruit of fruits){
//     console.log(fruit);
// }

// 1 dan 10 gacha bo'lgan sonlarni bir biriga qo'shib bor
// let num = 0

// for (let i = 1; i <= 10; i++){
//     num 
// }
// console.log(num);


// Faqat 1 dan 10 gacha juft sonlarni qoshish
// num = 0 
// for (let i = 2; i <= 10; i++){
//     if (i % 2 === 0){
//         num += i
//         console.log(num);
//     }
// }

let num = [4, 8, 15, 16, 23, 42]

let sum = 0

for (let n of num){
    sum += n
}
console.log(sum / num.length);
