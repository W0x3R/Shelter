import { slider } from "./actionsOnLeftBtnClick"
import { controlAnimation } from "../animation/controlAnimation"
import { setIsAnimateValue } from "../animation/isAnimateFinished"

export const actionsOnRightBtnClick = (
	sliderChildrenArr,
	countSlides,
	savedSlides
) => {
	let elementsForAnimation = [
		...sliderChildrenArr.slice(0, countSlides),
		...sliderChildrenArr.slice(-countSlides)
	]

	for (
		let i = sliderChildrenArr.length - 1;
		i >= sliderChildrenArr.length - countSlides;
		i--
	) {
		savedSlides.push(sliderChildrenArr[i])
	}

	savedSlides.forEach((slide) => slider.prepend(slide))

	controlAnimation(elementsForAnimation, "add", "moveRightAnimation")

	setTimeout(() => {
		controlAnimation(elementsForAnimation, "remove", "moveRightAnimation")
		setIsAnimateValue(false)
	}, 610)
}
