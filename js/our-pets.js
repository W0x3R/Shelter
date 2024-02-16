/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const header = document.querySelector('.header')
const navList = document.querySelector('.nav__list')
const burger = document.querySelector('.burger');

function setClassesStateBurger(state) {
	burger.classList[state]('burger_active')
	navList.classList[state]('nav__list_active')
	document.body.classList[state]('body_fixed')
}

function openBurger(e) {
	if (e.target.classList.contains('burger') || e.target.classList.contains('burger__line')) {
		setClassesStateBurger('toggle')
	}
}

function closeBurger(e) {
	if (e.target.tagName === 'LI' || e.target.tagName === 'A') {
		setClassesStateBurger('remove')
	}
}

header.addEventListener('click', function (e) {
	openBurger(e)
	closeBurger(e)
})

/* harmony default export */ __webpack_exports__["default"] = (setClassesStateBurger);


/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setClassesStatePopup: function() { return /* binding */ setClassesStatePopup; }
/* harmony export */ });
/* harmony import */ var _generatePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _pets_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



const slider = document.querySelector('.pets__images');

const popup = document.querySelector('.popup')

const petInfoObject = Array.from(_pets_info__WEBPACK_IMPORTED_MODULE_1__.petInfo).reduce((acc, e) => {
	acc[e.name] = e
	return acc
}, {})

const popupShadow = document.querySelector('.popup_shadow')

function setClassesStatePopup(state) {
	document.body.classList[state]('body_popup_fixed')
	popup.classList[state]('popup_active')
	popupShadow.classList[state]('popup_shadow-on')
}

slider.addEventListener('click', function (e) {

	const target = e.target
	if (!target.classList.contains('pets__images')) {
		const closestFigure = target.closest('figure')
		const figureDataValue = closestFigure.dataset.pet
		const findItem = petInfoObject[figureDataValue]
		const popUpInner =
			(0,_generatePopup__WEBPACK_IMPORTED_MODULE_0__["default"])(findItem.name, findItem.type, findItem.breed, findItem.description, findItem.age, findItem.inoculations, findItem.diseases, findItem.parasites)
		popup.innerHTML = popUpInner
		setClassesStatePopup('add')
		const popupBtn = document.querySelector('.popup__button')
		popupBtn.addEventListener('click', function (e) {
			setClassesStatePopup('remove')
		})
	}

})



/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function generatePopUp(name, type, breed, description, age, inoculations, diseases, parasites) {
	return `
		<picture class="popup__picture">
		<source
			srcset="./images/${name}.webp"
			type="image/webp">
		<source
			srcset="./images/${name}.avif"
			type="image/avif">
		<img class="popup__picture-image" src="./images/${name}.png", alt="${name}">
		</picture>
		<div class="popup__content">
			<h4 class="popup__title popUp__text">${name}</h4>
			<h5 class="popup__breed popUp__text">${type} - ${breed}</h5>
			<p class="popup__description popUp__text">${description}</p>
			<ul class="popup__list">
				<li class="popup__item">
					Age:
					<span class="popup__span">${age}</span>
				</li>
				<li class="popup__item">
					Inoculations:
					<span class="popup__span">${inoculations}</span>
				</li>
				<li class="popup__item">
					Diseases:
					<span class="popup__span">${diseases}</span>
				</li>
				<li class="popup__item">
					Parasites:
					<span class="popup__span">${parasites}</span>
				</li>
			</ul>
			<button class="popup__button"></button>
		</div>`
}

/* harmony default export */ __webpack_exports__["default"] = (generatePopUp);

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   petInfo: function() { return /* binding */ petInfoJSON; }
/* harmony export */ });
const petInfoJSON = [
	{
		"name": "Jennifer",
		"type": "Dog",
		"breed": "Labrador",
		"description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
		"age": "2 months",
		"inoculations": [
			"none"
		],
		"diseases": [
			"none"
		],
		"parasites": [
			"none"
		]
	},
	{
		"name": "Sophia",
		"type": "Dog",
		"breed": "Shih tzu",
		"description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "1 month",
		"inoculations": [
			"parvovirus"
		],
		"diseases": [
			"none"
		],
		"parasites": [
			"none"
		]
	},
	{
		"name": "Woody",
		"type": "Dog",
		"breed": "Golden Retriever",
		"description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
		"age": "3 years 6 months",
		"inoculations": [
			"adenovirus",
			"distemper"
		],
		"diseases": [
			"right back leg mobility reduced"
		],
		"parasites": [
			"none"
		]
	},
	{
		"name": "Scarlett",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
		"age": "3 months",
		"inoculations": [
			"parainfluenza"
		],
		"diseases": [
			"none"
		],
		"parasites": [
			"none"
		]
	},
	{
		"name": "Katrine",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
		"age": "6 months",
		"inoculations": [
			"panleukopenia"
		],
		"diseases": [
			"none"
		],
		"parasites": [
			"none"
		]
	},
	{
		"name": "Timmy",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
		"age": "2 years 3 months",
		"inoculations": [
			"calicivirus",
			"viral rhinotracheitis"
		],
		"diseases": [
			"kidney stones"
		],
		"parasites": [
			"none"
		]
	},
	{
		"name": "Freddie",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
		"age": "2 months",
		"inoculations": [
			"rabies"
		],
		"diseases": [
			"none"
		],
		"parasites": [
			"none"
		]
	},
	{
		"name": "Charly",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "8 years",
		"inoculations": [
			"bordetella bronchiseptica",
			"leptospirosis"
		],
		"diseases": [
			"deafness",
			"blindness"
		],
		"parasites": [
			"lice",
			"fleas"
		]
	}
]

  

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



const body = document.body

function checkClickOutBurger(e) {
	if (!e.target.closest('.nav__list') && !e.target.closest('.burger')) {
		(0,_burger__WEBPACK_IMPORTED_MODULE_0__["default"])('remove')
	};
}

function checkClickOutPopUp(e) {
	if (e.target.classList.contains('popup_shadow-on')) {
		(0,_popup__WEBPACK_IMPORTED_MODULE_1__.setClassesStatePopup)('remove')
	}
}

body.addEventListener('click', function (e) {
	checkClickOutBurger(e)
	checkClickOutPopUp(e)
})



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _components_checkClickOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);



}();
/******/ })()
;