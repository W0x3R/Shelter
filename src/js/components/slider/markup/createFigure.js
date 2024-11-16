import paginationValues from "../../paginationValues"
import { slider } from "../buttons/actionsOnLeftBtnClick"
import { createSourceElement } from "./createSourceElement"

export const createFigure = (i) => {
	const { name: petName, imgName, alt } = paginationValues[i]
	const figureHTML = `<picture class="pets__images-picture">
	${createSourceElement(imgName, "webp")}
	${createSourceElement(imgName, "avif")}
	<img class="pets__images-image" src="./assets/images/pets-list/${imgName}@1x.png" srcset="./assets/images/pets-list/${imgName}@2x.png 2x,
	./assets/images/pets-list/${imgName}@3x.png 3x" alt="${alt}">
</picture>
<figcaption>
	<p class="pets__images-text  subtitle-animal">${petName}</p >
	<button class="pets__images-button">Learn more</button>
</figcaption > `
	const figure = document.createElement("figure")
	figure.classList.add("pets__images-figure")
	figure.setAttribute("data-pet", petName)
	figure.innerHTML = figureHTML
	slider.append(figure)
}
