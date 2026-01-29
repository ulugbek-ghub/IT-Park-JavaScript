// 2mashq Element ustiga kelsa hovered class qo‘shilsin, chiqsa o‘chsin.
const btns = document.querySelectorAll('button');

btns.forEach(btn => {
	btn.addEventListener('mouseenter', () => btn.classList.add('hovered'));
	btn.addEventListener('mouseleave', () => btn.classList.remove('hovered'));
});

