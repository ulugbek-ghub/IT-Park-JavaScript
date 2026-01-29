// Hodisalar

// CHaqirish 👇👇
// const btn1 = document.querySelector(".btn1")
// const btn2 = document.querySelector(".btn2")
// const btn3 = document.querySelector(".btn3")

// console.log(btn);

// Xato usullari
// btn.onclick = function() {
//     console.log('Siz 1 ni bosdingiz');
// }

// btn.onclick = function() {
//     console.log('Siz 2 ni bosdingiz');
// }

// btn.addEventListener('mouseenter', () =>{
//     console.log('Siz 1 ni bosdingiz');
// })

// btn.addEventListener('mouseleave', () =>{
//     console.log('Siz 1 ni bosdingiz');
// })

// btn.addEventListener('click', () =>{
//     console.log('Siz 2 ni bosdingiz');
// })

// btn.addEventListener('click', (e) => {
//     // console.log(e.target);

//     // e.target.textContent = 'Button'
//     // e.target.style.backgroundColor = 'green'
//     // e.target.style.borderRadius = '20px'
//     // e.target.style.width = '100px'

//     // e.target.remove()
//     // e.target.innerHTML = 'HEllo'
// })

// btn1.addEventListener('click', (e) => {
//     e.target.remove()
// })

// btn2.addEventListener('click', (e) => {
//     e.target.remove()
// })

// btn3.addEventListener('click', (e) => {
//     // e.target.remove()
//     // e.target.innerHTML = 'Error: TypeError. Uncaught SyntaxError (at *scripts.js*)'
//     document.body.style.backgroundColor = 'green'
// })

const item = document.querySelectorAll("li");
const clear = document.querySelector("button");

item.forEach((title) => {
  title.addEventListener("click", () => {
    title.classList.toggle("done");
  });
});

clear.addEventListener("click", () => {
  item.forEach((title) => {
    title.classList.add("done");
    title.remove()
    
  });
});