import paginationValues from "../../paginationValues"
import {
	getCurrentPageValue,
	setCurrentPageValue
} from "../itemsPerPage/currentPageValue"
import { itemsPerPage } from "../itemsPerPage/setValueItemsPerPageOnPageLoad"
import { loadItems } from "../markup/loadItems"
import { setCurrentPageText } from "../markup/setCurrentPageText"
import { getMaxPageValue, setMaxPageValue } from "../maxPage"
import { left, leftStart, right, rightEnd } from "./clickLeftStartButton"
import { setButtonsDisabled } from "./setButtonsDisabled"
import { setButtonsEnabled } from "./setButtonsEnabled"

export const clickRightEndButton = () => {
	setMaxPageValue(Math.ceil(paginationValues.length / itemsPerPage))
	setCurrentPageValue(getMaxPageValue())
	setCurrentPageText(getCurrentPageValue())

	setButtonsDisabled(right, rightEnd)
	setButtonsEnabled(leftStart, left)
	loadItems()
}
