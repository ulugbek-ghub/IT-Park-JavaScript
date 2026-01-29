// Ternarniy operator
// const age = +prompt('How old are you?', '')
// age <= 18 ? console.log("Multfilm") : console.log("Horror");

// switch caches

// const trafficLight = 'red'
// switch (trafficLight) {
//     case 'red':
//         console.log("stop");
//     break
    
//     case 'yellow':
//         console.log("ready");
//     break
    
//     case 'green':
//         console.log("go");
//     break
// }

const day = +prompt("Yil ichidagi kunni kiriting:");
switch (true) {
    case day % 7 === 1:
        console.log("monday");
        break;
    case day % 7 === 2:
        console.log("tuesday");
        break;
    case day % 7 === 3:
        console.log("wednesday");
        break;
    case day % 7 === 4:
        console.log("thursday");
        break;
    case day % 7 === 5:
        console.log("friday");
        break;
    case day % 7 === 6:
        console.log("saturday");
        break;
    case day % 7 === 7:
        console.log("sunday");
        break;
    default:
        console.log("Bunday kuni yoq");
}

