import "./style.scss"

import { callClickEvents } from "./js/components/eventHandlers/callClickEvents"
import { checkClickOutBurger } from "./js/components/burger/checkClickOutBurger"
import { loadItems } from "./js/components/slider/markup/loadItems"
import { popup } from "./js/components/popup/actionsOnSlideClick"
import { actionsOnMouseLeaveAndEnter } from "./js/components/popup/actionsOnMouseLeaveAndEnter"
import { checkClickOutPopUp } from "./js/components/popup/checkClickOutPopup"
import { clickEventsMainPage } from "./js/components/eventHandlers/clickEvents"

loadItems()

window.addEventListener("click", (e) => {
	callClickEvents(e, clickEventsMainPage)
	checkClickOutBurger(e)
	checkClickOutPopUp(e)
})

popup.addEventListener("mouseleave", () => actionsOnMouseLeaveAndEnter("add"))

popup.addEventListener("mouseenter", () =>
	actionsOnMouseLeaveAndEnter("remove")
)
