import {
	left,
	leftStart,
	right,
	rightEnd
} from "./buttonsActions/leftBtn/clickLeftStartButton"
import { setButtonsDisabled } from "./buttonsActions/setButtonsDisabled"
import { setButtonsEnabled } from "./buttonsActions/setButtonsEnabled"
import {
	getCurrentPageValue,
	setCurrentPageValue
} from "./itemsPerPage/currentPageValue"
import { loadItems } from "./markup/loadItems"
import { setCurrentPageText } from "./markup/setCurrentPageText"
import { getMaxPageValue, setMaxPageValue } from "./maxPage"

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
