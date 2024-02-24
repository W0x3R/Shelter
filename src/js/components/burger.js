const header = document.querySelector('.header')
const navList = document.querySelector('.nav__list')
const burger = document.querySelector('.burger');

const setClassesStateBurger = (state) => {
	burger.classList[state]('burger_active')
	navList.classList[state]('nav__list_active')
	document.body.classList[state]('body_fixed')
}

const openBurger = () => setClassesStateBurger('toggle')
const closeBurger = () => setClassesStateBurger('remove')

header.addEventListener('click', function (e) {
	if (e.target.classList.contains('burger') || e.target.classList.contains('burger__line')) {
		openBurger()
	}
	if (e.target.tagName === 'LI' || e.target.tagName === 'A') {
		closeBurger()
	}
})

export default setClassesStateBurger
