import { generatePopUp } from "./markup/generatePopup"
import { petInfoObject } from "./convertPetInfoToObject"

export const getClickedSlideInfo = (target) => {
	const closestFigure = target.closest("figure")
	const figureDataValue = closestFigure.dataset.pet
	const findClickedItem = petInfoObject[figureDataValue]
	const popUpInner = generatePopUp(findClickedItem)
	return popUpInner
}
