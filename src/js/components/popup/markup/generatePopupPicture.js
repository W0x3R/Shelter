export const generatePopupPicture = (name) => {
	const BASE_SRC = `./assets/images/popup/${name}`
	return `
		<picture class="popup__picture">
		<source
			srcset="${BASE_SRC}.webp"
			type="image/webp">
		<source
			srcset="${BASE_SRC}.avif"
			type="image/avif">
		<img class="popup__picture-image" src="${BASE_SRC}.png" alt="${name}" width="500px" height="500px">
		</picture>`
}
