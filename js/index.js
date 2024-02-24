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

const setClassesStateBurger = (state) => {
	burger.classList[state]('burger_active')
	navList.classList[state]('nav__list_active')
	document.body.classList[state]('body_fixed')
}

const openBurger = () => setClassesStateBurger('toggle')
const closeBurger = () => setClassesStateBurger('remove')

header.addEventListener('click', function (e) {
	if (e.target.classList.contains('burger') || e.target.classList.contains('burger__line')) {
		openBurger()
	}
	if (e.target.tagName === 'LI' || e.target.tagName === 'A') {
		closeBurger()
	}
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



const slider = document.querySelector('.pets__images')
const popup = document.querySelector('.popup')
const popupShadow = document.querySelector('.popup_shadow')

const petInfoObject = Array.from(_pets_info__WEBPACK_IMPORTED_MODULE_1__.petInfo).reduce((acc, e) => {
	acc[e.name] = e
	return acc
}, {})

const setClassesStatePopup = (state) => {
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

popup.addEventListener('mouseleave', function (e) {
	const popupBtn = document.querySelector('.popup__button')
	popupBtn.classList.add('popup__button_hover')
})

popup.addEventListener('mouseenter', function (e) {
	const popupBtn = document.querySelector('.popup__button')
	popupBtn.classList.remove('popup__button_hover')
})

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const generatePopUp = (name, type, breed, description, age, inoculations, diseases, parasites) => {
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
	},
	{
		"name": "Hunter",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "This cute gay likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. He has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "1 years 5 month",
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
		"name": "Skrull",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "I am here and I am looking for my forever home to live out the best years of my life. I am full of energy. Everyday I am learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "2 years 3 month",
		"inoculations": [
			"calicivirus"
		],
		"diseases": [
			"none"
		],
		"parasites": [
			"none"
		]
	},
	{
		"name": "Pory",
		"type": "Cat",
		"breed": "Pooch",
		"description": "I am a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
		"age": "1 years 4 month",
		"inoculations": [
			"bordetella "
		],
		"diseases": [
			"blindness"
		],
		"parasites": [
			"none"
		]
	},
	{
		"name": "Tanos",
		"type": "Dog",
		"breed": "Chihuahua",
		"description": "I am here and I am looking for my forever home to live out the best years of my life. I am full of energy. Everyday I am learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "5 years 4 month",
		"inoculations": [
			"bordetella "
		],
		"diseases": [
			"blindness"
		],
		"parasites": [
			"none"
		]
	},
	{
		"name": "Rex",
		"type": "Dog",
		"breed": "German Shepherd",
		"description": "I am a friendly and laid back senior who enjoys chatting and being pet!",
		"age": "1 years 1 month",
		"inoculations": [
			"bordetella",
			"bronchiseptica"
		],
		"diseases": [
			"blindness"
		],
		"parasites": [
			"none"
		]
	},
	{
		"name": "Willson",
		"type": "Dog",
		"breed": "Pooch",
		"description": "I am a handsome sweetheart who loves people and melts for chin scratches!",
		"age": "3 month",
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
		"name": "Tor",
		"type": "Dog",
		"breed": "Dalmatian",
		"description": "This cute gay likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. He has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "2 years 1 month",
		"inoculations": [
			"none"
		],
		"diseases": [
			"kidney stones"
		],
		"parasites": [
			"none"
		]
	},
	{
		"name": "Monna",
		"type": "Cat",
		"breed": "Pooch",
		"description": "I am a handsome sweetheart who loves people and melts for chin scratches!",
		"age": "6 month",
		"inoculations": [
			"none"
		],
		"diseases": [
			"none"
		],
		"parasites": [
			"helminth"
		]
	},
	{
		"name": "Donatan",
		"type": "Dog",
		"breed": "Shiba Inu",
		"description": "I am here and I am looking for my forever home to live out the best years of my life. I am full of energy. Everyday I am learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "1 years 10 month",
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
		"name": "Koddy",
		"type": "Cat",
		"breed": "Toyger",
		"description": "I am a handsome sweetheart who loves people and melts for chin scratches!",
		"age": "5 month",
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
		"name": "Butty",
		"type": "Dog",
		"breed": "French Bulldog",
		"description": "This cute gay likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. He has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "8 month",
		"inoculations": [
			"none"
		],
		"diseases": [
			"kidney stones"
		],
		"parasites": [
			"none"
		]
	},
	{
		"name": "July",
		"type": "Dog",
		"breed": "Chihuahua",
		"description": "I am loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. I am a lot to say and wants a person to share his thoughts with.",
		"age": "5 years 3 month",
		"inoculations": [
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
		"name": "Perry",
		"type": "Dog",
		"breed": "French Bulldog",
		"description": "She is the perfect combination of silly and sweet. She is eager to please, loves her human and dog companions, and believes she is a professional MMA wrestler in her spare time.",
		"age": "1 years 5 month",
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
		"name": "Missy",
		"type": "Dog",
		"breed": "Labrador",
		"description": "He’s mild mannered and really just wants to spend his time outside or laying next to you being pet. He is extremely low energy but has a lot of.",
		"age": "7 month",
		"inoculations": [
			"none"
		],
		"diseases": [
			"none"
		],
		"parasites": [
			"lice",
			"fleas"
		]
	},
	{
		"name": "Lolly",
		"type": "Dog",
		"breed": "Pooch",
		"description": "I am a friendly and laid back senior who enjoys chatting and being pet!",
		"age": "2 years 3 month",
		"inoculations": [
			"calicivirus"
		],
		"diseases": [
			"deafness"
		],
		"parasites": [
			"lice",
			"fleas"
		]
	},
	{
		"name": "Iron",
		"type": "Dog",
		"breed": "Parson Russell Terrier",
		"description": "This cute gay likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. He has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "1 years 5 month",
		"inoculations": [
			"none"
		],
		"diseases": [
			"none"
		],
		"parasites": [
			"none",
		]
	},
	{
		"name": "Wonder",
		"type": "Dog",
		"breed": "French Bulldog",
		"description": "I am a handsome sweetheart who loves people and melts for chin scratches!",
		"age": "3 years 9 month",
		"inoculations": [
			"none"
		],
		"diseases": [
			"none"
		],
		"parasites": [
			"lice",
			"fleas"
		]
	},
	{
		"name": "Molly",
		"type": "Dog",
		"breed": "Spaniel",
		"description": "I am loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. I am a lot to say and wants a person to share his thoughts with.",
		"age": "1 years 9 month",
		"inoculations": [
			"none"
		],
		"diseases": [
			"blindness"
		],
		"parasites": [
			"fleas"
		]
	},
	{
		"name": "Elton",
		"type": "Dog",
		"breed": "Pooch",
		"description": "I am loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. I am a lot to say and wants a person to share his thoughts with.",
		"age": "1 years 9 month",
		"inoculations": [
			"none"
		],
		"diseases": [
			"blindness"
		],
		"parasites": [
			"fleas"
		]
	},
	{
		"name": "Cola",
		"type": "Dog",
		"breed": "Brazilian Terrier",
		"description": "I am here and I am looking for my forever home to live out the best years of my life. I am full of energy. Everyday I am learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "4 years 4 month",
		"inoculations": [
			"adenovirus"
		],
		"diseases": [
			"deafness"
		],
		"parasites": [
			"fleas"
		]
	},
	{
		"name": "Doran",
		"type": "Dog",
		"breed": "German Shepherd",
		"description": "I am a friendly and laid back senior who enjoys chatting and being pet!",
		"age": "2 years 7 month",
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
		"name": "Face",
		"type": "Dog",
		"breed": "Pooch",
		"description": "I am loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. I am a lot to say and wants a person to share his thoughts with.",
		"age": "6 years 4 month",
		"inoculations": [
			"none"
		],
		"diseases": [
			"blindness"
		],
		"parasites": [
			"none"
		]
	},
	{
		"name": "Fold",
		"type": "Dog",
		"breed": "American Staffordshire Bulldog",
		"description": "I am a friendly and laid back senior who enjoys chatting and being pet!",
		"age": "3 years 2 month",
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
		"name": "Jhon",
		"type": "Dog",
		"breed": "Pooch",
		"description": "I am here and I am looking for my forever home to live out the best years of my life. I am full of energy. Everyday I am learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "1 years 2 month",
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
		"name": "Molav",
		"type": "Dog",
		"breed": "French Bulldog",
		"description": "I am loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. I am a lot to say and wants a person to share his thoughts with.",
		"age": "1 years 5 month",
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
		"name": "Monika",
		"type": "Dog",
		"breed": "Dachshund",
		"description": "I am here and I am looking for my forever home to live out the best years of my life. I am full of energy. Everyday I am learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "3 month",
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
		"name": "Nomad",
		"type": "Dog",
		"breed": "English bulldog",
		"description": "I am a friendly and laid back senior who enjoys chatting and being pet!",
		"age": "1 years 1 month",
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
		"name": "Rikky",
		"type": "Dog",
		"breed": "Pooch",
		"description": "I am loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. I am a lot to say and wants a person to share his thoughts with.",
		"age": "5 years 3 month",
		"inoculations": [
			"viral rhinotracheitis"
		],
		"diseases": [
			"Blindness"
		],
		"parasites": [
			"none"
		]
	},
	{
		"name": "Rolls",
		"type": "Dog",
		"breed": "Pooch",
		"description": "I am a friendly and laid back senior who enjoys chatting and being pet!",
		"age": "3 years 1 month",
		"inoculations": [
			"viral rhinotracheitis"
		],
		"diseases": [
			"none"
		],
		"parasites": [
			"none"
		]
	},
	{
		"name": "Ronny",
		"type": "Dog",
		"breed": "English bulldog",
		"description": "I am here and I am looking for my forever home to live out the best years of my life. I am full of energy. Everyday I am learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "4 month",
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
		"name": "Smile",
		"type": "Dog",
		"breed": "Pooch",
		"description": "I am loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. I am a lot to say and wants a person to share his thoughts with.",
		"age": "6 month",
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
		"name": "Jessy",
		"type": "Dog",
		"breed": "Tibetan mastiff",
		"description": "I am a friendly and laid back senior who enjoys chatting and being pet!",
		"age": "4 month",
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
		"name": "Poolly",
		"type": "Dog",
		"breed": "Bedlington Terrier",
		"description": "I am loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. I am a lot to say and wants a person to share his thoughts with.",
		"age": "9 month",
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
		"name": "Salem",
		"type": "Dog",
		"breed": "Newfoundland",
		"description": "I am loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. I am a lot to say and wants a person to share his thoughts with.",
		"age": "2 years 11 month",
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
		"name": "Spoon",
		"type": "Dog",
		"breed": "American Cocker Spaniel",
		"description": "I am here and I am looking for my forever home to live out the best years of my life. I am full of energy. Everyday I am learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "4 years 4 month",
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
		"name": "Yammy",
		"type": "Dog",
		"breed": "Chinese Crested",
		"description": "This cute gay likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. He has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "7 years 1 month",
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
		"name": "Blacky",
		"type": "Dog",
		"breed": "Pooch",
		"description": "I am a friendly and laid back senior who enjoys chatting and being pet!",
		"age": "3 years 8 month",
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
		"name": "Bony",
		"type": "Dog",
		"breed": "Bull Terrier",
		"description": "I am here and I am looking for my forever home to live out the best years of my life. I am full of energy. Everyday I am learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "2 years 11 month",
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
		"name": "Ember",
		"type": "Dog",
		"breed": "Cavalier King Charles Spaniel",
		"description": "This cute gay likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. He has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "3 years 8 month",
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
		"name": "Huskar",
		"type": "Dog",
		"breed": "Husky",
		"description": "I am a friendly and laid back senior who enjoys chatting and being pet!.",
		"age": "1 years 1 month",
		"inoculations": [
			"none"
		],
		"diseases": [
			"none"
		],
		"parasites": [
			"none"
		]
	}
]


  

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paginationValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

const slider = document.querySelector('.pets__images');
const buttonLeft = document.querySelector('.left')
const buttonRight = document.querySelector('.right')
let isAnimateFinished = false;

const createFigure = (i) => {
	const figure = document.createElement('figure')
	figure.classList.add('pets__images-figure')
	figure.setAttribute('data-pet', _paginationValues__WEBPACK_IMPORTED_MODULE_0__["default"][i].name)
	figure.innerHTML =
		`<picture class="pets__images-picture">
	<source
		srcset="./images/${_paginationValues__WEBPACK_IMPORTED_MODULE_0__["default"][i]['imgName']}@1x.webp 1x,./images/${_paginationValues__WEBPACK_IMPORTED_MODULE_0__["default"][i]['imgName']}@2x.webp 2x, ./images/${_paginationValues__WEBPACK_IMPORTED_MODULE_0__["default"][i]['imgName']}@3x.webp 3x"
		type="image/webp">
	<source
		srcset="./images/${_paginationValues__WEBPACK_IMPORTED_MODULE_0__["default"][i]['imgName']}@1x.avif 1x,./images/${_paginationValues__WEBPACK_IMPORTED_MODULE_0__["default"][i]['imgName']}@2x.avif 2x, ./images/${_paginationValues__WEBPACK_IMPORTED_MODULE_0__["default"][i]['imgName']}@3x.avif 3x"
		type="image/avif">
	<img class="pets__images-image" src="./images/${_paginationValues__WEBPACK_IMPORTED_MODULE_0__["default"][i]['imgName']}@1x.png" srcset="./images/${_paginationValues__WEBPACK_IMPORTED_MODULE_0__["default"][i]['imgName']}@2x.png 2x, 
	./images/${_paginationValues__WEBPACK_IMPORTED_MODULE_0__["default"][i]['imgName']}@3x.png 3x" alt="${_paginationValues__WEBPACK_IMPORTED_MODULE_0__["default"][i].alt
		}">
</picture>
<figcaption>
	<p class="pets__images-text  subtitle-animal">${_paginationValues__WEBPACK_IMPORTED_MODULE_0__["default"][i].name
		}</p >
	<button class="pets__images-button">Learn more</button>
</figcaption > `
	slider.append(figure)
}

const loadItems = () => {
	slider.innerHTML = '';

	for (let i = 0; i < _paginationValues__WEBPACK_IMPORTED_MODULE_0__["default"].length; i++) {
		createFigure(i)
	}
}

loadItems()

function controlAnimation(arr, action, animationClass) {
	arr.map(e => e.classList[action](animationClass))
}


const getCountOfSlides = () => {
	if (window.innerWidth >= 1280) {
		return 3
	} else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
		return 2
	} else if (window.innerWidth < 768 && window.innerWidth >= 320) {
		return 1
	}
}

const moveLeft = () => {
	let countSlides = getCountOfSlides()
	if (isAnimateFinished) return
	isAnimateFinished = true
	const sliderChildren = slider.children
	const sliderChildrenArr = Array.from(sliderChildren)

	let slides = [];
	for (let i = 0; i < countSlides; i++) {
		slides.push(sliderChildren[i])
	}
	const savedSlides = slides.slice(0)

	controlAnimation(sliderChildrenArr, 'add', 'pets__arrow_moveLeftAnimation')

	setTimeout(() => {
		sliderChildrenArr.filter(e => slides.includes(e) ? e.remove() : '')

		controlAnimation(sliderChildrenArr, 'remove', 'pets__arrow_moveLeftAnimation')
	}, 610)

	setTimeout(() => {
		for (let i = 0; i < countSlides; i++) {
			slider.appendChild(savedSlides[i])
		}
		isAnimateFinished = false
	}, 710);
}

const moveRight = () => {
	let countSlides = getCountOfSlides()
	if (isAnimateFinished) return
	isAnimateFinished = true;
	const sliderChildren = slider.children
	let sliderChildrenArr = Array.from(sliderChildren)

	let slides = [];
	for (let i = sliderChildrenArr.length - 1; i >= sliderChildrenArr.length - countSlides; i--) {
		slides.push(sliderChildren[i])
	}

	const savedSlides = slides.slice(0)

	for (let i = 0; i < countSlides; i++) {
		slider.prepend(savedSlides[i])
	}

	sliderChildrenArr = Array.from(sliderChildren)
	controlAnimation(sliderChildrenArr, 'add', 'pets__arrow_moveRightAnimation')

	setTimeout(() => {
		controlAnimation(sliderChildrenArr, 'remove', 'pets__arrow_moveRightAnimation')
		isAnimateFinished = false;
	}, 610);
}

buttonLeft.addEventListener('click', moveLeft)
buttonRight.addEventListener('click', moveRight)

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const paginationValues = [
	{
		"name": "Katrine",
		"alt": "Cat Katrine",
		"imgName": "pets-katrine",
	},
	{
		"name": "Jennifer",
		"alt": "Dog Jennifer",
		"imgName": "pets-jennifer"
	},
	{
		"name": "Woody",
		"alt": "Dog Woody",
		"imgName": "pets-woody"
	},
	{
		"name": "Sophia",
		"alt": "Dog Sophia",
		"imgName": "pets-sophia"
	},
	{
		"name": "Timmy",
		"alt": "Cat Timmy",
		"imgName": "pets-timmy"
	},
	{
		"name": "Charly",
		"alt": "Dog Charly",
		"imgName": "pets-charly"
	},
	{
		"name": "Scarlett",
		"alt": "Dog Scarlett",
		"imgName": "pets-scarlet"
	},
	{
		"name": "Freddie",
		"alt": "Cat Freddie",
		"imgName": "pets-freddie"
	},
	{
		"name": "Hunter",
		"alt": "Dog Hunter",
		"imgName": "pets-hunter"
	},

	{
		"name": "Skrull",
		"alt": "Dog Skrull",
		"imgName": "pets-skrull"
	},

	{
		"name": "Pory",
		"alt": "Cat Pory",
		"imgName": "pets-pory"
	},

	{
		"name": "Tanos",
		"alt": "Dog Tanos",
		"imgName": "pets-tanos"
	},
	{
		"name": "Rex",
		"alt": "Dog Rex",
		"imgName": "pets-rex",
	},
	{
		"name": "Willson",
		"alt": "Dog Willson",
		"imgName": "pets-willson"
	},
	{
		"name": "Tor",
		"alt": "Dog Tor",
		"imgName": "pets-tor"

	},
	{
		"name": "Monna",
		"alt": "Cat Monna",
		"imgName": "pets-monna"
	},
	{
		"name": "Donatan",
		"alt": "Dog Donatan",
		"imgName": "pets-donatan"
	},
	{
		"name": "Koddy",
		"alt": "Dog Koddy",
		"imgName": "pets-koddy"
	},
	{
		"name": "Butty",
		"alt": "Dog Butty",
		"imgName": "pets-butty"
	},
	{
		"name": "July",
		"alt": "Dog July",
		"imgName": "pets-july"
	},
	{
		"name": "Perry",
		"alt": "Dog Perry",
		"imgName": "pets-perry"
	},
	{
		"name": "Missy",
		"alt": "Dog Missy",
		"imgName": "pets-missy"
	},
	{
		"name": "Lolly",
		"alt": "Dog Lolly",
		"imgName": "pets-lolly"
	},
	{
		"name": "Iron",
		"alt": "Dog Iron",
		"imgName": "pets-iron"
	},
	{
		"name": "Wonder",
		"alt": "Dog Wonder",
		"imgName": "pets-wonder"
	},
	{
		"name": "Molly",
		"alt": "Dog Molly",
		"imgName": "pets-molly"
	},
	{
		"name": "Elton",
		"alt": "Dog Elton",
		"imgName": "pets-elton"
	},
	{
		"name": "Cola",
		"alt": "Dog Cola",
		"imgName": "pets-cola"
	},
	{
		"name": "Doran",
		"alt": "Dog Doran",
		"imgName": "pets-doran"
	},
	{
		"name": "Face",
		"alt": "Dog Face",
		"imgName": "pets-face"
	},
	{
		"name": "Fold",
		"alt": "Dog Fold",
		"imgName": "pets-fold"
	},
	{
		"name": "Jhon",
		"alt": "Dog Jhon",
		"imgName": "pets-jhon"
	},
	{
		"name": "Molav",
		"alt": "Dog Molav",
		"imgName": "pets-molav"
	},
	{
		"name": "Monika",
		"alt": "Dog Monika",
		"imgName": "pets-monika"
	},
	{
		"name": "Nomad",
		"alt": "Dog Nomad",
		"imgName": "pets-nomad"
	},
	{
		"name": "Rikky",
		"alt": "Dog Rikky",
		"imgName": "pets-rikky"
	},
	{
		"name": "Rolls",
		"alt": "Dog Rolls",
		"imgName": "pets-rolls"
	},
	{
		"name": "Ronny",
		"alt": "Dog Ronny",
		"imgName": "pets-ronny"
	},
	{
		"name": "Smile",
		"alt": "Dog Smile",
		"imgName": "pets-smile"
	},
	{
		"name": "Jessy",
		"alt": "Dog Jessy",
		"imgName": "pets-jessy"
	},
	{
		"name": "Poolly",
		"alt": "Dog Poolly",
		"imgName": "pets-poolly"
	},
	{
		"name": "Salem",
		"alt": "Dog Salem",
		"imgName": "pets-salem"
	},
	{
		"name": "Spoon",
		"alt": "Dog Spoon",
		"imgName": "pets-spoon"
	},
	{
		"name": "Yammy",
		"alt": "Dog Yammy",
		"imgName": "pets-yammy"
	},
	{
		"name": "Blacky",
		"alt": "Dog Blacky",
		"imgName": "pets-blacky"
	},
	{
		"name": "Bony",
		"alt": "Dog Bony",
		"imgName": "pets-bony"
	},
	{
		"name": "Ember",
		"alt": "Dog Ember",
		"imgName": "pets-ember"
	},
	{
		"name": "Huskar",
		"alt": "Dog Huskar",
		"imgName": "pets-huskar"
	},
]

/* harmony default export */ __webpack_exports__["default"] = (paginationValues);

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



const checkClickOutBurger = (e) => {
	if (!e.target.closest('.nav__list') && !e.target.closest('.burger')) {
		(0,_burger__WEBPACK_IMPORTED_MODULE_0__["default"])('remove')
	}
}

const checkClickOutPopUp = (e) => {
	if (e.target.classList.contains('popup_shadow-on')) {
		(0,_popup__WEBPACK_IMPORTED_MODULE_1__.setClassesStatePopup)('remove')
	}
}

document.body.addEventListener('click', function (e) {
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
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _components_checkClickOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);




}();
/******/ })()
;