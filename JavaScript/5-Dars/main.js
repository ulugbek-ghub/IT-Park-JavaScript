// const numberofSeries = +prompt("Nechta kino kordingiz?");

// const seriesDB = {     
//   count: numberofSeries,     
//   series: {},     
//   actors: {},     
//   genres: [],     
//   privat: false 
// };  

// const a = prompt("Oxirgi koringan kinongiz nima?"); 
// const b = prompt("Nechi baxo berasiz unga?");  

// const a2 = prompt("Yana bir oxirgi koringan kinongiz nima?"); 
// const b2 = prompt("Nechi baxo berasiz unga?");  

// seriesDB.series[a] = b; 
// seriesDB.series[a2] = b2;  

// seriesDB.actors["actor1"] = prompt("Sevimli aktyoringiz kim?"); 
// seriesDB.actors["actor2"] = prompt("Yana bir sevimli aktyoringiz kim?");  

// seriesDB.genres[0] = prompt("Sevimli janringiz nima?"); 
// seriesDB.genres[1] = prompt("Yana bir sevimli janringiz nima?"); 

// console.log(seriesDB);

// Mavzu: Shartli operatorlar
// if - agarda 
// else if - aks holda 

const age = +prompt("Muzeyga kirishdan oldin yoshingizni ayting: ")
if (age <= 12) {
    console.log("Sizga tekin!")
} else if (13 < age <= 18) {
    console.log("Sizdan 10.000 so'm")
} else if (19 < age <= 65) {
    console.log("Sizdan 20.000 so'm");
} else if (66 < age) {
    console.log("Sizga tekin otaxon!");
    
}
