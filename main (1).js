const open = document.querySelector('.fa-bars')
const close = document.querySelector('.fa-xmark')
const mobileMenu = document.querySelector('.mobile-nav')

open.addEventListener('click', () => {
	mobileMenu.style.opacity = '1'
	open.style.opacity = '0'
	open.classList.add('pe')
})
close.addEventListener('click', () => {
	mobileMenu.style.opacity = '0'
	open.style.opacity = '1'
	open.classList.remove('pe')
	// mobileMenu.style.display = 'none'
})
