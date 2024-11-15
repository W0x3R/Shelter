const generatePopUp = (
	name,
	type,
	breed,
	description,
	age,
	inoculations,
	diseases,
	parasites
) => {
	return `
		<picture class="popup__picture">
		<source
			srcset="./assets/images/popup/${name}.webp"
			type="image/webp">
		<source
			srcset="./assets/images/popup/${name}.avif"
			type="image/avif">
		<img class="popup__picture-image" src="./assets/images/popup/${name}.png", alt="${name}">
		</picture>
		<div class="popup__content">
			<h4 class="popup__title popup__text">${name}</h4>
			<h5 class="popup__breed popup__text">${type} - ${breed}</h5>
			<p class="popup__description popup__text">${description}</p>
			<ul class="popup__list">
				<li class="popup__item">
					Age:
					<span class="popup__span">${age}</span>
				</li>
				<li class="popup__item">
					Inoculations:
					<span class="popup__span">${inoculations}</span>
				</li>
				<li class="popup__item">
					Diseases:
					<span class="popup__span">${diseases}</span>
				</li>
				<li class="popup__item">
					Parasites:
					<span class="popup__span">${parasites}</span>
				</li>
			</ul>
			<button class="popup__button"></button>
		</div>`
}

export default generatePopUp
