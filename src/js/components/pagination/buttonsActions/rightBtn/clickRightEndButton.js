import {
	getCurrentPageValue,
	setCurrentPageValue
} from "../../itemsPerPage/currentPageValue"
import { loadItems } from "../../markup/loadItems"
import { setCurrentPageText } from "../../markup/setCurrentPageText"
import { getMaxPageValue, setMaxPageValue } from "../../maxPage"
import {
	left,
	leftStart,
	right,
	rightEnd
} from "../leftBtn/clickLeftStartButton"
import { setButtonsDisabled } from "../setButtonsDisabled"
import { setButtonsEnabled } from "../setButtonsEnabled"

export const clickRightEndButton = () => {
	setMaxPageValue()
	setCurrentPageValue(getMaxPageValue())
	setCurrentPageText(getCurrentPageValue())
	setButtonsDisabled(right, rightEnd)
	setButtonsEnabled(leftStart, left)
	loadItems()
}
