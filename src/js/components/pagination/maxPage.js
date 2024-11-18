import paginationValues from "../paginationValues"
import { itemsPerPage } from "./itemsPerPage/setValueItemsPerPageOnPageLoad"

let maxPageNumber

export const getMaxPageValue = () => maxPageNumber
export const setMaxPageValue = () =>
	(maxPageNumber = Math.ceil(paginationValues.length / itemsPerPage))
