import { setClassesStatePopup } from "./popup"

const checkClickOutPopUp = (e) => {
	if (e.target.classList.contains("popup_shadow-on")) {
		setClassesStatePopup("remove")
	}
}

document.body.addEventListener("click", function (e) {
	checkClickOutPopUp(e)
})
