import "./our-pets.scss"

import * as popup from "./js/components/popup"
import * as checkClickOut from "./js/components/checkClickOut"
import * as pagination from "./js/components/pagination"
import { checkClickOutBurger } from "./js/components/burger/checkClickOutBurger"
import { callClickEvents } from "./js/components/eventHandlers/callClickEvents"
import { clickEvents } from "./js/components/eventHandlers/clickEvents"

window.addEventListener("click", (e) => {
	callClickEvents(e, clickEvents)
	checkClickOutBurger(e)
})
