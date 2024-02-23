import setClassesStateBurger from "./burger"
import { setClassesStatePopup } from "./popup"

const checkClickOutBurger = (e) => {
	if (!e.target.closest('.nav__list') && !e.target.closest('.burger')) {
		setClassesStateBurger('remove')
	}
}

const checkClickOutPopUp = (e) => {
	if (e.target.classList.contains('popup_shadow-on')) {
		setClassesStatePopup('remove')
	}
}

document.body.addEventListener('click', function (e) {
	checkClickOutBurger(e)
	checkClickOutPopUp(e)
})

