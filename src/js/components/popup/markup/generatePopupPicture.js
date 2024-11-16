export const generatePopupPicture = (name, src = "./assets/images/popup/") => {
	const baseSrc = `${src}${name}`
	return `
		<picture class="popup__picture">
		<source
			srcset="${baseSrc}.webp"
			type="image/webp">
		<source
			srcset="${baseSrc}.avif"
			type="image/avif">
		<img class="popup__picture-image" src="${baseSrc}.png", alt="${name}">
		</picture>`
}
