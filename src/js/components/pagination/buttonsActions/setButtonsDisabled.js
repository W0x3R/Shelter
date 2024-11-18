export const setButtonsDisabled = (...buttons) => {
	buttons.forEach((button) => {
		button.classList.remove("pets__buttons-item_enabled")
		button.classList.add("pets__buttons-item_disabled")
		button.setAttribute("disabled", true)
	})
}
