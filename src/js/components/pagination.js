import { loadItems } from "./pagination/markup/loadItems"

import {
	clickLeftStartButton,
	left,
	leftStart,
	right,
	rightEnd
} from "./pagination/buttonsActions/clickLeftStartButton"
import { clickLeftButton } from "./pagination/buttonsActions/clickLeftButton"
import { clickRightButton } from "./pagination/buttonsActions/clickRightButton"
import { clickRightEndButton } from "./pagination/buttonsActions/clickRightEndButton"

leftStart.addEventListener("click", clickLeftStartButton)
left.addEventListener("click", clickLeftButton)
right.addEventListener("click", clickRightButton)
rightEnd.addEventListener("click", clickRightEndButton)

window.addEventListener("resize", () => loadItems)
