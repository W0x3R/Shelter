import "./our-pets.scss"
import * as pagination from "./js/components/pagination"
import { checkClickOutBurger } from "./js/components/burger/checkClickOutBurger"
import { callClickEvents } from "./js/components/eventHandlers/callClickEvents"
import { actionsOnMouseLeaveAndEnter } from "./js/components/popup/actionsOnMouseLeaveAndEnter"
import { popup } from "./js/components/popup/actionsOnSlideClick"
import { checkClickOutPopUp } from "./js/components/popup/checkClickOutPopup"
import { clickEventsOurPetsPage } from "./js/components/eventHandlers/clickEvents"
import { loadItems } from "./js/components/pagination/markup/loadItems"

loadItems()

window.addEventListener("click", (e) => {
	callClickEvents(e, clickEventsOurPetsPage)
	checkClickOutBurger(e)
	checkClickOutPopUp(e)
})

popup.addEventListener("mouseleave", () => actionsOnMouseLeaveAndEnter("add"))

popup.addEventListener("mouseenter", () =>
	actionsOnMouseLeaveAndEnter("remove")
)
