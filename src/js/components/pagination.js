import { itemsPerPage } from "./pagination/itemsPerPage/setValueItemsPerPageOnPageLoad"
import paginationValues from "./paginationValues"
import { loadItems } from "./pagination/markup/loadItems"
import { setButtonsDisabled } from "./pagination/buttonsActions/setButtonsDisabled"
import { setButtonsEnabled } from "./pagination/buttonsActions/setButtonsEnabled"
import {
	decrementCurrentPageValue,
	getCurrentPageValue,
	incrementCurrentPageValue,
	setCurrentPageValue
} from "./pagination/itemsPerPage/currentPageValue"

const leftStart = document.querySelector(".left-start")
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const rightEnd = document.querySelector(".right-end")
let currentCount = document.querySelector(".pets__buttons-item_count")
let maxPage

const clickLeftStartButton = () => {
	setCurrentPageValue(1)
	currentCount.textContent = getCurrentPageValue()

	setButtonsDisabled(leftStart, left)
	setButtonsEnabled(right, rightEnd)
	loadItems()
}

const clickLeftButton = () => {
	decrementCurrentPageValue()
	currentCount.textContent = getCurrentPageValue()

	setButtonsEnabled(right, rightEnd)

	if (getCurrentPageValue() === 1) {
		setButtonsDisabled(leftStart, left)
	}
	loadItems()
}

const clickRightButton = () => {
	maxPage = Math.ceil(paginationValues.length / itemsPerPage)
	incrementCurrentPageValue()
	currentCount.textContent = getCurrentPageValue()

	setButtonsEnabled(leftStart, left)

	if (getCurrentPageValue() === maxPage) {
		setButtonsDisabled(right, rightEnd)
	}
	loadItems()
}

const clickRightEndButton = () => {
	maxPage = Math.ceil(paginationValues.length / itemsPerPage)
	setCurrentPageValue(maxPage)
	currentCount.textContent = getCurrentPageValue()

	setButtonsDisabled(right, rightEnd)
	setButtonsEnabled(leftStart, left)
	loadItems()
}

leftStart.addEventListener("click", clickLeftStartButton)
left.addEventListener("click", clickLeftButton)
right.addEventListener("click", clickRightButton)
rightEnd.addEventListener("click", clickRightEndButton)

window.addEventListener("resize", () => loadItems)
