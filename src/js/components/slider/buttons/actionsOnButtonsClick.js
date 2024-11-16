import { slider } from "./actionsOnLeftBtnClick"
import {
	isAnimateFinished,
	setIsAnimateValue
} from "../animation/isAnimateFinished"
import { getCountOfSlides } from "../getCountOfSlides"
import { actionsOnLeftBtnClick } from "./actionsOnLeftBtnClick"
import { actionsOnRightBtnClick } from "./actionsOnRightBtnClick"

export const actionsOnButtonsClick = (btnDirection) => {
	let countSlides = getCountOfSlides()
	if (isAnimateFinished) return
	setIsAnimateValue(true)
	const sliderChildrenArr = Array.from(slider.children)

	let savedSlides = []
	btnDirection === "left"
		? actionsOnLeftBtnClick(sliderChildrenArr, countSlides, savedSlides)
		: actionsOnRightBtnClick(sliderChildrenArr, countSlides, savedSlides)
}
