const body = document.body
const header = document.querySelector('.header')
const navList = document.querySelector('.nav__list')
const burger = document.querySelector('.burger');

function setClassesState(state) {
	burger.classList[state]('burger_active')
	navList.classList[state]('nav__list_active')
	body.classList[state]('body_fixed')
}

function openBurger(e) {
	if (e.target.classList.contains('burger') || e.target.classList.contains('burger__line')) {
		setClassesState('toggle')
	}
}

function closeBurger(e) {
	if (e.target.tagName === 'LI' || e.target.tagName === 'A') {
		setClassesState('remove')
	}
}

header.addEventListener('click', function (e) {
	openBurger(e)
	closeBurger(e)
})

function checkClickOutBurger(e) {
	if (!e.target.closest('.nav__list') && !e.target.closest('.burger')) {
		setClassesState('remove')
	};
}

body.addEventListener('click', function (e) {
	checkClickOutBurger(e)
})

