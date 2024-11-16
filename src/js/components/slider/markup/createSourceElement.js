export const createSourceElement = (imgName, type) => `<source
		srcset="./assets/images/pets-list/${imgName}@1x.${type} 1x,./assets/images/pets-list/${imgName}@2x.${type} 2x, ./assets/images/pets-list/${imgName}@3x.${type} 3x"
		type="image/${type}">`
