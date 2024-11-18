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
import { setCurrentPageText } from "./pagination/markup/setCurrentPageText"
import {
	clickLeftStartButton,
	left,
	leftStart,
	right,
	rightEnd
} from "./pagination/buttonsActions/clickLeftStartButton"

let maxPage

const clickLeftButton = () => {
	decrementCurrentPageValue()
	setCurrentPageText()

	setButtonsEnabled(right, rightEnd)

	if (getCurrentPageValue() === 1) {
		setButtonsDisabled(leftStart, left)
	}
	loadItems()
}

const clickRightButton = () => {
	maxPage = Math.ceil(paginationValues.length / itemsPerPage)
	incrementCurrentPageValue()
	setCurrentPageText()

	setButtonsEnabled(leftStart, left)

	if (getCurrentPageValue() === maxPage) {
		setButtonsDisabled(right, rightEnd)
	}
	loadItems()
}

const clickRightEndButton = () => {
	maxPage = Math.ceil(paginationValues.length / itemsPerPage)
	setCurrentPageValue(maxPage)
	setCurrentPageText()

	setButtonsDisabled(right, rightEnd)
	setButtonsEnabled(leftStart, left)
	loadItems()
}

leftStart.addEventListener("click", clickLeftStartButton)
left.addEventListener("click", clickLeftButton)
right.addEventListener("click", clickRightButton)
rightEnd.addEventListener("click", clickRightEndButton)

window.addEventListener("resize", () => loadItems)
