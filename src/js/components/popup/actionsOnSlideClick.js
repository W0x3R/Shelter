import { getClickedSlideInfo } from "./getClickedSlideInfo"
import { setStylesOnTogglePopup } from "./setStylesOnTogglePopup"

export const popup = document.querySelector(".popup")

export const actionsOnSlideClick = (e) => {
	const target = e.target

	if (!target.classList.contains("pets__images")) {
		popup.innerHTML = getClickedSlideInfo(target)
		setStylesOnTogglePopup("add")
	}
}
