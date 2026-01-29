// Massivlar bilan ishlash

//               0       1        2        3        4+1
// const color = ['red', 'green', 'blue', 'yellow', 'pink']
// console.log(color.length);
// console.log(color[2]);

// Pop === massivni oxiridagi o'chiradi

// Push === massivni oxiriga yangi element qo'shadi

// shift === massivni boshidan element o'chiradi

// unshift === massivni boshiga yangi element qo'shadi

// console.log(color.pop());

// console.log(color.push('purple'));
// console.log(color);

// console.log(color.unshift('magenta'));
// console.log(color);


// Iteratsiya usullari

// 1-usuli 
// for (let i = 0; i < color.length; i++) {
//     console.log(color[i]);
// }

// 2-usuli

// for(let rang of color){
//     console.log(rang);
// }

// 3-usuli

// color.forEach(function(item, index, arr){
//     console.log(`${index}: ${item} in ${arr}` );
// });


// Split  textga massivga aylantiradi
// const text = 'assalom alaykum hurmatli oquvchilar'
// arrText = text.split(' ')
// console.log(arrText);

// Join  massivni textga aylantiradi
// const color = ['red', 'green', 'blue', 'yellow', 'pink']
// const newText = color.join(' - ')
// console.log(newText);

// Sort() alfabet boyicha taxlab beradi, sonlarni esa eng kichigidan eng kattasiga qarab taxlaydi
// const numbers = [5, 3, 8, 1, 4]
// numbers.sort()
// console.log(numbers);

const numbers = [5,3,8,1,4]
numbers.sort()