import setClassesStateBurger from "./burger"
import { setClassesStatePopup } from "./popup"

const body = document.body

function checkClickOutBurger(e) {
	if (!e.target.closest('.nav__list') && !e.target.closest('.burger')) {
		setClassesStateBurger('remove')
	};
}

function checkClickOutPopUp(e) {
	if (e.target.classList.contains('popup_shadow-on')) {
		setClassesStatePopup('remove')
	}
}

body.addEventListener('click', function (e) {
	checkClickOutBurger(e)
	checkClickOutPopUp(e)
})

