const btnEl = document.querySelector('#generate')
const minEl = document.querySelector('#min')
const maxEl = document.querySelector('#max')
const placeholderEl = document.querySelector('#placeholder')

btnEl.addEventListener('click', generate)

function generate() {
    const min = Number(minEl.value)
    const max = Number(maxEl.value)

    placeholderEl.textContent = getRandomNumber(min, max)
}

const getRandomNumber = (min, max) => {
    if (min = 0, max = 0) {
        alert("Min yoki max ga son kiritilmagan")
    } else {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    
}

