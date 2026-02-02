const colorBtn = document.querySelector('#colorBtn');
const dateBtn = document.querySelector('#dateBtn');
const dateResult = document.querySelector('#dateResult');
const textBtn = document.querySelector('#textBtn');
const removeBtn = document.querySelector('#removeBtn');
const userInput = document.querySelector('#userInput');
const checkBtn = document.querySelector('#checkBtn');

colorBtn.onclick = () => {
    colorBtn.style.backgroundColor = 'gold';
    colorBtn.style.color = 'black';
};

dateBtn.onclick = () => {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    dateResult.textContent = "5 kundan keyin: " + date.toLocaleDateString();
};

textBtn.onclick = () => {
    textBtn.textContent = "Yangi matn";
};

removeBtn.onclick = () => {
    removeBtn.remove();
};

checkBtn.onclick = () => {
    if (userInput.value.trim() === "") {
        alert("bir narsa yoz");
    } else {
        alert('Rahmat');
    }
};