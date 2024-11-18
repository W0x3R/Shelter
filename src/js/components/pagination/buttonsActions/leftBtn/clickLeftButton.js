import {
	decrementCurrentPageValue,
	getCurrentPageValue
} from "../../itemsPerPage/currentPageValue"
import { loadItems } from "../../markup/loadItems"
import { setCurrentPageText } from "../../markup/setCurrentPageText"
import { left, leftStart, right, rightEnd } from "./clickLeftStartButton"
import { setButtonsDisabled } from "../setButtonsDisabled"
import { setButtonsEnabled } from "../setButtonsEnabled"

export const clickLeftButton = () => {
	decrementCurrentPageValue()
	setCurrentPageText(getCurrentPageValue())
	setButtonsEnabled(right, rightEnd)

	if (getCurrentPageValue() === 1) {
		setButtonsDisabled(leftStart, left)
	}
	loadItems()
}
