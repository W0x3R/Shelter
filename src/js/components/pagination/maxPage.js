import paginationValues from "../paginationValues"
import { getValueItemsPerPageOnPageLoad } from "./itemsPerPage/valueItemsPerPageOnPageLoad"

let maxPageNumber

export const getMaxPageValue = () => maxPageNumber
export const setMaxPageValue = () =>
	(maxPageNumber = Math.ceil(
		paginationValues.length / getValueItemsPerPageOnPageLoad()
	))
