import { startPage } from "../../pagination"
import { getNumberItemsPerPage } from "../itemsPerPage/getNumberItemsPerPage"
import {
	itemsPerPage,
	setValueItemsPerPageOnPageLoad
} from "../itemsPerPage/setValueItemsPerPageOnPageLoad"
import paginationValues from "../../paginationValues"
import { slider } from "../../slider/buttons/actionsOnLeftBtnClick"
import { createFigure } from "../../slider/markup/createFigure"

export const loadItems = () => {
	setValueItemsPerPageOnPageLoad(getNumberItemsPerPage())
	slider.innerHTML = ""

	for (
		let i = (startPage - 1) * itemsPerPage;
		i < startPage * itemsPerPage;
		i++
	) {
		if (!paginationValues[i]) break
		createFigure(i)
	}
}
