const header = document.querySelector('.header')
const navList = document.querySelector('.nav__list')
const burger = document.querySelector('.burger');

function setClassesStateBurger(state) {
	burger.classList[state]('burger_active')
	navList.classList[state]('nav__list_active')
	document.body.classList[state]('body_fixed')
}

function openBurger(e) {
	if (e.target.classList.contains('burger') || e.target.classList.contains('burger__line')) {
		setClassesStateBurger('toggle')
	}
}

function closeBurger(e) {
	if (e.target.tagName === 'LI' || e.target.tagName === 'A') {
		setClassesStateBurger('remove')
	}
}

header.addEventListener('click', function (e) {
	openBurger(e)
	closeBurger(e)
})

export default setClassesStateBurger
