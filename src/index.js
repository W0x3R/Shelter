import "./style.scss"

import * as popup from "./js/components/popup"
import * as slider from "./js/components/slider"
import { clickEvents } from "./js/components/eventHandlers/clickEvents"
import { callClickEvents } from "./js/components/eventHandlers/callClickEvents"
import { checkClickOutBurger } from "./js/components/burger/checkClickOutBurger"

window.addEventListener("click", (e) => {
	callClickEvents(e, clickEvents)
	checkClickOutBurger(e)
})
