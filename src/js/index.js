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

const slider = document.querySelector('.pets__images');

const buttonLeft = document.querySelector('.left')
const buttonRight = document.querySelector('.right')

let isAnimateFinished = false;

buttonLeft.addEventListener('click', moveLeft)
buttonRight.addEventListener('click', moveRight)

function controlAnimation(arr, action, animationClass) {
	arr.map(e => {
		e.classList[action](animationClass)
	});
}

function moveLeft() {
	if (isAnimateFinished) return
	isAnimateFinished = true

	const sliderChildren = slider.children
	const sliderChildrenArr = Array.from(sliderChildren)
	const firstSlide = sliderChildren[0]
	const savedSlide = firstSlide.cloneNode(true)

	controlAnimation(sliderChildrenArr, 'add', 'pets__arrow_moveLeftAnimation')

	setTimeout(() => {
		slider.removeChild(firstSlide)
		controlAnimation(sliderChildrenArr, 'remove', 'pets__arrow_moveLeftAnimation')
	}, 510)

	setTimeout(() => {
		slider.appendChild(savedSlide)
		isAnimateFinished = false
	}, 610);

}

function moveRight() {
	if (isAnimateFinished) return
	isAnimateFinished = true;

	const sliderChildren = slider.children
	let sliderChildrenArr = Array.from(sliderChildren)

	const lastSlide = sliderChildren[sliderChildren.length - 1]
	const savedSlide = lastSlide.cloneNode(true)


	slider.prepend(savedSlide)
	slider.removeChild(lastSlide)
	sliderChildrenArr = Array.from(sliderChildren)
	controlAnimation(sliderChildrenArr, 'add', 'pets__arrow_moveRightAnimation')

	setTimeout(() => {
		controlAnimation(sliderChildrenArr, 'remove', 'pets__arrow_moveRightAnimation')
		isAnimateFinished = false;
	}, 610);
}

