import {
	getCurrentPageValue,
	incrementCurrentPageValue
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

export const clickRightButton = () => {
	setMaxPageValue()
	incrementCurrentPageValue()
	setCurrentPageText(getCurrentPageValue())
	setButtonsEnabled(leftStart, left)

	if (getCurrentPageValue() === getMaxPageValue()) {
		setButtonsDisabled(right, rightEnd)
	}
	loadItems()
}
