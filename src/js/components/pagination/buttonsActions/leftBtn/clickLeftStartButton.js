import {
	getCurrentPageValue,
	setCurrentPageValue
} from "../../itemsPerPage/currentPageValue"
import { loadItems } from "../../markup/loadItems"
import { setCurrentPageText } from "../../markup/setCurrentPageText"
import { setButtonsDisabled } from "../setButtonsDisabled"
import { setButtonsEnabled } from "../setButtonsEnabled"

export const leftStart = document.querySelector(".left-start")
export const left = document.querySelector(".left")
export const right = document.querySelector(".right")
export const rightEnd = document.querySelector(".right-end")

export const clickLeftStartButton = () => {
	setCurrentPageValue(1)
	setCurrentPageText(getCurrentPageValue())

	setButtonsDisabled(leftStart, left)
	setButtonsEnabled(right, rightEnd)
	loadItems()
}
