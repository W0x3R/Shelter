import "./style.scss"

import * as popup from "./js/components/popup"
import { clickEvents } from "./js/components/eventHandlers/clickEvents"
import { callClickEvents } from "./js/components/eventHandlers/callClickEvents"
import { checkClickOutBurger } from "./js/components/burger/checkClickOutBurger"
import { loadItems } from "./js/components/slider/markup/loadItems"

loadItems()

window.addEventListener("click", (e) => {
	callClickEvents(e, clickEvents)
	checkClickOutBurger(e)
	checkClickOutPopUp(e)
})
