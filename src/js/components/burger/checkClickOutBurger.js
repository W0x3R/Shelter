import { burger, closeBurger } from "./setClassesClickBurger"

export const checkClickOutBurger = (e) => {
	if (
		burger.classList.contains("burger_active") &&
		!e.target.closest(".nav__list") &&
		!e.target.closest(".burger")
	) {
		closeBurger()
	}
}
