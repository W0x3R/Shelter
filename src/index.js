import "./style.scss"

import { clickEvents } from "./js/components/eventHandlers/clickEvents"
import { callClickEvents } from "./js/components/eventHandlers/callClickEvents"
import { checkClickOutBurger } from "./js/components/burger/checkClickOutBurger"
import { loadItems } from "./js/components/slider/markup/loadItems"
import { popup } from "./js/components/popup/actionsOnSlideClick"
import { actionsOnMouseLeaveAndEnter } from "./js/components/popup/actionsOnMouseLeaveAndEnter"
import { checkClickOutPopUp } from "./js/components/popup/checkClickOutPopup"

loadItems()

window.addEventListener("click", (e) => {
	callClickEvents(e, clickEvents)
	checkClickOutBurger(e)
	checkClickOutPopUp(e)
})

popup.addEventListener("mouseleave", () => actionsOnMouseLeaveAndEnter("add"))

popup.addEventListener("mouseenter", () =>
	actionsOnMouseLeaveAndEnter("remove")
)
