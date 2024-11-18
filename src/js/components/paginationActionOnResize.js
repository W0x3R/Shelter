import {
	left,
	leftStart,
	right,
	rightEnd
} from "./pagination/buttonsActions/clickLeftStartButton"
import { setButtonsDisabled } from "./pagination/buttonsActions/setButtonsDisabled"
import { setButtonsEnabled } from "./pagination/buttonsActions/setButtonsEnabled"
import {
	getCurrentPageValue,
	setCurrentPageValue
} from "./pagination/itemsPerPage/currentPageValue"
import { loadItems } from "./pagination/markup/loadItems"
import { setCurrentPageText } from "./pagination/markup/setCurrentPageText"
import { getMaxPageValue, setMaxPageValue } from "./pagination/maxPage"

export const paginationActionOnResize = () => {
	setMaxPageValue()
	let currentPage = Math.min(getCurrentPageValue(), getMaxPageValue())

	setCurrentPageValue(currentPage)
	setCurrentPageText(currentPage)
	if (currentPage === 1) {
		setButtonsDisabled(leftStart, left)
		setButtonsEnabled(right, rightEnd)
	} else if (currentPage === getMaxPageValue()) {
		setButtonsEnabled(leftStart, left)
		setButtonsDisabled(right, rightEnd)
	} else {
		setButtonsEnabled(leftStart, left, right, rightEnd)
	}
	loadItems()
}
