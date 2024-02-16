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