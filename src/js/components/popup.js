import generatePopUp from "./generatePopup"
import { petInfo } from "./pets-info"

const slider = document.querySelector('.pets__images');

const popup = document.querySelector('.popup')

const petInfoObject = Array.from(petInfo).reduce((acc, e) => {
	acc[e.name] = e
	return acc
}, {})

const popupShadow = document.querySelector('.popup_shadow')

export function setClassesStatePopup(state) {
	document.body.classList[state]('body_popup_fixed')
	popup.classList[state]('popup_active')
	popupShadow.classList[state]('popup_shadow-on')
}

slider.addEventListener('click', function (e) {

	const target = e.target
	if (!target.classList.contains('pets__images')) {
		const closestFigure = target.closest('figure')
		const figureDataValue = closestFigure.dataset.pet
		const findItem = petInfoObject[figureDataValue]
		const popUpInner =
			generatePopUp(findItem.name, findItem.type, findItem.breed, findItem.description, findItem.age, findItem.inoculations, findItem.diseases, findItem.parasites)
		popup.innerHTML = popUpInner
		setClassesStatePopup('add')
		const popupBtn = document.querySelector('.popup__button')
		popupBtn.addEventListener('click', function (e) {
			setClassesStatePopup('remove')
		})
	}

})

