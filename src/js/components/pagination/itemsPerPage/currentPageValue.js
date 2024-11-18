let currentPage = 1

export const getCurrentPageValue = () => currentPage
export const setCurrentPageValue = (value) => (currentPage = value)
export const incrementCurrentPageValue = () => currentPage++
export const decrementCurrentPageValue = () => --currentPage
