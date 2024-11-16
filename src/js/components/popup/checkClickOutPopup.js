import { setStylesOnTogglePopup } from "./setStylesOnTogglePopup"

export const checkClickOutPopUp = (e) => {
	if (e.target.classList.contains("popup_shadow-on")) {
		setStylesOnTogglePopup("remove")
	}
}
