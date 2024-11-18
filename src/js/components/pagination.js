import { itemsPerPage } from "./pagination/itemsPerPage/setValueItemsPerPageOnPageLoad"
import paginationValues from "./paginationValues"
import { loadItems } from "./pagination/markup/loadItems"
import { setButtonsDisabled } from "./pagination/buttonsActions/setButtonsDisabled"
import { setButtonsEnabled } from "./pagination/buttonsActions/setButtonsEnabled"

const leftStart = document.querySelector(".left-start")
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const rightEnd = document.querySelector(".right-end")
let currentCount = document.querySelector(".pets__buttons-item_count")
export let startPage = 1
let maxPage

const clickLeftStartButton = () => {
	startPage = 1
	currentCount.textContent = startPage

	setButtonsDisabled(leftStart, left)
	setButtonsEnabled(right, rightEnd)
	loadItems()
}

const clickLeftButton = () => {
	--startPage
	currentCount.textContent = startPage

	setButtonsEnabled(right, rightEnd)

	if (startPage === 1) {
		setButtonsDisabled(leftStart, left)
	}
	loadItems()
}

const clickRightButton = () => {
	maxPage = Math.ceil(paginationValues.length / itemsPerPage)
	startPage++
	currentCount.textContent = startPage

	setButtonsEnabled(leftStart, left)

	if (startPage === maxPage) {
		setButtonsDisabled(right, rightEnd)
	}
	loadItems()
}

const clickRightEndButton = () => {
	maxPage = Math.ceil(paginationValues.length / itemsPerPage)
	startPage = maxPage
	currentCount.textContent = startPage

	setButtonsDisabled(right, rightEnd)
	setButtonsEnabled(leftStart, left)
	loadItems()
}

leftStart.addEventListener("click", clickLeftStartButton)
left.addEventListener("click", clickLeftButton)
right.addEventListener("click", clickRightButton)
rightEnd.addEventListener("click", clickRightEndButton)

window.addEventListener("resize", () => loadItems)
