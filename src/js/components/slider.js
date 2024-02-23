import paginationValues from "./paginationValues";
const slider = document.querySelector('.pets__images');
const buttonLeft = document.querySelector('.left')
const buttonRight = document.querySelector('.right')
let isAnimateFinished = false;

const createFigure = (i) => {
	const figure = document.createElement('figure')
	figure.classList.add('pets__images-figure')
	figure.setAttribute('data-pet', paginationValues[i].name)
	figure.innerHTML =
		`<picture class="pets__images-picture">
	<source
		srcset="./images/${paginationValues[i]['imgName']}@1x.webp 1x,./images/${paginationValues[i]['imgName']}@2x.webp 2x, ./images/${paginationValues[i]['imgName']}@3x.webp 3x"
		type="image/webp">
	<source
		srcset="./images/${paginationValues[i]['imgName']}@1x.avif 1x,./images/${paginationValues[i]['imgName']}@2x.avif 2x, ./images/${paginationValues[i]['imgName']}@3x.avif 3x"
		type="image/avif">
	<img class="pets__images-image" src="./images/${paginationValues[i]['imgName']}@1x.png" srcset="./images/${paginationValues[i]['imgName']}@2x.png 2x, 
	./images/${paginationValues[i]['imgName']}@3x.png 3x" alt="${paginationValues[i].alt
		}">
</picture>
<figcaption>
	<p class="pets__images-text  subtitle-animal">${paginationValues[i].name
		}</p >
	<button class="pets__images-button">Learn more</button>
</figcaption > `
	slider.append(figure)
}

const loadItems = () => {
	slider.innerHTML = '';

	for (let i = 0; i < paginationValues.length; i++) {
		createFigure(i)
	}
}

loadItems()

buttonLeft.addEventListener('click', moveLeft)
buttonRight.addEventListener('click', moveRight)

const controlAnimation = (arr, action, animationClass) => arr.map(e => e.classList[action](animationClass))


const getCountOfSlides = () => {
	if (window.innerWidth >= 1280) {
		return 3
	} else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
		return 2
	} else if (window.innerWidth < 768 && window.innerWidth >= 320) {
		return 1
	}
}

const moveLeft = () => {
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

const moveRight = () => {
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