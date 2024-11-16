import { generateListItem } from "./generateListItem"
import { generatePopupContent } from "./generatePopupContent"
import { generatePopupPicture } from "./generatePopupPicture"

export const generatePopUp = ({
	name,
	type,
	breed,
	description,
	age,
	inoculations,
	diseases,
	parasites
}) => {
	const listItems = `
	${generateListItem("Age", age)}
	${generateListItem("Inoculations", inoculations)}
	${generateListItem("Diseases", diseases)}
	${generateListItem("Parasites", parasites)}
`
	return `	
	${generatePopupPicture(name)}
	${generatePopupContent(name, type, breed, description, listItems)}
	`
}
