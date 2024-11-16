import { petsPopupInfo } from "./petsPopupInfo"

export const petInfoObject = petsPopupInfo.reduce((acc, pet) => {
	acc[pet.name] = pet
	return acc
}, {})
