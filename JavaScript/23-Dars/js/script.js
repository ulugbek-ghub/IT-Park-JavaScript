const adv = document.querySelectorAll(".promo__adv img"),
    ganer = document.querySelector(".promo__genre"),
    wrapper = document.querySelector(".promo__bg"),
    films = document.querySelector(".promo__interactive-list"),
    buttons = document.querySelector('button'),
    navbars = document.querySelector('.navbar')

    const serialDb = {
        serials: [
            "OMAR",
            "The Final Legacy",
            "ERTUGRUL",
            "MAGNIFICENT CENTURY",
            "GREAT SELJUKS: GUARDIANS..."
        ]      
    }

// Reaklama o'chirildi
adv.forEach(item => {
    item.remove();
})
// yozuvni o'zgartirish
ganer.textContent = "Comedy";

// IMG .ni o'zgartirdm
wrapper.style.backgroundImage = "url('img/1.jpg')";

films.innerHTML = ""

serialDb.serials.forEach((item, idx) => {
    films.innerHTML += `
    <li class="promo__interactive-item">
        ${idx + 1} ${item}
        <div class="delete"></div>
    </li>
    `
})

buttons.style.borderRadius = "20px"

navbars.style.backgroundImage = "url('./img/facebook.jpg')";

// navbar.style.backgroundImage = "url('./img/facebook.png')";