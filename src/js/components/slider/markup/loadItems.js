import paginationValues from "../../pagination/paginationValues"
import { createFigure } from "./createFigure"

export const loadItems = () => {
	for (let i = 0; i < paginationValues.length; i++) {
		createFigure(i)
	}
}
