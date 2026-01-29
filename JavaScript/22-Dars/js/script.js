// DOM - Dokument Objekt Model

// Eski usuli

// ID boyicha element chiqarish
// const boxId = document.getElementById("box")
// console.log(boxId);

// Class boyicha chiqarish
// const boxClass = document.getElementsByClassName("box")
// console.log(boxClass);

// Tag name bn chaqirish

// const buttonTagName = document.getElementsByTagName("button")
// console.log(buttonTagName);

// const boxId = document.querySelector("#box")
// console.log(boxId);

// Class boyicha chiqarish
// const boxClass = document.querySelectorAll(".box")
// console.log(boxClass);

// Yangi usuli




// ID boyicha element chiqarish
// const boxId = document.getElementById("box")
// console.log(boxId);

// Class boyicha chiqarish
// const boxClass = document.getElementsByClassName("box")
// console.log(boxClass);

// Tag name bn chaqirish

// const buttonTagName = document.getElementsByTagName("button")
// console.log(buttonTagName);

// const boxId = document.querySelector("#box")
// console.log(boxId);

// Class boyicha chiqarish
// const boxClass = document.querySelectorAll(".box")
// console.log(boxClass);

// const wrapper = document.querySelectorAll('.wrapper')
// console.log(wrapper);

// Elementlar bn ishlash

const boxId = document.querySelector('#box');
const buttons = document.querySelectorAll('button');
const circle = document.querySelectorAll('.circle');
const hearts = document.querySelectorAll('.heart');
const wrappers = document.querySelector('.wrapper');

// boxId.style.borderRadius = '100px'
// boxId.style.backgroundColor = 'green'

// buttons[1].style.borderRadius = '60px'
// buttons[2].style.backgroundColor = 'red'
// buttons[3].style.color = 'blue'

// circle[0].style.borderRadius = '0'


// for (let i = 0; i < circle.length; i++) {
//     circle[i].style.backgroundColor = 'yellow'
// }

// const div = document.createElement('div')
// div.classList.add('heart')


// Hodisalar bilan ishlash
div.classList.add('heart')
div.style.backgroundColor = 'purple'
// document.body.append(div)
wrapper.append(div)