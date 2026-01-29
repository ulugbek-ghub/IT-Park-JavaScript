window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabContents = document.querySelectorAll('.tab_content'),
        tabParent = document.querySelector('.tabheader__items'),
        date = document.querySelector('#days'),
        hours = document.querySelector('#hours'),
        minutes = document.querySelector('#minutes'),
        seconds = document.querySelector('#seconds');
    milliSeconds = document.querySelector('#milli-seconds');

    function hideTabContents() {
        tabContents.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('active');
        })
        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active')
        })
    }

    function showTabContents(index) {
        if (index >= 0 && index < tabContents.length) {
            tabContents[index].style.display = 'flex';
            tabContents[index].classList.add('active');
            tabs[index].classList.add('tabheader__item_active');
        }
    }

    hideTabContents()
    showTabContents(0)

    tabParent.addEventListener('click', (event) => {
        const target = event.target

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, index) => {
                if (target === tab) {
                    hideTabContents()
                    showTabContents(index)
                }
            })
        }
    })

    const slides = [
        './img/gallery1.jpeg',
        './img/gallery2.jpeg',
        './img/gallery3.jpeg',
        './img/gallery4.jpeg',
        './img/gallery5.jpeg'
    ];

    let currentSlide = 0;

    const sliderPrev = document.querySelector('.offer__slider-prev');
    const sliderNext = document.querySelector('.offer__slider-next');
    const slideImg = document.querySelector('.offer__slide img');
    const currentCounter = document.getElementById('current');
    const totalCounter = document.getElementById('total');

    totalCounter.textContent = String(slides.length).padStart(2, '0');

    function showSlide() {
        slideImg.src = slides[currentSlide];
        currentCounter.textContent = String(currentSlide + 1).padStart(2, '0');
    }

    sliderPrev.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide();
    });

    sliderNext.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide();
    });

    showSlide();

    // setInterval(() => {
    //     const now = new Date()
    //     date.innerText = String(now.getDate()).padStart(2, 0)
    //     hours.innerText = String(now.getHours()).padStart(2, 0)
    //     minutes.innerText = String(now.getMinutes()).padStart(2, 0)
    //     seconds.innerText = String(now.getSeconds()).padStart(2, 0)
    //     milliSeconds.innerText = String(now.getMilliseconds()).padStart(3, 0)
    // }, 10)


    const endDate = new Date('2026-02-14T00:00:00').getTime();

    setInterval(() => {
        const now = new Date().getTime();
        let diff = endDate - now;
        
        if(diff <= 0) {
            diff = 0;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);
        const ms = Math.floor(diff % 1000);

        date.innerText = String(d).padStart(2, 0);
        hours.innerText = String(h).padStart(2, 0);
        minutes.innerText = String(m).padStart(2, 0);
        seconds.innerText = String(s).padStart(2, 0);
        milliSeconds.innerText = String(ms).padStart(3, 0);
    }, 1)



    
})