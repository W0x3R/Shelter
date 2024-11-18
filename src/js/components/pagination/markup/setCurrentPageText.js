import { getCurrentPageValue } from "../itemsPerPage/currentPageValue"

const currentPageEl = document.querySelector(".pets__buttons-item_count")

export const setCurrentPageText = () =>
	(currentPageEl.textContent = getCurrentPageValue())
