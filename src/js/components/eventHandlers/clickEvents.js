import { actionsBurgerClick } from "../burger/actionsBurgerClick"
import { clickLeftButton } from "../pagination/buttonsActions/leftBtn/clickLeftButton"
import { clickLeftStartButton } from "../pagination/buttonsActions/leftBtn/clickLeftStartButton"
import { clickRightButton } from "../pagination/buttonsActions/rightBtn/clickRightButton"
import { clickRightEndButton } from "../pagination/buttonsActions/rightBtn/clickRightEndButton"
import { actionsOnSlideClick } from "../popup/actionsOnSlideClick"
import { setStylesOnTogglePopup } from "../popup/setStylesOnTogglePopup"
import { actionsOnButtonsClick } from "../slider/buttons/actionsOnButtonsClick"

export const clickEventsMainPage = {
	".header": (e) => actionsBurgerClick(e),
	".left": () => actionsOnButtonsClick("left"),
	".right": () => actionsOnButtonsClick("right"),
	".pets__images": (e) => actionsOnSlideClick(e),
	".popup__button": () => setStylesOnTogglePopup("remove")
}

export const clickEventsOurPetsPage = {
	".header": (e) => actionsBurgerClick(e),
	".pets__images": (e) => actionsOnSlideClick(e),
	".left-start": clickLeftStartButton,
	".left": clickLeftButton,
	".right": clickRightButton,
	".right-end": clickRightEndButton,
	".popup__button": () => setStylesOnTogglePopup("remove")
}
