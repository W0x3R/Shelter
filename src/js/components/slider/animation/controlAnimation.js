export const controlAnimation = (arr, action, animationClass) =>
	arr.map((e) => e.classList[action](`pets__arrow_${animationClass}`))
