export const getCountOfSlides = () => {
	if (window.innerWidth >= 1280) {
		return 3
	} else if (window.innerWidth >= 768) {
		return 2
	} else if (window.innerWidth >= 0) {
		return 1
	}
}
