const seriesDB = {
    count: 0,
    series: [],
    actors: [],
    genres: [],
    privat: true,

    start: function() {
        seriesDB.count = +prompt("Nechta serial ko'rgansiz?")

            for(let n=0; n<1;n++){
            
            if (seriesDB.count !== null, seriesDB.count !== ''){  
           } else{
               n--
            }
        }
    },

    setFavouriteSeries: function() {
    for (let i=0; i<2; i++) {
    const a = prompt("So'nggi ko'rgan serialingiz?")
    const b = +prompt("Necha baho berasiz?")

    if(a !== null && a !== '' && b != null && b !==''){
        seriesDB.series[a] = b
    } else{
        i--
    }
}
    },

    seriesCounting: function() {
            if (seriesDB.count < 5){
            console.log("Siz kam serial ko'rgan ekansiz.");
    
            }else if (seriesDB.count > 5 && seriesDB.count <= 10){
            console.log("Siz classic tamoshabin ekansiz.");
    
            }else if (seriesDB.count > 10){
            console.log("Siz serialchi zvezda ekansiz.");
        }
    },

    visibleDB: function() {
        if (seriesDB.privat === true) {
            seriesDB.privat = false
        } else{
            seriesDB.privat = true
        }
    },

    writeGenres: function() {
            for(let m=1; m<3; m++){
                const genre = prompt("Yaxshi ko'rgan janringiz?");
                if (genre !== null && genre !== '') {
                    seriesDB.genres[genre] = genre
                } else{
                    m--
            }
        }
    }
}