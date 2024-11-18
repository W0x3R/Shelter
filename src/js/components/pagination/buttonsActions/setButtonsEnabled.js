export const setButtonsEnabled = (...buttons) => {
	buttons.forEach((button) => {
		button.removeAttribute("disabled")
		button.classList.remove("pets__buttons-item_disabled")
		button.classList.add("pets__buttons-item_enabled")
	})
}
