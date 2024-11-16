export const actionsOnMouseLeaveAndEnter = (action) => {
	const popupBtn = document.querySelector(".popup__button")
	popupBtn.classList[action]("popup__button_hover")
}
