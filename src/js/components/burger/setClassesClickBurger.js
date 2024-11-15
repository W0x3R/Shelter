const navList = document.querySelector(".nav__list")
export const burger = document.querySelector(".burger")

const setClassesClickBurger = (action) => {
	burger.classList[action]("burger_active")
	navList.classList[action]("nav__list_active")
	document.body.classList[action]("body_fixed")
}

export const toggleBurger = () => setClassesClickBurger("toggle")
export const closeBurger = () => setClassesClickBurger("remove")
