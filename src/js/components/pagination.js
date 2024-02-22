import paginationValues from "./paginationValues";

const petsImages = document.querySelector('.pets__images')
let startPage = 1;
const leftStart = document.querySelector('.left-start')
const left = document.querySelector('.left')
const right = document.querySelector('.right');
const rightEnd = document.querySelector('.right-end');
let currentCount = document.querySelector('.pets__buttons-item_count')

function getCountOfSlides() {
	if (window.innerWidth >= 1280) {
		return 8
	} else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
		return 6
	} else if (window.innerWidth < 768 && window.innerWidth >= 320) {
		return 3
	}
}

let itemsPerPage;
let maxPage;

function createFigure(i) {
	const figure = document.createElement('figure')
	figure.classList.add('pets__images-figure')
	figure.setAttribute('data-pet', paginationValues[i].name)
	figure.innerHTML = `<picture class="pets__images-picture">
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
	petsImages.append(figure)
}

function loadItems() {
	itemsPerPage = getCountOfSlides();
	petsImages.innerHTML = '';

	for (let i = (startPage - 1) * itemsPerPage; i < startPage * itemsPerPage; i++) {
		if (!paginationValues[i]) break
		createFigure(i)
	}
}

loadItems()

function setButtonsDisabled(btnOne, btnTwo) {
	btnOne.classList.remove('pets__buttons-item_enabled')
	btnOne.classList.add('pets__buttons-item_disabled')
	btnOne.setAttribute('disabled', true)

	btnTwo.classList.remove('pets__buttons-item_enabled')
	btnTwo.classList.add('pets__buttons-item_disabled')
	btnTwo.setAttribute('disabled', true)
}

function setButtonsEnabled(btnOne, btnTwo) {
	btnOne.removeAttribute('disabled')
	btnOne.classList.remove('pets__buttons-item_disabled')
	btnOne.classList.add('pets__buttons-item_enabled')

	btnTwo.removeAttribute('disabled')
	btnTwo.classList.remove('pets__buttons-item_disabled')
	btnTwo.classList.add('pets__buttons-item_enabled')
}

function clickLeftStartButton() {
	startPage = 1;
	currentCount.textContent = startPage;

	setButtonsDisabled(leftStart, left)
	setButtonsEnabled(right, rightEnd)
	loadItems()
}

function clickLeftButton() {
	--startPage
	currentCount.textContent = startPage;

	setButtonsEnabled(right, rightEnd)

	if (startPage === 1) {
		setButtonsDisabled(leftStart, left)
	}
	loadItems()
}

function clickRightButton() {
	maxPage = Math.ceil(paginationValues.length / itemsPerPage)
	startPage++
	currentCount.textContent = startPage;

	setButtonsEnabled(leftStart, left)

	if (startPage === maxPage) {
		setButtonsDisabled(right, rightEnd)
	}
	loadItems()
}

function clickRightEndButton() {
	maxPage = Math.ceil(paginationValues.length / itemsPerPage)
	startPage = maxPage;
	currentCount.textContent = startPage;

	setButtonsDisabled(right, rightEnd)
	setButtonsEnabled(leftStart, left)
	loadItems()
}

leftStart.addEventListener('click', clickLeftStartButton)
left.addEventListener('click', clickLeftButton)
right.addEventListener('click', clickRightButton)
rightEnd.addEventListener('click', clickRightEndButton)


window.addEventListener('resize', function (e) {
	startPage = 1;
	currentCount.textContent = startPage;
	loadItems()
	setButtonsDisabled(leftStart, left)
	setButtonsEnabled(right, rightEnd)
})