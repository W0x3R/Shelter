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

function getCountOfSlides() {
	if (window.innerWidth >= 1280) {
		return 3
	} else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
		return 2
	} else if (window.innerWidth < 768 && window.innerWidth >= 320) {
		return 1
	}
}

function moveLeft() {
	let countSlides = getCountOfSlides()
	if (isAnimateFinished) return
	isAnimateFinished = true

	const sliderChildren = slider.children
	const sliderChildrenArr = Array.from(sliderChildren)

	let slides = [];
	for (let i = 0; i < countSlides; i++) {
		slides.push(sliderChildren[i])
	}
	const savedSlides = slides.slice(0)

	controlAnimation(sliderChildrenArr, 'add', 'pets__arrow_moveLeftAnimation')

	setTimeout(() => {
		sliderChildrenArr.filter(e => slides.includes(e) ? e.remove() : '')

		controlAnimation(sliderChildrenArr, 'remove', 'pets__arrow_moveLeftAnimation')
	}, 610)

	setTimeout(() => {
		for (let i = 0; i < countSlides; i++) {
			slider.appendChild(savedSlides[i])
		}
		isAnimateFinished = false
	}, 710);
}


function moveRight() {
	let countSlides = getCountOfSlides()
	if (isAnimateFinished) return
	isAnimateFinished = true;

	const sliderChildren = slider.children
	let sliderChildrenArr = Array.from(sliderChildren)

	let slides = [];
	for (let i = sliderChildrenArr.length - 1; i >= sliderChildrenArr.length - countSlides; i--) {
		slides.push(sliderChildren[i])
	}

	const savedSlides = slides.slice(0)

	for (let i = 0; i < countSlides; i++) {
		slider.prepend(savedSlides[i])
	}

	sliderChildrenArr = Array.from(sliderChildren)
	controlAnimation(sliderChildrenArr, 'add', 'pets__arrow_moveRightAnimation')

	setTimeout(() => {
		controlAnimation(sliderChildrenArr, 'remove', 'pets__arrow_moveRightAnimation')
		isAnimateFinished = false;
	}, 610);
}