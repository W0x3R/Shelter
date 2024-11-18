export const createSourceElement = (BASE_SRC, type) => `
<source
	srcset="${BASE_SRC}@1x.${type} 1x,${BASE_SRC}@2x.${type} 2x, ${BASE_SRC}@3x.${type} 3x"
	type="image/${type}">
`
