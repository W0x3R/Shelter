import { actionsBurgerClick } from "../burger/actionsBurgerClick"
import { actionsOnSlideClick } from "../popup/actionsOnSlideClick"
import { setStylesOnTogglePopup } from "../popup/setStylesOnTogglePopup"
import { actionsOnButtonsClick } from "../slider/buttons/actionsOnButtonsClick"

export const clickEvents = {
	".header": (e) => actionsBurgerClick(e),
	".left": () => actionsOnButtonsClick("left"),
	".right": () => actionsOnButtonsClick("right"),
	".pets__images": (e) => actionsOnSlideClick(e),
	".popup__button": () => setStylesOnTogglePopup("remove")
}
