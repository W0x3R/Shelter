export const generatePopupContent = (
	name,
	type,
	breed,
	description,
	listItem
) => `		
<div class="popup__content">
			<h4 class="popup__title popup__text">${name}</h4>
			<h5 class="popup__breed popup__text">${type} - ${breed}</h5>
			<p class="popup__description popup__text">${description}</p>
			<ul class="popup__list">
				${listItem}
			</ul>
			<button class="popup__button"></button>
		</div>`
