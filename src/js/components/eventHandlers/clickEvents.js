import { actionsBurgerClick } from "../burger/actionsBurgerClick"
import { actionsOnButtonsClick } from "../slider/buttons/actionsOnButtonsClick"

export const clickEvents = {
	".header": (e) => actionsBurgerClick(e),
	".left": () => actionsOnButtonsClick("left"),
	".right": () => actionsOnButtonsClick("right")
}
