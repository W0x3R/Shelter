import { getNumberItemsPerPage } from "../itemsPerPage/getNumberItemsPerPage"
import {
	getValueItemsPerPageOnPageLoad,
	setValueItemsPerPageOnPageLoad
} from "../itemsPerPage/valueItemsPerPageOnPageLoad"
import paginationValues from "../paginationValues"
import { slider } from "../../slider/buttons/actionsOnLeftBtnClick"
import { createFigure } from "../../slider/markup/createFigure"
import { getCurrentPageValue } from "../itemsPerPage/currentPageValue"

export const loadItems = () => {
	setValueItemsPerPageOnPageLoad(getNumberItemsPerPage())
	slider.innerHTML = ""

	for (
		let i = (getCurrentPageValue() - 1) * getValueItemsPerPageOnPageLoad();
		i < getCurrentPageValue() * getValueItemsPerPageOnPageLoad();
		i++
	) {
		if (!paginationValues[i]) break
		createFigure(i)
	}
}
