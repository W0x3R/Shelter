import { controlAnimation } from "../animation/controlAnimation"
import { setIsAnimateValue } from "../animation/isAnimateFinished"

export const slider = document.querySelector(".pets__images")

export const actionsOnLeftBtnClick = (
	sliderChildrenArr,
	countSlides,
	savedSlides
) => {
	let elementsForAnimation = sliderChildrenArr.slice(0, countSlides * 2)
	for (let i = 0; i < countSlides; i++) {
		savedSlides.push(sliderChildrenArr[i])
	}
	controlAnimation(elementsForAnimation, "add", "moveLeftAnimation")

	setTimeout(() => {
		savedSlides.forEach((slide) => slider.removeChild(slide))
		controlAnimation(elementsForAnimation, "remove", "moveLeftAnimation")
	}, 610)

	setTimeout(() => {
		savedSlides.forEach((slide) => slider.appendChild(slide))
		setIsAnimateValue(false)
	}, 710)
}
