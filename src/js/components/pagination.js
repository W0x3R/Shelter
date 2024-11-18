import { itemsPerPage } from "./pagination/itemsPerPage/setValueItemsPerPageOnPageLoad"
import paginationValues from "./paginationValues"
import { loadItems } from "./pagination/markup/loadItems"
import { setButtonsDisabled } from "./pagination/buttonsActions/setButtonsDisabled"
import { setButtonsEnabled } from "./pagination/buttonsActions/setButtonsEnabled"
import { setCurrentPageValue } from "./pagination/itemsPerPage/currentPageValue"
import { setCurrentPageText } from "./pagination/markup/setCurrentPageText"
import {
	clickLeftStartButton,
	left,
	leftStart,
	right,
	rightEnd
} from "./pagination/buttonsActions/clickLeftStartButton"
import { clickLeftButton } from "./pagination/buttonsActions/clickLeftButton"
import { getMaxPageValue, setMaxPageValue } from "./pagination/maxPage"
import { clickRightButton } from "./pagination/buttonsActions/clickRightButton"

const clickRightEndButton = () => {
	setMaxPageValue(Math.ceil(paginationValues.length / itemsPerPage))
	setCurrentPageValue(getMaxPageValue())
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
