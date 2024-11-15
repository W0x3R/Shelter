import { closeBurger, toggleBurger } from "./setClassesClickBurger"

export const actionsBurgerClick = (e) => {
	if (e.target.closest(".burger")) {
		toggleBurger()
	}
	if (e.target.closest(".nav__item")) {
		closeBurger()
	}
}
