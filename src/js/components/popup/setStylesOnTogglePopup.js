import { popup } from "./actionsOnSlideClick"

const popupShadow = document.querySelector(".popup_shadow")

export const setStylesOnTogglePopup = (state) => {
	document.body.classList[state]("body_popup_fixed")
	popup.classList[state]("popup_active")
	popupShadow.classList[state]("popup_shadow-on")
}
