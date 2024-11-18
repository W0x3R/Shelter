import paginationValues from "../../pagination/paginationValues"
import { slider } from "../buttons/actionsOnLeftBtnClick"
import { createSourceElement } from "./createSourceElement"

export const createFigure = (i) => {
	const { name: petName, imgName, alt } = paginationValues[i]
	const BASE_SRC = `./assets/images/pets-list/${imgName}`
	const figureHTML = `
	<picture class="pets__images-picture">
		${createSourceElement(BASE_SRC, "webp")}
		${createSourceElement(BASE_SRC, "avif")}
		<img class="pets__images-image" src="${BASE_SRC}@1x.png" srcset="${BASE_SRC}@2x.png 2x,
		${BASE_SRC}@3x.png 3x" alt="${alt}">
	</picture>
	<figcaption>
		<p class="pets__images-text  subtitle-animal">${petName}</p >
		<button class="pets__images-button">Learn more</button>
	</figcaption> 
`
	const figure = document.createElement("figure")
	figure.classList.add("pets__images-figure")
	figure.setAttribute("data-pet", petName)
	figure.innerHTML = figureHTML
	slider.append(figure)
}
