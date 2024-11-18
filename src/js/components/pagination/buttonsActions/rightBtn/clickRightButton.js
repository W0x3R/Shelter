import paginationValues from "../../../paginationValues"
import {
	getCurrentPageValue,
	incrementCurrentPageValue
} from "../../itemsPerPage/currentPageValue"
import { itemsPerPage } from "../../itemsPerPage/setValueItemsPerPageOnPageLoad"
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
	setMaxPageValue(Math.ceil(paginationValues.length / itemsPerPage))
	incrementCurrentPageValue()
	setCurrentPageText(getCurrentPageValue())

	setButtonsEnabled(leftStart, left)

	if (getCurrentPageValue() === getMaxPageValue()) {
		setButtonsDisabled(right, rightEnd)
	}
	loadItems()
}
