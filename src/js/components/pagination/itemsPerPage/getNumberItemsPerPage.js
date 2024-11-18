export const getNumberItemsPerPage = () => {
	const windowWidth = window.innerWidth
	if (windowWidth >= 1280) {
		return 8
	} else if (windowWidth >= 768) {
		return 6
	} else if (windowWidth >= 0) {
		return 3
	}
}
