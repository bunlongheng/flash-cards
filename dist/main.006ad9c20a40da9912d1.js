/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories */ \"./src/Categories.js\");\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category */ \"./src/Category.js\");\n/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Settings */ \"./src/Settings.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst typesString = process.env.REACT_APP_CATEGORIES || \"\";\nconst typesArray = typesString.split(\",\");\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Categories__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)\n  }), typesArray.map(type => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {\n    key: type,\n    path: `/${type}`,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      type: type\n    })\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {\n    path: \"/settings\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Settings__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://flash-cards/./src/App.js?");

/***/ }),

/***/ "./src/Categories.css":
/*!****************************!*\
  !*** ./src/Categories.css ***!
  \****************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .categories-page {\\n|     background: linear-gradient(135deg, #000000 0%, #333333 50%);\\n|     background-size: cover;\");\n\n//# sourceURL=webpack://flash-cards/./src/Categories.css?");

/***/ }),

/***/ "./src/Categories.js":
/*!***************************!*\
  !*** ./src/Categories.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings */ \"./src/Settings.js\");\n/* harmony import */ var _Categories_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Categories.css */ \"./src/Categories.css\");\n/* harmony import */ var _Categories_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Categories_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Import your Settings component\n\n\nconst Categories = () => {\n  const categoriesStr = process.env.REACT_APP_CATEGORIES || \"\";\n  const categories = categoriesStr.split(\",\");\n  const transportationTypesString = process.env.REACT_APP_TRANSPORTATION_TYPES || \"\";\n  const transportationTypesArray = transportationTypesString.split(\",\");\n  const [randomItem, setRandomItem] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const toggleSettings = () => {\n    setIsModalVisible(!isModalVisible);\n  };\n  const getRandomItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    const randomIndex = Math.floor(Math.random() * transportationTypesArray.length);\n    return transportationTypesArray[randomIndex];\n  }, [transportationTypesArray]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const newItem = getRandomItem();\n    setRandomItem(newItem);\n  }, [getRandomItem, transportationTypesArray]);\n  const speak = data => {\n    speechSynthesis.speak(new SpeechSynthesisUtterance(data));\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"categories-page bg-dark text-light\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"sliding-text\",\n    onClick: toggleSettings\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"background-text\"\n  }, \"\\uD83D\\uDC4B\\uD83C\\uDFFD Hi! Norden!\"), \"\\xA0----\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: `/images/transportations/${randomItem}.png`,\n    alt: randomItem,\n    height: 30\n  })), isModalVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Settings__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onClose: toggleSettings\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"d-flex flex-wrap justify-content-center mt-4\"\n  }, categories.map((category, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    key: index,\n    to: `/${category}`,\n    className: \"link-style text-decoration-none text-light m-2\",\n    onClick: () => speak(category)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"thumbnail-style border border-secondary rounded p-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: `${process.env.PUBLIC_URL}/images/types/${category}.png`,\n    alt: category,\n    className: \"image-style\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"c-name mt-2\"\n  }, category))))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);\n\n//# sourceURL=webpack://flash-cards/./src/Categories.js?");

/***/ }),

/***/ "./src/Category.css":
/*!**************************!*\
  !*** ./src/Category.css ***!
  \**************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @font-face {\\n|     font-family: \\\"Kiddosy\\\";\\n|     src: url(\\\"/public/fonts/fankids/FanKids.otf\\\") format(\\\"opentype\\\"), url(\\\"/public/fonts/fankids/FanKids.ttf\\\") format(\\\"truetype\\\");\");\n\n//# sourceURL=webpack://flash-cards/./src/Category.css?");

/***/ }),

/***/ "./src/Category.js":
/*!*************************!*\
  !*** ./src/Category.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _utility_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility/colorUtils.js */ \"./src/utility/colorUtils.js\");\n/* harmony import */ var _utility_audioUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility/audioUtils.js */ \"./src/utility/audioUtils.js\");\n/* harmony import */ var _utility_pageUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility/pageUtils.js */ \"./src/utility/pageUtils.js\");\n/* harmony import */ var _utility_imageUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utility/imageUtils.js */ \"./src/utility/imageUtils.js\");\n/* harmony import */ var _Category_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Category.css */ \"./src/Category.css\");\n/* harmony import */ var _Category_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Category_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst Category = _ref => {\n  let {\n    type\n  } = _ref;\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [clickedItemName, setClickedItemName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [clickedItems, setClickedItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [slideText, setSlideText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [displayTextKey, setDisplayTextKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [clickCount, setClickCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [bgImage, setBgImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [shakeClass, setShakeClass] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [showCelebration, setShowCelebration] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const jsonData = __webpack_require__(\"./src/data sync recursive ^\\\\.\\\\/.*\\\\.json$\")(`./${type}.json`);\n    const updatedData = jsonData.map((item, index) => {\n      if (!item.color) {\n        item.color = (0,_utility_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__.getHueColor)(index, jsonData.length);\n      }\n      return item;\n    });\n    setData(updatedData);\n    const initialBgImageValue = localStorage.getItem(\"bgImage\") === \"true\";\n    setBgImage(initialBgImageValue);\n  }, [type]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    (0,_utility_audioUtils_js__WEBPACK_IMPORTED_MODULE_2__.playAudio)(clickedItems.length, data.length, _utility_pageUtils_js__WEBPACK_IMPORTED_MODULE_3__.goHome);\n  }, [clickedItems.length, data.length]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const handleKeyDown = event => {\n      if (event.key >= \"a\" && event.key <= \"z\") {\n        const itemToClick = data.find(item => item.name.charAt(0).toLowerCase() === event.key);\n        if (itemToClick) {\n          document.getElementById(`${itemToClick.name.replace(/\\s+/g, \"-\").toLowerCase()}`).click();\n        }\n      }\n    };\n    window.addEventListener(\"keydown\", handleKeyDown);\n    return () => {\n      window.removeEventListener(\"keydown\", handleKeyDown);\n    };\n  }, [data]);\n  const toggleImage = () => {\n    setClickCount(prevCount => prevCount + 1);\n    if (clickCount <= 3) {\n      setShakeClass(`shake${clickCount + 1}`);\n    } else {\n      setShakeClass(\"\");\n    }\n    console.log(\"Click Count:\", clickCount);\n    if (clickCount === 2) {\n      setShowCelebration(true);\n      const currentV = localStorage.getItem(\"bgImage\") === \"true\";\n      const newV = !currentV;\n      localStorage.setItem(\"bgImage\", newV.toString());\n      setTimeout(() => {\n        setShowCelebration(false);\n        window.location.reload();\n      }, 2000);\n    }\n  };\n  const handleClick = item => {\n    setSlideText(\"\");\n    const thumbnailId = item.name.replace(/\\s+/g, \"-\").toLowerCase();\n    const clickedThumbnail = document.getElementById(`${thumbnailId}`);\n    const audio = new Audio(\"/sounds/1.mp3\");\n    audio.volume = 0.1;\n    audio.play();\n    setClickedItemName(item.name);\n    const getRandomImage = () => {\n      const randomIndex = Math.floor(Math.random() * 5) + 1;\n      return `/images/fly/${randomIndex}.png`;\n    };\n    if (!clickedThumbnail.classList.contains(\"disabled\")) {\n      speechSynthesis.speak(new SpeechSynthesisUtterance(item.name));\n      clickedThumbnail.classList.add(\"disabled\");\n      setClickedItems(prev => [...prev, thumbnailId]);\n      console.log(clickedItems);\n      switch (clickedItems.length + 1) {\n        case 1:\n          setSlideText( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n            src: `/images/fly/superman.png`,\n            alt: \"superman\",\n            width: 40\n          }));\n          new Audio(\"/sounds/flying.mp3\").play();\n          break;\n        case 5:\n          setSlideText( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n            src: getRandomImage(),\n            alt: \"air\",\n            width: 40\n          }));\n          new Audio(\"/sounds/flying.mp3\").play();\n          break;\n        case 10:\n          setSlideText( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n            src: getRandomImage(),\n            alt: \"air\",\n            width: 40\n          }));\n          new Audio(\"/sounds/flying.mp3\").play();\n          break;\n        case 15:\n          setSlideText( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n            src: getRandomImage(),\n            alt: \"air\",\n            width: 40\n          }));\n          new Audio(\"/sounds/flying.mp3\").play();\n          break;\n        case 20:\n          setSlideText( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n            src: getRandomImage(),\n            alt: \"air\",\n            width: 40\n          }));\n          new Audio(\"/sounds/flying.mp3\").play();\n          break;\n        case 25:\n          setSlideText( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n            src: getRandomImage(),\n            alt: \"air\",\n            width: 40\n          }));\n          new Audio(\"/sounds/flying.mp3\").play();\n          break;\n        default:\n          setSlideText(\"\");\n          break;\n      }\n      setDisplayText(item.name);\n      setDisplayTextKey(prevKey => prevKey + 1);\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"category-page\",\n    style: {\n      overflowX: \"hidden\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"nav\", {\n    className: \"breadcrumbs\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {\n    to: \"/\",\n    className: \"home-link\"\n  }, \"Go Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    onClick: () => (0,_utility_pageUtils_js__WEBPACK_IMPORTED_MODULE_3__.goHome)(),\n    className: \"breadcrumb-divider\"\n  }, \" \", \"\\xA0\\xA0/\\xA0\\xA0\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    onClick: () => toggleImage(),\n    className: `current-page ${shakeClass}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: `/images/types/${type}.png`,\n    alt: \"Icon\",\n    className: `icon ${shakeClass}`,\n    width: \"20\"\n  }), \" \", (0,_utility_pageUtils_js__WEBPACK_IMPORTED_MODULE_3__.getPageName)(type))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `thumbnails-container`\n  }, data.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    key: index,\n    id: `${item.name.replace(/\\s+/g, \"-\").toLowerCase()}`,\n    className: \"thumbnail\",\n    onClick: () => handleClick(item),\n    style: {\n      backgroundColor: bgImage ? \"white\" : item.color,\n      backgroundSize: \"cover\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"initial\"\n  }, bgImage ? \"\" : item.name.charAt(0).toUpperCase()), bgImage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: (0,_utility_imageUtils_js__WEBPACK_IMPORTED_MODULE_4__.getImage)(item, type),\n    alt: \"img\",\n    style: {\n      width: (0,_utility_imageUtils_js__WEBPACK_IMPORTED_MODULE_4__.getImageWidth)(type),\n      height: (0,_utility_imageUtils_js__WEBPACK_IMPORTED_MODULE_4__.getImageHeight)(type)\n    }\n  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `thumbnail-details`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h6\", null, item.name))))), slideText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"slide-up\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, slideText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: `selected bottom-left`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: `https://www.google.com/images?q=${encodeURIComponent(clickedItemName)}`,\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, \"\\\"\", clickedItemName, \"\\\"\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"bottom-right\"\n  }, clickedItems.length, \"/\", data.length), displayText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    key: displayTextKey,\n    className: \"display-text\"\n  }), showCelebration && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"achievement-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"achievement\",\n    src: \"/images/gif/5.gif\",\n    alt: \"Celebration\"\n  })), data.length === clickedItems.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"achievement-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"/images/1.gif\",\n    alt: \"achievement\",\n    className: \"achievement\"\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);\n\n//# sourceURL=webpack://flash-cards/./src/Category.js?");

/***/ }),

/***/ "./src/Settings.css":
/*!**************************!*\
  !*** ./src/Settings.css ***!
  \**************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:23)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> input[type=\\\"checkbox\\\"] {\\n|     appearance: none;\\n|     -webkit-appearance: none;\");\n\n//# sourceURL=webpack://flash-cards/./src/Settings.css?");

/***/ }),

/***/ "./src/Settings.js":
/*!*************************!*\
  !*** ./src/Settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Settings_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.css */ \"./src/Settings.css\");\n/* harmony import */ var _Settings_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Settings_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Settings = () => {\n  const [bgImage, setBgImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {\n    const storedValue = localStorage.getItem(\"bgImage\");\n    return storedValue === \"true\";\n  });\n  const handleBgImageChange = () => {\n    setBgImage(prevBgImage => !prevBgImage);\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    localStorage.setItem(\"bgImage\", bgImage.toString());\n  }, [bgImage]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"switch-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    className: \"switch\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"checkbox\",\n    checked: bgImage,\n    onChange: handleBgImageChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"slider\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"switch-label\"\n  }, \"Image\")));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);\n\n//# sourceURL=webpack://flash-cards/./src/Settings.js?");

/***/ }),

/***/ "./src/data sync recursive ^\\.\\/.*\\.json$":
/*!***************************************!*\
  !*** ./src/data/ sync ^\.\/.*\.json$ ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./10s.json\": \"./src/data/10s.json\",\n\t\"./123.json\": \"./src/data/123.json\",\n\t\"./ABC.json\": \"./src/data/ABC.json\",\n\t\"./activities.json\": \"./src/data/activities.json\",\n\t\"./adjectives.json\": \"./src/data/adjectives.json\",\n\t\"./aircrafts.json\": \"./src/data/aircrafts.json\",\n\t\"./animals.json\": \"./src/data/animals.json\",\n\t\"./balls.json\": \"./src/data/balls.json\",\n\t\"./bathroom.json\": \"./src/data/bathroom.json\",\n\t\"./birds.json\": \"./src/data/birds.json\",\n\t\"./body-parts.json\": \"./src/data/body-parts.json\",\n\t\"./buses.json\": \"./src/data/buses.json\",\n\t\"./camping.json\": \"./src/data/camping.json\",\n\t\"./chemicals.json\": \"./src/data/chemicals.json\",\n\t\"./colors.json\": \"./src/data/colors.json\",\n\t\"./construction-vehicles.json\": \"./src/data/construction-vehicles.json\",\n\t\"./days-of-week.json\": \"./src/data/days-of-week.json\",\n\t\"./desserts.json\": \"./src/data/desserts.json\",\n\t\"./dinosaurs.json\": \"./src/data/dinosaurs.json\",\n\t\"./directions.json\": \"./src/data/directions.json\",\n\t\"./emotions.json\": \"./src/data/emotions.json\",\n\t\"./farm-animals.json\": \"./src/data/farm-animals.json\",\n\t\"./foods.json\": \"./src/data/foods.json\",\n\t\"./fruits.json\": \"./src/data/fruits.json\",\n\t\"./galaxy.json\": \"./src/data/galaxy.json\",\n\t\"./gogo-dinos.json\": \"./src/data/gogo-dinos.json\",\n\t\"./insects.json\": \"./src/data/insects.json\",\n\t\"./keyboard.json\": \"./src/data/keyboard.json\",\n\t\"./kitchen.json\": \"./src/data/kitchen.json\",\n\t\"./months.json\": \"./src/data/months.json\",\n\t\"./moons.json\": \"./src/data/moons.json\",\n\t\"./opposites.json\": \"./src/data/opposites.json\",\n\t\"./paw-patrols.json\": \"./src/data/paw-patrols.json\",\n\t\"./planets.json\": \"./src/data/planets.json\",\n\t\"./polygons.json\": \"./src/data/polygons.json\",\n\t\"./reptiles.json\": \"./src/data/reptiles.json\",\n\t\"./safari-animals.json\": \"./src/data/safari-animals.json\",\n\t\"./seasons.json\": \"./src/data/seasons.json\",\n\t\"./shapes.json\": \"./src/data/shapes.json\",\n\t\"./solar-system.json\": \"./src/data/solar-system.json\",\n\t\"./stars.json\": \"./src/data/stars.json\",\n\t\"./super-wings.json\": \"./src/data/super-wings.json\",\n\t\"./tayo-buses.json\": \"./src/data/tayo-buses.json\",\n\t\"./tools.json\": \"./src/data/tools.json\",\n\t\"./triangles.json\": \"./src/data/triangles.json\",\n\t\"./tropical-fruits.json\": \"./src/data/tropical-fruits.json\",\n\t\"./trucks.json\": \"./src/data/trucks.json\",\n\t\"./under-water.json\": \"./src/data/under-water.json\",\n\t\"./usa-capitals.json\": \"./src/data/usa-capitals.json\",\n\t\"./usa-states.json\": \"./src/data/usa-states.json\",\n\t\"./vegetables.json\": \"./src/data/vegetables.json\",\n\t\"./vehicles.json\": \"./src/data/vehicles.json\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/data sync recursive ^\\\\.\\\\/.*\\\\.json$\";\n\n//# sourceURL=webpack://flash-cards/./src/data/_sync_^\\.\\/.*\\.json$?");

/***/ }),

/***/ "./src/data/10s.json":
/*!***************************!*\
  !*** ./src/data/10s.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Eighty\",\"value\":80},{\"name\":\"Fifty\",\"value\":50},{\"name\":\"Forty\",\"value\":40},{\"name\":\"Hundred\",\"value\":100},{\"name\":\"Ninety\",\"value\":90},{\"name\":\"Seventy\",\"value\":70},{\"name\":\"Sixty\",\"value\":60},{\"name\":\"Ten\",\"value\":10},{\"name\":\"Thirty\",\"value\":30},{\"name\":\"Twenty\",\"value\":20}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/10s.json?");

/***/ }),

/***/ "./src/data/123.json":
/*!***************************!*\
  !*** ./src/data/123.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"0\"},{\"name\":\"1\"},{\"name\":\"2\"},{\"name\":\"3\"},{\"name\":\"4\"},{\"name\":\"5\"},{\"name\":\"6\"},{\"name\":\"7\"},{\"name\":\"8\"},{\"name\":\"9\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/123.json?");

/***/ }),

/***/ "./src/data/ABC.json":
/*!***************************!*\
  !*** ./src/data/ABC.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"a\"},{\"name\":\"b\"},{\"name\":\"c\"},{\"name\":\"d\"},{\"name\":\"e\"},{\"name\":\"f\"},{\"name\":\"g\"},{\"name\":\"h\"},{\"name\":\"i\"},{\"name\":\"j\"},{\"name\":\"k\"},{\"name\":\"l\"},{\"name\":\"m\"},{\"name\":\"n\"},{\"name\":\"o\"},{\"name\":\"p\"},{\"name\":\"q\"},{\"name\":\"r\"},{\"name\":\"s\"},{\"name\":\"t\"},{\"name\":\"u\"},{\"name\":\"v\"},{\"name\":\"w\"},{\"name\":\"x\"},{\"name\":\"y\"},{\"name\":\"z\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/ABC.json?");

/***/ }),

/***/ "./src/data/activities.json":
/*!**********************************!*\
  !*** ./src/data/activities.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Bounce\"},{\"name\":\"Build\"},{\"name\":\"Catch\"},{\"name\":\"Climb\"},{\"name\":\"Count\"},{\"name\":\"Crawl\"},{\"name\":\"Create\"},{\"name\":\"Dance\"},{\"name\":\"Discover\"},{\"name\":\"Draw\"},{\"name\":\"Dream\"},{\"name\":\"Drink\"},{\"name\":\"Eat\"},{\"name\":\"Explore\"},{\"name\":\"Fly\"},{\"name\":\"Help\"},{\"name\":\"Hide\"},{\"name\":\"Hug\"},{\"name\":\"Imagine\"},{\"name\":\"Jump\"},{\"name\":\"Kick\"},{\"name\":\"Laugh\"},{\"name\":\"Learn\"},{\"name\":\"Listen\"},{\"name\":\"Paint\"},{\"name\":\"Play\"},{\"name\":\"Read\"},{\"name\":\"Roll\"},{\"name\":\"Run\"},{\"name\":\"Share\"},{\"name\":\"Sing\"},{\"name\":\"Skip\"},{\"name\":\"Sleep\"},{\"name\":\"Slide\"},{\"name\":\"Smile\"},{\"name\":\"Solve\"},{\"name\":\"Swim\"},{\"name\":\"Swing\"},{\"name\":\"Talk\"},{\"name\":\"Think\"},{\"name\":\"Throw\"},{\"name\":\"Write\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/activities.json?");

/***/ }),

/***/ "./src/data/adjectives.json":
/*!**********************************!*\
  !*** ./src/data/adjectives.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Bounce\"},{\"name\":\"Build\"},{\"name\":\"Catch\"},{\"name\":\"Climb\"},{\"name\":\"Count\"},{\"name\":\"Crawl\"},{\"name\":\"Create\"},{\"name\":\"Dance\"},{\"name\":\"Discover\"},{\"name\":\"Draw\"},{\"name\":\"Dream\"},{\"name\":\"Drink\"},{\"name\":\"Eat\"},{\"name\":\"Explore\"},{\"name\":\"Fly\"},{\"name\":\"Help\"},{\"name\":\"Hide\"},{\"name\":\"Hug\"},{\"name\":\"Imagine\"},{\"name\":\"Jump\"},{\"name\":\"Kick\"},{\"name\":\"Laugh\"},{\"name\":\"Learn\"},{\"name\":\"Listen\"},{\"name\":\"Paint\"},{\"name\":\"Play\"},{\"name\":\"Read\"},{\"name\":\"Roll\"},{\"name\":\"Run\"},{\"name\":\"Share\"},{\"name\":\"Sing\"},{\"name\":\"Skip\"},{\"name\":\"Sleep\"},{\"name\":\"Slide\"},{\"name\":\"Smile\"},{\"name\":\"Solve\"},{\"name\":\"Swim\"},{\"name\":\"Swing\"},{\"name\":\"Talk\"},{\"name\":\"Think\"},{\"name\":\"Throw\"},{\"name\":\"Write\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/adjectives.json?");

/***/ }),

/***/ "./src/data/aircrafts.json":
/*!*********************************!*\
  !*** ./src/data/aircrafts.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Army Plane\"},{\"name\":\"Biplane\"},{\"name\":\"Cargo Plane\"},{\"name\":\"Drone\"},{\"name\":\"Emergency Helicoper\"},{\"name\":\"F-22 Raptor\"},{\"name\":\"Glider\"},{\"name\":\"Hot Air Balloon\"},{\"name\":\"Interceptor\"},{\"name\":\"Jet Fighter\"},{\"name\":\"Kawasaki C-1\"},{\"name\":\"Light Aircraft\"},{\"name\":\"Monoplane\"},{\"name\":\"Night Bomber\"},{\"name\":\"OV-10 Bronco\"},{\"name\":\"Private Jet\"},{\"name\":\"Quadcopter\"},{\"name\":\"Reconnaissance Aircraft\"},{\"name\":\"Seaplane\"},{\"name\":\"Triplane\"},{\"name\":\"Utility Transport Aircraft\"},{\"name\":\"V-22 Osprey Plane\"},{\"name\":\"Water Bombers Plane\"},{\"name\":\"X-plane\"},{\"name\":\"YF-17 Cobra\"},{\"name\":\"Zeppelin\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/aircrafts.json?");

/***/ }),

/***/ "./src/data/animals.json":
/*!*******************************!*\
  !*** ./src/data/animals.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Alligator\"},{\"name\":\"Bear\"},{\"name\":\"Cheetah\"},{\"name\":\"Dolphin\"},{\"name\":\"Elephant\"},{\"name\":\"Fox\"},{\"name\":\"Giraffe\"},{\"name\":\"Hippopotamus\"},{\"name\":\"Iguana\"},{\"name\":\"Jaguar\"},{\"name\":\"Kangaroo\"},{\"name\":\"Lion\"},{\"name\":\"Moose\"},{\"name\":\"Nightingale\"},{\"name\":\"Ostrich\"},{\"name\":\"Penguin\"},{\"name\":\"Quokka\"},{\"name\":\"Raccoon\"},{\"name\":\"Sloth\"},{\"name\":\"Tiger\"},{\"name\":\"Uakari\"},{\"name\":\"Vulture\"},{\"name\":\"Walrus\"},{\"name\":\"X-ray Tetra\"},{\"name\":\"Yak\"},{\"name\":\"Zebra\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/animals.json?");

/***/ }),

/***/ "./src/data/balls.json":
/*!*****************************!*\
  !*** ./src/data/balls.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Baseball\"},{\"name\":\"Basketball\"},{\"name\":\"Beach Ball\"},{\"name\":\"Bowling Ball\"},{\"name\":\"Cricket Ball\"},{\"name\":\"Football\"},{\"name\":\"Golf Ball\"},{\"name\":\"Ping Pong Ball\"},{\"name\":\"Rugby Ball\"},{\"name\":\"Soccer Ball\"},{\"name\":\"Volleyball\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/balls.json?");

/***/ }),

/***/ "./src/data/bathroom.json":
/*!********************************!*\
  !*** ./src/data/bathroom.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Bath Mat\"},{\"name\":\"Bath Sponge\"},{\"name\":\"Bath Towel\"},{\"name\":\"Bathrobe\"},{\"name\":\"Bathroom Mat\"},{\"name\":\"Cabinet\"},{\"name\":\"Candles\"},{\"name\":\"Cotton Balls\"},{\"name\":\"Cotton Swabs\"},{\"name\":\"Electric Toothbrush\"},{\"name\":\"Faucet\"},{\"name\":\"Hair Dryer\"},{\"name\":\"Hairbrush\"},{\"name\":\"Hand Sanitizer\"},{\"name\":\"Mirror\"},{\"name\":\"Mouthwash\"},{\"name\":\"Plunger\"},{\"name\":\"Razor\"},{\"name\":\"Scale\"},{\"name\":\"Shampoo\"},{\"name\":\"Shower Caddy\"},{\"name\":\"Shower Curtain\"},{\"name\":\"Shower Head\"},{\"name\":\"Shower Radio\"},{\"name\":\"Sink\"},{\"name\":\"Soap Dispenser\"},{\"name\":\"Tissue Box\"},{\"name\":\"Tissue Dispenser\"},{\"name\":\"Toilet Brush\"},{\"name\":\"Toilet Paper\"},{\"name\":\"Toilet Paper Holder\"},{\"name\":\"Toilet Seat\"},{\"name\":\"Toothbrush\"},{\"name\":\"Towel Hook\"},{\"name\":\"Towel Rack\"},{\"name\":\"Towel Ring\"},{\"name\":\"Towel Stand\"},{\"name\":\"Towel Warmer\"},{\"name\":\"Tumbler\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/bathroom.json?");

/***/ }),

/***/ "./src/data/birds.json":
/*!*****************************!*\
  !*** ./src/data/birds.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Albatross\"},{\"name\":\"Blue Jay\"},{\"name\":\"Canary\"},{\"name\":\"Duck\"},{\"name\":\"Eagle\"},{\"name\":\"Flamingo\"},{\"name\":\"Gull\"},{\"name\":\"Hawk\"},{\"name\":\"Ibis\"},{\"name\":\"Jay\"},{\"name\":\"Kestrel\"},{\"name\":\"Lark\"},{\"name\":\"Magpie\"},{\"name\":\"Nightingale\"},{\"name\":\"Ostrich\"},{\"name\":\"Peacock\"},{\"name\":\"Quail\"},{\"name\":\"Robin\"},{\"name\":\"Sparrow\"},{\"name\":\"Toucan\"},{\"name\":\"Umbrellabird\"},{\"name\":\"Vulture\"},{\"name\":\"Woodpecker\"},{\"name\":\"Xenops\"},{\"name\":\"Yellow Warbler\"},{\"name\":\"Zebra Dove\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/birds.json?");

/***/ }),

/***/ "./src/data/body-parts.json":
/*!**********************************!*\
  !*** ./src/data/body-parts.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Arm\"},{\"name\":\"Belly\"},{\"name\":\"Chin\"},{\"name\":\"Dermis\"},{\"name\":\"Elbow\"},{\"name\":\"Foot\"},{\"name\":\"Gut\"},{\"name\":\"Hair\"},{\"name\":\"Iris\"},{\"name\":\"Jaw\"},{\"name\":\"Kidney\"},{\"name\":\"Lung\"},{\"name\":\"Mouth\"},{\"name\":\"Nail\"},{\"name\":\"Ovary\"},{\"name\":\"Pancreas\"},{\"name\":\"Quadriceps\"},{\"name\":\"Rib\"},{\"name\":\"Spine\"},{\"name\":\"Thigh\"},{\"name\":\"Ulna\"},{\"name\":\"Vein\"},{\"name\":\"Wrist\"},{\"name\":\"Xiphoid Process\"},{\"name\":\"Yawn\"},{\"name\":\"Zygomatic Bone\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/body-parts.json?");

/***/ }),

/***/ "./src/data/buses.json":
/*!*****************************!*\
  !*** ./src/data/buses.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"All-Terrain Bus\"},{\"name\":\"Articulated Bus\"},{\"name\":\"City Bus\"},{\"name\":\"Coach Bus\"},{\"name\":\"Double-Decker Bus\"},{\"name\":\"Low-Floor Bus\"},{\"name\":\"Mini Bus\"},{\"name\":\"Party Bus\"},{\"name\":\"School Bus\"},{\"name\":\"Shuttle Bus\"},{\"name\":\"Sleeper Bus\"},{\"name\":\"Tour Bus\"},{\"name\":\"Trolleybus\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/buses.json?");

/***/ }),

/***/ "./src/data/camping.json":
/*!*******************************!*\
  !*** ./src/data/camping.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Backpack\"},{\"name\":\"Bear Canister\"},{\"name\":\"Camp Axe\"},{\"name\":\"Camp Broom\"},{\"name\":\"Camp Chair\"},{\"name\":\"Camp Cookware Set\"},{\"name\":\"Camp Cot\"},{\"name\":\"Camp Griddle\"},{\"name\":\"Camp Hammock\"},{\"name\":\"Camp Lantern\"},{\"name\":\"Camp Mugs\"},{\"name\":\"Camp Shower\"},{\"name\":\"Camp Tableware\"},{\"name\":\"Camp Tarp\"},{\"name\":\"Camp Utensil Set\"},{\"name\":\"Campfire Gloves\"},{\"name\":\"Campfire Grill\"},{\"name\":\"Campfire Roasting Sticks\"},{\"name\":\"Campfire Starter Kit\"},{\"name\":\"Campfire Tripod\"},{\"name\":\"Camping Pillow\"},{\"name\":\"Camping Pot Set\"},{\"name\":\"Camping Stove\"},{\"name\":\"Camping Table\"},{\"name\":\"Compass\"},{\"name\":\"Cooler\"},{\"name\":\"First Aid Kit\"},{\"name\":\"Flashlight\"},{\"name\":\"Folding Shovel\"},{\"name\":\"Headlamp\"},{\"name\":\"Hiking Boots\"},{\"name\":\"Insect Repellent\"},{\"name\":\"Pocket Knife\"},{\"name\":\"Sleeping Bag\"},{\"name\":\"Solar Charger\"},{\"name\":\"Survival Whistle\"},{\"name\":\"Tent\"},{\"name\":\"Tent Pegs\"},{\"name\":\"Water Bottle\"},{\"name\":\"Water Purifier\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/camping.json?");

/***/ }),

/***/ "./src/data/chemicals.json":
/*!*********************************!*\
  !*** ./src/data/chemicals.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Aluminum\",\"symbol\":\"Al\",\"atomicNumber\":13,\"atomicWeight\":26.9815},{\"name\":\"Boron\",\"symbol\":\"B\",\"atomicNumber\":5,\"atomicWeight\":10.81},{\"name\":\"Carbon\",\"symbol\":\"C\",\"atomicNumber\":6,\"atomicWeight\":12.011},{\"name\":\"Dysprosium\",\"symbol\":\"Dy\",\"atomicNumber\":66,\"atomicWeight\":162.5},{\"name\":\"Einsteinium\",\"symbol\":\"Es\",\"atomicNumber\":99,\"atomicWeight\":252},{\"name\":\"Fluorine\",\"symbol\":\"F\",\"atomicNumber\":9,\"atomicWeight\":18.998},{\"name\":\"Gold\",\"symbol\":\"Au\",\"atomicNumber\":79,\"atomicWeight\":196.967},{\"name\":\"Hydrogen\",\"symbol\":\"H\",\"atomicNumber\":1,\"atomicWeight\":1.008},{\"name\":\"Iodine\",\"symbol\":\"I\",\"atomicNumber\":53,\"atomicWeight\":126.904},{\"name\":\"Jodium\",\"symbol\":\"J\",\"atomicNumber\":84,\"atomicWeight\":208.98},{\"name\":\"Krypton\",\"symbol\":\"Kr\",\"atomicNumber\":36,\"atomicWeight\":83.798},{\"name\":\"Lithium\",\"symbol\":\"Li\",\"atomicNumber\":3,\"atomicWeight\":6.94},{\"name\":\"Manganese\",\"symbol\":\"Mn\",\"atomicNumber\":25,\"atomicWeight\":54.938},{\"name\":\"Neon\",\"symbol\":\"Ne\",\"atomicNumber\":10,\"atomicWeight\":20.18},{\"name\":\"Oxygen\",\"symbol\":\"O\",\"atomicNumber\":8,\"atomicWeight\":15.999},{\"name\":\"Phosphorus\",\"symbol\":\"P\",\"atomicNumber\":15,\"atomicWeight\":30.974},{\"name\":\"Quicksilver\",\"symbol\":\"Qk\",\"atomicNumber\":80,\"atomicWeight\":200.59},{\"name\":\"Radium\",\"symbol\":\"Ra\",\"atomicNumber\":88,\"atomicWeight\":226},{\"name\":\"Sulfur\",\"symbol\":\"S\",\"atomicNumber\":16,\"atomicWeight\":32.06},{\"name\":\"Titanium\",\"symbol\":\"Ti\",\"atomicNumber\":22,\"atomicWeight\":47.867},{\"name\":\"Uranium\",\"symbol\":\"U\",\"atomicNumber\":92,\"atomicWeight\":238.03},{\"name\":\"Vanadium\",\"symbol\":\"V\",\"atomicNumber\":23,\"atomicWeight\":50.942},{\"name\":\"Wolfram\",\"symbol\":\"W\",\"atomicNumber\":74,\"atomicWeight\":183.84},{\"name\":\"Xenon\",\"symbol\":\"Xe\",\"atomicNumber\":54,\"atomicWeight\":131.29},{\"name\":\"Yttrium\",\"symbol\":\"Y\",\"atomicNumber\":39,\"atomicWeight\":88.906},{\"name\":\"Zinc\",\"symbol\":\"Zn\",\"atomicNumber\":30,\"atomicWeight\":65.38}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/chemicals.json?");

/***/ }),

/***/ "./src/data/colors.json":
/*!******************************!*\
  !*** ./src/data/colors.json ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Blue\",\"color\":\"#0000FF\"},{\"name\":\"Brown\",\"color\":\"#A52A2A\"},{\"name\":\"Chocolate\",\"color\":\"#D2691E\"},{\"name\":\"Crimson\",\"color\":\"#DC143C\"},{\"name\":\"Cyan\",\"color\":\"#00FFFF\"},{\"name\":\"Gold\",\"color\":\"#FFD700\"},{\"name\":\"Gray\",\"color\":\"#808080\"},{\"name\":\"Green\",\"color\":\"#008000\"},{\"name\":\"Indigo\",\"color\":\"#4B0082\"},{\"name\":\"Lavender\",\"color\":\"#E6E6FA\"},{\"name\":\"Lemon Chiffon\",\"color\":\"#FFFACD\"},{\"name\":\"Lime\",\"color\":\"#00FF00\"},{\"name\":\"Linen\",\"color\":\"#FAF0E6\"},{\"name\":\"Magenta\",\"color\":\"#FF00FF\"},{\"name\":\"Maroon\",\"color\":\"#800000\"},{\"name\":\"Navy\",\"color\":\"#000080\"},{\"name\":\"Olive\",\"color\":\"#808000\"},{\"name\":\"Orange\",\"color\":\"#FFA500\"},{\"name\":\"Pink\",\"color\":\"#FF1493\"},{\"name\":\"Purple\",\"color\":\"#800080\"},{\"name\":\"Red\",\"color\":\"#FF0000\"},{\"name\":\"Salmon\",\"color\":\"#FA8072\"},{\"name\":\"Silver\",\"color\":\"#C0C0C0\"},{\"name\":\"Sky Blue\",\"color\":\"#87CEEB\"},{\"name\":\"Slate Gray\",\"color\":\"#708090\"},{\"name\":\"Steel Blue\",\"color\":\"#4682B4\"},{\"name\":\"Teal\",\"color\":\"#008080\"},{\"name\":\"Turquoise\",\"color\":\"#40E0D0\"},{\"name\":\"Violet\",\"color\":\"#EE82EE\"},{\"name\":\"Yellow\",\"color\":\"#FFFF00\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/colors.json?");

/***/ }),

/***/ "./src/data/construction-vehicles.json":
/*!*********************************************!*\
  !*** ./src/data/construction-vehicles.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Backhoe\"},{\"name\":\"Bulldozer\"},{\"name\":\"Concrete Mixer\"},{\"name\":\"Drilling Rig\"},{\"name\":\"Concrete Pump\"},{\"name\":\"Crane\"},{\"name\":\"Demolition\"},{\"name\":\"Skid Loader\"},{\"name\":\"Dump Truck\"},{\"name\":\"Excavator\"},{\"name\":\"Forklift\"},{\"name\":\"Grader\"},{\"name\":\"Knuckle Boom Loader\"},{\"name\":\"Hydraulic Hammer\"},{\"name\":\"Paver\"},{\"name\":\"Scissor Lift\"},{\"name\":\"Tractor\"},{\"name\":\"Trencher\"},{\"name\":\"Wheel Loader\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/construction-vehicles.json?");

/***/ }),

/***/ "./src/data/days-of-week.json":
/*!************************************!*\
  !*** ./src/data/days-of-week.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Friday\"},{\"name\":\"Monday\"},{\"name\":\"Saturday\"},{\"name\":\"Sunday\"},{\"name\":\"Thursday\"},{\"name\":\"Tuesday\"},{\"name\":\"Wednesday\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/days-of-week.json?");

/***/ }),

/***/ "./src/data/desserts.json":
/*!********************************!*\
  !*** ./src/data/desserts.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Apple Pie\"},{\"name\":\"Brownie\"},{\"name\":\"Cheesecake\"},{\"name\":\"Doughnut\"},{\"name\":\"Eclair\"},{\"name\":\"Fudge\"},{\"name\":\"Gelato\"},{\"name\":\"Hot Chocolate\"},{\"name\":\"Ice Cream\"},{\"name\":\"Jellybean\"},{\"name\":\"Krispy Kreme\"},{\"name\":\"Lollipop\"},{\"name\":\"Macaron\"},{\"name\":\"Nougat\"},{\"name\":\"Oreo\"},{\"name\":\"Pancake\"},{\"name\":\"Quick Bread\"},{\"name\":\"Red Velvet Cake\"},{\"name\":\"Sorbet\"},{\"name\":\"Tiramisu\"},{\"name\":\"Ube Cake\"},{\"name\":\"Vanilla Cake\"},{\"name\":\"Waffle\"},{\"name\":\"Xiao Long Bao\"},{\"name\":\"Yogurt Parfait\"},{\"name\":\"Zebra Cake\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/desserts.json?");

/***/ }),

/***/ "./src/data/dinosaurs.json":
/*!*********************************!*\
  !*** ./src/data/dinosaurs.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Ankylosaurus\"},{\"name\":\"Brachiosaurus\"},{\"name\":\"Ceratosaurus\"},{\"name\":\"Diplodocus\"},{\"name\":\"Edmontosaurus\"},{\"name\":\"Fukuiraptor\"},{\"name\":\"Gallimimus\"},{\"name\":\"Heyuannia\"},{\"name\":\"Iguanodon\"},{\"name\":\"Juravenator\"},{\"name\":\"Kentrosaurus\"},{\"name\":\"Lambeosaurus\"},{\"name\":\"Mosasaurus\"},{\"name\":\"Nodosaurus\"},{\"name\":\"Oviraptor\"},{\"name\":\"Pterodactyl\"},{\"name\":\"Quetzalcoatlus\"},{\"name\":\"Rajasaurus\"},{\"name\":\"Stegosaurus\"},{\"name\":\"Tyrannosaurus Rex\"},{\"name\":\"Utahraptor\"},{\"name\":\"Velociraptor\"},{\"name\":\"Wannanosaurus\"},{\"name\":\"Xenoceratops\"},{\"name\":\"Yinlong\"},{\"name\":\"Zephyrosaurus\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/dinosaurs.json?");

/***/ }),

/***/ "./src/data/directions.json":
/*!**********************************!*\
  !*** ./src/data/directions.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"East\"},{\"name\":\"North\"},{\"name\":\"North-East\"},{\"name\":\"North-West\"},{\"name\":\"South\"},{\"name\":\"South-East\"},{\"name\":\"South-West\"},{\"name\":\"West\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/directions.json?");

/***/ }),

/***/ "./src/data/emotions.json":
/*!********************************!*\
  !*** ./src/data/emotions.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Amused\"},{\"name\":\"Angry\"},{\"name\":\"Anxious\"},{\"name\":\"Bored\"},{\"name\":\"Calm\"},{\"name\":\"Confused\"},{\"name\":\"Content\"},{\"name\":\"Disappointed\"},{\"name\":\"Embarrassed\"},{\"name\":\"Envious\"},{\"name\":\"Excited\"},{\"name\":\"Frustrated\"},{\"name\":\"Grateful\"},{\"name\":\"Guilt\"},{\"name\":\"Happy\"},{\"name\":\"Hopeful\"},{\"name\":\"Joyful\"},{\"name\":\"Lonely\"},{\"name\":\"Loved\"},{\"name\":\"Proud\"},{\"name\":\"Relieved\"},{\"name\":\"Sad\"},{\"name\":\"Scared\"},{\"name\":\"Shy\"},{\"name\":\"Surprised\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/emotions.json?");

/***/ }),

/***/ "./src/data/farm-animals.json":
/*!************************************!*\
  !*** ./src/data/farm-animals.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Alpaca\"},{\"name\":\"Bull\"},{\"name\":\"Chicken\"},{\"name\":\"Duck\"},{\"name\":\"Emu\"},{\"name\":\"Goat\"},{\"name\":\"Horse\"},{\"name\":\"Iguana\"},{\"name\":\"Jackrabbit\"},{\"name\":\"Kangaroo\"},{\"name\":\"Lamb\"},{\"name\":\"Mule\"},{\"name\":\"Nanny Goat\"},{\"name\":\"Ostrich\"},{\"name\":\"Pig\"},{\"name\":\"Rooster\"},{\"name\":\"Sheep\"},{\"name\":\"Turkey\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/farm-animals.json?");

/***/ }),

/***/ "./src/data/foods.json":
/*!*****************************!*\
  !*** ./src/data/foods.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Avocado Toast\"},{\"name\":\"Burger\"},{\"name\":\"Curry\"},{\"name\":\"Dim Sum\"},{\"name\":\"Egg Roll\"},{\"name\":\"Falafel\"},{\"name\":\"Gyoza\"},{\"name\":\"Hamburger\"},{\"name\":\"Inarizushi\"},{\"name\":\"Jiaozi\"},{\"name\":\"Koy Teav\"},{\"name\":\"Laksa\"},{\"name\":\"Maki Roll\"},{\"name\":\"Noodle\"},{\"name\":\"Okonomiyaki\"},{\"name\":\"Pad Thai\"},{\"name\":\"Quesadilla\"},{\"name\":\"Ramen\"},{\"name\":\"Sushi\"},{\"name\":\"Taco\"},{\"name\":\"Udon\"},{\"name\":\"Vindaloo\"},{\"name\":\"Wonton Soup\"},{\"name\":\"Xiaolongbao\"},{\"name\":\"Yogurt\"},{\"name\":\"Ziti\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/foods.json?");

/***/ }),

/***/ "./src/data/fruits.json":
/*!******************************!*\
  !*** ./src/data/fruits.json ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Apple\"},{\"name\":\"Banana\"},{\"name\":\"Cantaloupe\"},{\"name\":\"Date\"},{\"name\":\"Elderberry\"},{\"name\":\"Fig\"},{\"name\":\"Grape\"},{\"name\":\"Honeydew Melon\"},{\"name\":\"Ice Cream Bean\"},{\"name\":\"Kiwi\"},{\"name\":\"Lime\"},{\"name\":\"Mango\"},{\"name\":\"Nectarine\"},{\"name\":\"Orange\"},{\"name\":\"Peach\"},{\"name\":\"Quince\"},{\"name\":\"Raspberry\"},{\"name\":\"Strawberry\"},{\"name\":\"Tangerine\"},{\"name\":\"Ugli Fruit\"},{\"name\":\"Vanilla Bean\"},{\"name\":\"Watermelon\"},{\"name\":\"Xigua\"},{\"name\":\"Yellow Passion Fruit\"},{\"name\":\"Zucchini (Yes, it\\'s technically a fruit!)\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/fruits.json?");

/***/ }),

/***/ "./src/data/galaxy.json":
/*!******************************!*\
  !*** ./src/data/galaxy.json ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Asteroid\"},{\"name\":\"Black Hole\"},{\"name\":\"Comet\"},{\"name\":\"Dwarf Planet\"},{\"name\":\"Exoplanet\"},{\"name\":\"Galaxy\"},{\"name\":\"Hubble Space Telescope\"},{\"name\":\"Interstellar\"},{\"name\":\"Jupiter\"},{\"name\":\"Kuiper Belt\"},{\"name\":\"Light-Year\"},{\"name\":\"Mars\"},{\"name\":\"Neutron Star\"},{\"name\":\"Orbit\"},{\"name\":\"Pulsar\"},{\"name\":\"Quasar\"},{\"name\":\"Red Dwarf\"},{\"name\":\"Supernova\"},{\"name\":\"Telescope\"},{\"name\":\"Uranus\"},{\"name\":\"Venus\"},{\"name\":\"White Dwarf\"},{\"name\":\"X-Ray Astronomy\"},{\"name\":\"Yuri Gagarin\"},{\"name\":\"Zodiac\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/galaxy.json?");

/***/ }),

/***/ "./src/data/gogo-dinos.json":
/*!**********************************!*\
  !*** ./src/data/gogo-dinos.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Rex\"},{\"name\":\"Tommy\"},{\"name\":\"Vicky\"},{\"name\":\"Ping\"},{\"name\":\"Terry\"},{\"name\":\"Kaya\"},{\"name\":\"Robin\"},{\"name\":\"Leo\"},{\"name\":\"Dino\"},{\"name\":\"Pio\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/gogo-dinos.json?");

/***/ }),

/***/ "./src/data/insects.json":
/*!*******************************!*\
  !*** ./src/data/insects.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Ant\"},{\"name\":\"Bee\"},{\"name\":\"Cicada\"},{\"name\":\"Dragonfly\"},{\"name\":\"Earwig\"},{\"name\":\"Firefly\"},{\"name\":\"Grasshopper\"},{\"name\":\"Hornet\"},{\"name\":\"Ischnura ramburi\"},{\"name\":\"June Beetle\"},{\"name\":\"Katydids\"},{\"name\":\"Ladybug\"},{\"name\":\"Mosquito\"},{\"name\":\"Nymph\"},{\"name\":\"Owl Butterfly\"},{\"name\":\"Praying Mantis\"},{\"name\":\"Queen Bee\"},{\"name\":\"Roach\"},{\"name\":\"Scorpion\"},{\"name\":\"Termite\"},{\"name\":\"Ulysses Butterfly\"},{\"name\":\"Viceroy Butterfly\"},{\"name\":\"Wasp\"},{\"name\":\"Xerces Blue Butterfly\"},{\"name\":\"Yellow Jacket\"},{\"name\":\"Zebra clubtails\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/insects.json?");

/***/ }),

/***/ "./src/data/keyboard.json":
/*!********************************!*\
  !*** ./src/data/keyboard.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Alt\"},{\"name\":\"Backspace\"},{\"name\":\"Caps Lock\"},{\"name\":\"Command\"},{\"name\":\"Ctrl\"},{\"name\":\"Delete\"},{\"name\":\"Down\"},{\"name\":\"End\"},{\"name\":\"Enter\"},{\"name\":\"Escape (Esc)\"},{\"name\":\"Function (Fn)\"},{\"name\":\"Home\"},{\"name\":\"Insert\"},{\"name\":\"Left\"},{\"name\":\"Option\"},{\"name\":\"Page Down\"},{\"name\":\"Page Up\"},{\"name\":\"Return\"},{\"name\":\"Right\"},{\"name\":\"Shift\"},{\"name\":\"Space\"},{\"name\":\"Up\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/keyboard.json?");

/***/ }),

/***/ "./src/data/kitchen.json":
/*!*******************************!*\
  !*** ./src/data/kitchen.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Apron\"},{\"name\":\"Baking Sheet\"},{\"name\":\"Blender\"},{\"name\":\"Can Opener\"},{\"name\":\"Coffee Maker\"},{\"name\":\"Dish Rack\"},{\"name\":\"Dish Soap Dispenser\"},{\"name\":\"Egg Beater\"},{\"name\":\"Egg Timer\"},{\"name\":\"Food Processor\"},{\"name\":\"Frying Pan\"},{\"name\":\"Garlic Press\"},{\"name\":\"Glass Tumbler\"},{\"name\":\"Grater\"},{\"name\":\"Herb Grinder\"},{\"name\":\"Ice Cube Tray\"},{\"name\":\"Juicer\"},{\"name\":\"Knife Set\"},{\"name\":\"Knife Sharpener\"},{\"name\":\"Ladle\"},{\"name\":\"Lemon Squeezer\"},{\"name\":\"Measuring Cup\"},{\"name\":\"Microwave Oven\"},{\"name\":\"Napkin Holder\"},{\"name\":\"Noodle Strainer\"},{\"name\":\"Oven Mitt\"},{\"name\":\"Oven Thermometer\"},{\"name\":\"Peeler\"},{\"name\":\"Pizza Cutter\"},{\"name\":\"Quiche Dish\"},{\"name\":\"Rice Cooker\"},{\"name\":\"Rolling Pin\"},{\"name\":\"Salad Spinner\"},{\"name\":\"Salt Shaker\"},{\"name\":\"Teapot\"},{\"name\":\"Toaster\"},{\"name\":\"Utensil Holder\"},{\"name\":\"Vegetable Peeler\"},{\"name\":\"Vegetable Steamer\"},{\"name\":\"Whisk\"},{\"name\":\"Wine Opener\"},{\"name\":\"Yogurt Maker\"},{\"name\":\"Zester\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/kitchen.json?");

/***/ }),

/***/ "./src/data/months.json":
/*!******************************!*\
  !*** ./src/data/months.json ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"April\"},{\"name\":\"August\"},{\"name\":\"December\"},{\"name\":\"February\"},{\"name\":\"January\"},{\"name\":\"July\"},{\"name\":\"June\"},{\"name\":\"March\"},{\"name\":\"May\"},{\"name\":\"November\"},{\"name\":\"October\"},{\"name\":\"September\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/months.json?");

/***/ }),

/***/ "./src/data/moons.json":
/*!*****************************!*\
  !*** ./src/data/moons.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Ariel\"},{\"name\":\"Bianca\"},{\"name\":\"Callisto\"},{\"name\":\"Dione\"},{\"name\":\"Enceladus\"},{\"name\":\"Ferdinand\"},{\"name\":\"Ganymede\"},{\"name\":\"Hydra\"},{\"name\":\"Io\"},{\"name\":\"Janus\"},{\"name\":\"Kiviuq\"},{\"name\":\"Larissa\"},{\"name\":\"Miranda\"},{\"name\":\"Nereid\"},{\"name\":\"Oberon\"},{\"name\":\"Phoebe\"},{\"name\":\"Quaoar\"},{\"name\":\"Rhea\"},{\"name\":\"Selene\"},{\"name\":\"Titan\"},{\"name\":\"Umbriel\"},{\"name\":\"Voyager 1\"},{\"name\":\"Weywot\"},{\"name\":\"Xin\"},{\"name\":\"Ymir\"},{\"name\":\"Zephyr\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/moons.json?");

/***/ }),

/***/ "./src/data/opposites.json":
/*!*********************************!*\
  !*** ./src/data/opposites.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Beautiful / Ugly\"},{\"name\":\"Big / Small\"},{\"name\":\"Big / Tiny\"},{\"name\":\"Brave / Scared\"},{\"name\":\"Bright / Dark\"},{\"name\":\"Bumpy / Smooth\"},{\"name\":\"Clean / Dirty\"},{\"name\":\"Colorful / Plain\"},{\"name\":\"Cute / Ugly\"},{\"name\":\"Fast / Slow\"},{\"name\":\"Funny / Serious\"},{\"name\":\"Good / Bad\"},{\"name\":\"Happy / Sad\"},{\"name\":\"Hard / Soft\"},{\"name\":\"Hot / Cold\"},{\"name\":\"Kind / Mean\"},{\"name\":\"Loud / Quiet\"},{\"name\":\"Silly / Serious\"},{\"name\":\"Simple / Complex\"},{\"name\":\"Smart / Dumb\"},{\"name\":\"Strong / Weak\"},{\"name\":\"Sweet / Sour\"},{\"name\":\"Tall / Short\"},{\"name\":\"Young / Old\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/opposites.json?");

/***/ }),

/***/ "./src/data/paw-patrols.json":
/*!***********************************!*\
  !*** ./src/data/paw-patrols.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Chase\"},{\"name\":\"Marshall\"},{\"name\":\"Skye\"},{\"name\":\"Rubble\"},{\"name\":\"Rocky\"},{\"name\":\"Zuma\"},{\"name\":\"Everest\"},{\"name\":\"Tracker\"},{\"name\":\"Rex\"},{\"name\":\"Liberty\"},{\"name\":\"Tuck\"},{\"name\":\"Ella\"},{\"name\":\"Robo-Dog\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/paw-patrols.json?");

/***/ }),

/***/ "./src/data/planets.json":
/*!*******************************!*\
  !*** ./src/data/planets.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Earth\"},{\"name\":\"Jupiter\"},{\"name\":\"Mars\"},{\"name\":\"Mercury\"},{\"name\":\"Neptune\"},{\"name\":\"Saturn\"},{\"name\":\"Uranus\"},{\"name\":\"Venus\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/planets.json?");

/***/ }),

/***/ "./src/data/polygons.json":
/*!********************************!*\
  !*** ./src/data/polygons.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Decagon\"},{\"name\":\"Heptagon\"},{\"name\":\"Hexagon\"},{\"name\":\"Nonagon\"},{\"name\":\"Octagon\"},{\"name\":\"Pentagon\"},{\"name\":\"Quadrilateral\"},{\"name\":\"Triangle\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/polygons.json?");

/***/ }),

/***/ "./src/data/reptiles.json":
/*!********************************!*\
  !*** ./src/data/reptiles.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Alligator\"},{\"name\":\"Boa Constrictor\"},{\"name\":\"Chameleon\"},{\"name\":\"Dart Frog\"},{\"name\":\"Electric Eel\"},{\"name\":\"Frog\"},{\"name\":\"Gecko\"},{\"name\":\"Horned Toad\"},{\"name\":\"Iguana\"},{\"name\":\"Jacky Dragon\"},{\"name\":\"Komodo Dragon\"},{\"name\":\"Lizard\"},{\"name\":\"Monitor Lizard\"},{\"name\":\"Newt\"},{\"name\":\"Python\"},{\"name\":\"Quokka\"},{\"name\":\"Rattlesnake\"},{\"name\":\"Snake\"},{\"name\":\"Tegu\"},{\"name\":\"Uromastyx\"},{\"name\":\"Viper\"},{\"name\":\"Wallaby\"},{\"name\":\"Xenopus (a type of aquatic frog, though not a reptile, it is often included in herpetology)\"},{\"name\":\"Yellow-bellied Sea Snake\"},{\"name\":\"Zebra-Tailed Lizard\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/reptiles.json?");

/***/ }),

/***/ "./src/data/safari-animals.json":
/*!**************************************!*\
  !*** ./src/data/safari-animals.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Antelope\"},{\"name\":\"Buffalo\"},{\"name\":\"Cheetah\"},{\"name\":\"Dolphin\"},{\"name\":\"Elephant\"},{\"name\":\"Flamingo\"},{\"name\":\"Giraffe\"},{\"name\":\"Hippopotamus\"},{\"name\":\"Iguana\"},{\"name\":\"Jaguar\"},{\"name\":\"Kangaroo\"},{\"name\":\"Lion\"},{\"name\":\"Monkey\"},{\"name\":\"Nile Crocodile\"},{\"name\":\"Ostrich\"},{\"name\":\"Panda\"},{\"name\":\"Quokka\"},{\"name\":\"Rhinoceros\"},{\"name\":\"Sloth\"},{\"name\":\"Tiger\"},{\"name\":\"Uakari\"},{\"name\":\"Vulture\"},{\"name\":\"Walrus\"},{\"name\":\"X-ray Tetra\"},{\"name\":\"Yak\"},{\"name\":\"Zebra\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/safari-animals.json?");

/***/ }),

/***/ "./src/data/seasons.json":
/*!*******************************!*\
  !*** ./src/data/seasons.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Autumn\"},{\"name\":\"Spring\"},{\"name\":\"Summer\"},{\"name\":\"Winter\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/seasons.json?");

/***/ }),

/***/ "./src/data/shapes.json":
/*!******************************!*\
  !*** ./src/data/shapes.json ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Circle\"},{\"name\":\"Cone\"},{\"name\":\"Cube\"},{\"name\":\"Cuboid\"},{\"name\":\"Cylinder\"},{\"name\":\"Decagon\"},{\"name\":\"Heart\"},{\"name\":\"Heptagon\"},{\"name\":\"Hexagon\"},{\"name\":\"Hexagonal Prism\"},{\"name\":\"Octagon\"},{\"name\":\"Oval\"},{\"name\":\"Pentagon\"},{\"name\":\"Pentagonal Prism\"},{\"name\":\"Pyramid\"},{\"name\":\"Rectangle\"},{\"name\":\"Rhombus\"},{\"name\":\"Semi Circle\"},{\"name\":\"Sphere\"},{\"name\":\"Square\"},{\"name\":\"Trapezoid\"},{\"name\":\"Triangle\"},{\"name\":\"Triangular Prism\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/shapes.json?");

/***/ }),

/***/ "./src/data/solar-system.json":
/*!************************************!*\
  !*** ./src/data/solar-system.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Asteroid\"},{\"name\":\"Black Hole\"},{\"name\":\"Comet\"},{\"name\":\"Dwarf Planet\"},{\"name\":\"Exoplanet\"},{\"name\":\"Galaxy\"},{\"name\":\"Hubble Space Telescope\"},{\"name\":\"Interstellar\"},{\"name\":\"Jupiter\"},{\"name\":\"Kuiper Belt\"},{\"name\":\"Light-Year\"},{\"name\":\"Mars\"},{\"name\":\"Neutron Star\"},{\"name\":\"Orbit\"},{\"name\":\"Pulsar\"},{\"name\":\"Quasar\"},{\"name\":\"Red Dwarf\"},{\"name\":\"Supernova\"},{\"name\":\"Telescope\"},{\"name\":\"Uranus\"},{\"name\":\"Venus\"},{\"name\":\"White Dwarf\"},{\"name\":\"X-Ray Astronomy\"},{\"name\":\"Yuri Gagarin\"},{\"name\":\"Zodiac\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/solar-system.json?");

/***/ }),

/***/ "./src/data/stars.json":
/*!*****************************!*\
  !*** ./src/data/stars.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Andromeda\"},{\"name\":\"Betelgeuse\"},{\"name\":\"Canopus\"},{\"name\":\"Deneb\"},{\"name\":\"Epsilon Eridani\"},{\"name\":\"Fomalhaut\"},{\"name\":\"Gacrux\"},{\"name\":\"Hadar\"},{\"name\":\"Izar\"},{\"name\":\"Jabhat al Akrab\"},{\"name\":\"Kaus Australis\"},{\"name\":\"Lalande 21185\"},{\"name\":\"Markab\"},{\"name\":\"Nunki\"},{\"name\":\"Oberon\"},{\"name\":\"Pollux\"},{\"name\":\"QY Aurigae\"},{\"name\":\"Regulus\"},{\"name\":\"Sirius\"},{\"name\":\"Toliman\"},{\"name\":\"Urania\"},{\"name\":\"Vega\"},{\"name\":\"Wolf 359\"},{\"name\":\"Xuange\"},{\"name\":\"Yed Prior\"},{\"name\":\"Zubenelgenubi\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/stars.json?");

/***/ }),

/***/ "./src/data/super-wings.json":
/*!***********************************!*\
  !*** ./src/data/super-wings.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Jett\"},{\"name\":\"Dizzy\"},{\"name\":\"Donnie\"},{\"name\":\"Jerome\"},{\"name\":\"Paul\"},{\"name\":\"Mira\"},{\"name\":\"Astra\"},{\"name\":\"Grand Albert\"},{\"name\":\"Bello\"},{\"name\":\"Chace\"},{\"name\":\"Flip\"},{\"name\":\"Todd\"},{\"name\":\"Kim\"},{\"name\":\"Zoey\"},{\"name\":\"Sunny\"},{\"name\":\"Leo\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/super-wings.json?");

/***/ }),

/***/ "./src/data/tayo-buses.json":
/*!**********************************!*\
  !*** ./src/data/tayo-buses.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Tayo\"},{\"name\":\"Rogi\"},{\"name\":\"Lani\"},{\"name\":\"Gani\"},{\"name\":\"Cito\"},{\"name\":\"Hana\"},{\"name\":\"Nuri\"},{\"name\":\"Speed\"},{\"name\":\"Shine\"},{\"name\":\"Bong Bong\"},{\"name\":\"Carry\"},{\"name\":\"Pat\"},{\"name\":\"Rookie\"},{\"name\":\"Frank\"},{\"name\":\"Alice\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/tayo-buses.json?");

/***/ }),

/***/ "./src/data/tools.json":
/*!*****************************!*\
  !*** ./src/data/tools.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Adjustable Wrench\"},{\"name\":\"Bolt Cutter\"},{\"name\":\"Claw Hammer\"},{\"name\":\"Drill\"},{\"name\":\"End Nippers\"},{\"name\":\"Folding Knife\"},{\"name\":\"Glue Gun\"},{\"name\":\"Hacksaw\"},{\"name\":\"Impact Driver\"},{\"name\":\"Jack Plane\"},{\"name\":\"Knee Kicker\"},{\"name\":\"Level\"},{\"name\":\"Mallet\"},{\"name\":\"Nail Gun\"},{\"name\":\"Oil Filter Wrench\"},{\"name\":\"Pipe Wrench\"},{\"name\":\"Quick Clamp\"},{\"name\":\"Rivet Gun\"},{\"name\":\"Screwdriver\"},{\"name\":\"Tape Measure\"},{\"name\":\"Utility Knife\"},{\"name\":\"Vise\"},{\"name\":\"Wire Stripper\"},{\"name\":\"X-Acto Knife\"},{\"name\":\"Yardstick\"},{\"name\":\"Zinc Coated Nails\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/tools.json?");

/***/ }),

/***/ "./src/data/triangles.json":
/*!*********************************!*\
  !*** ./src/data/triangles.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Acute triangle\",\"Hint\":\"has all angles less than 90 degrees.\"},{\"name\":\"Equilateral triangle\",\"Hint\":\"has three equal sides.\"},{\"name\":\"Isosceles triangle\",\"Hint\":\"has two equal sides.\"},{\"name\":\"Obtuse triangle\",\"Hint\":\"has one angle greater than 90 degrees.\"},{\"name\":\"Right triangle\",\"Hint\":\"has one 90-degree angle.\"},{\"name\":\"Scalene triangle\",\"Hint\":\"has no equal sides.\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/triangles.json?");

/***/ }),

/***/ "./src/data/tropical-fruits.json":
/*!***************************************!*\
  !*** ./src/data/tropical-fruits.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Ambarella\"},{\"name\":\"Burmese Grape\"},{\"name\":\"Cempadak\"},{\"name\":\"Dragon Fruit\"},{\"name\":\"Egg Fruit\"},{\"name\":\"Ferroniella Lucida\"},{\"name\":\"Guava\"},{\"name\":\"Hazelnuts\"},{\"name\":\"Ice Apple\"},{\"name\":\"Jambolan Plum\"},{\"name\":\"Kaffir Lime\"},{\"name\":\"Longan\"},{\"name\":\"Mangosteen\"},{\"name\":\"Noni\"},{\"name\":\"Otaheite Gooseberry\"},{\"name\":\"Passion Fruit\"},{\"name\":\"Quenepa\"},{\"name\":\"Rambutan\"},{\"name\":\"Sapodilla\"},{\"name\":\"Tamarind\"},{\"name\":\"Uvaria Rufa\"},{\"name\":\"Velvet Tamarind\"},{\"name\":\"Wood Apple\"},{\"name\":\"Ximenia\"},{\"name\":\"Yellow Star Fruit\"},{\"name\":\"Ziziphus\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/tropical-fruits.json?");

/***/ }),

/***/ "./src/data/trucks.json":
/*!******************************!*\
  !*** ./src/data/trucks.json ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Armored Truck\"},{\"name\":\"Box Truck\"},{\"name\":\"Car Hauler Truck\"},{\"name\":\"Concrete Mixer Truck\"},{\"name\":\"Crane Truck\"},{\"name\":\"Delivery Truck\"},{\"name\":\"Dump Truck\"},{\"name\":\"Electric Truck\"},{\"name\":\"Fire Truck\"},{\"name\":\"Flatbed Truck\"},{\"name\":\"Food Truck\"},{\"name\":\"Garbage Truck\"},{\"name\":\"Heavy Duty Truck\"},{\"name\":\"Ice Cream Truck\"},{\"name\":\"Livestock Truck\"},{\"name\":\"Logging Truck\"},{\"name\":\"Mail Truck\"},{\"name\":\"Monster Truck\"},{\"name\":\"Moving Truck\"},{\"name\":\"Overlanding Truck\"},{\"name\":\"Pickup Truck\"},{\"name\":\"Propane Truck\"},{\"name\":\"Recycle Truck\"},{\"name\":\"Refrigerated Truck\"},{\"name\":\"Semi-Trailer Truck\"},{\"name\":\"Snow Plow Truck\"},{\"name\":\"Tanker Truck\"},{\"name\":\"Tow Truck\"},{\"name\":\"Utility Truck\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/trucks.json?");

/***/ }),

/***/ "./src/data/under-water.json":
/*!***********************************!*\
  !*** ./src/data/under-water.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Anemone\"},{\"name\":\"Barnacle\"},{\"name\":\"Clam\"},{\"name\":\"Dolphin\"},{\"name\":\"Eel\"},{\"name\":\"Fish\"},{\"name\":\"Gull\"},{\"name\":\"Hermit Crab\"},{\"name\":\"Jellyfish\"},{\"name\":\"Kelp\"},{\"name\":\"Lobster\"},{\"name\":\"Manatee\"},{\"name\":\"Nudibranch\"},{\"name\":\"Octopus\"},{\"name\":\"Penguin\"},{\"name\":\"Quahog\"},{\"name\":\"Ray\"},{\"name\":\"Sea Turtle\"},{\"name\":\"Seahorse\"},{\"name\":\"Shark\"},{\"name\":\"Starfish\"},{\"name\":\"Tuna\"},{\"name\":\"Urchin\"},{\"name\":\"Venus Flytrap\"},{\"name\":\"Whale\"},{\"name\":\"X-ray Tetra\"},{\"name\":\"Yellow Tang\"},{\"name\":\"Zebra Shark\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/under-water.json?");

/***/ }),

/***/ "./src/data/usa-capitals.json":
/*!************************************!*\
  !*** ./src/data/usa-capitals.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Montgomery\"},{\"name\":\"Juneau\"},{\"name\":\"Phoenix\"},{\"name\":\"Little Rock\"},{\"name\":\"Sacramento\"},{\"name\":\"Denver\"},{\"name\":\"Hartford\"},{\"name\":\"Dover\"},{\"name\":\"Tallahassee\"},{\"name\":\"Atlanta\"},{\"name\":\"Honolulu\"},{\"name\":\"Boise\"},{\"name\":\"Springfield\"},{\"name\":\"Indianapolis\"},{\"name\":\"Des Moines\"},{\"name\":\"Topeka\"},{\"name\":\"Frankfort\"},{\"name\":\"Baton Rouge\"},{\"name\":\"Augusta\"},{\"name\":\"Annapolis\"},{\"name\":\"Boston\"},{\"name\":\"Lansing\"},{\"name\":\"Saint Paul\"},{\"name\":\"Jackson\"},{\"name\":\"Jefferson City\"},{\"name\":\"Helena\"},{\"name\":\"Lincoln\"},{\"name\":\"Carson City\"},{\"name\":\"Concord\"},{\"name\":\"Trenton\"},{\"name\":\"Santa Fe\"},{\"name\":\"Albany\"},{\"name\":\"Raleigh\"},{\"name\":\"Bismarck\"},{\"name\":\"Columbus\"},{\"name\":\"Oklahoma City\"},{\"name\":\"Salem\"},{\"name\":\"Harrisburg\"},{\"name\":\"Providence\"},{\"name\":\"Columbia\"},{\"name\":\"Pierre\"},{\"name\":\"Nashville\"},{\"name\":\"Austin\"},{\"name\":\"Salt Lake City\"},{\"name\":\"Montpelier\"},{\"name\":\"Richmond\"},{\"name\":\"Olympia\"},{\"name\":\"Charleston\"},{\"name\":\"Madison\"},{\"name\":\"Cheyenne\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/usa-capitals.json?");

/***/ }),

/***/ "./src/data/usa-states.json":
/*!**********************************!*\
  !*** ./src/data/usa-states.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Alabama\"},{\"name\":\"Alaska\"},{\"name\":\"Arizona\"},{\"name\":\"Arkansas\"},{\"name\":\"California\"},{\"name\":\"Colorado\"},{\"name\":\"Connecticut\"},{\"name\":\"Delaware\"},{\"name\":\"Florida\"},{\"name\":\"Georgia\"},{\"name\":\"Hawaii\"},{\"name\":\"Idaho\"},{\"name\":\"Illinois\"},{\"name\":\"Indiana\"},{\"name\":\"Iowa\"},{\"name\":\"Kansas\"},{\"name\":\"Kentucky\"},{\"name\":\"Louisiana\"},{\"name\":\"Maine\"},{\"name\":\"Maryland\"},{\"name\":\"Massachusetts\"},{\"name\":\"Michigan\"},{\"name\":\"Minnesota\"},{\"name\":\"Mississippi\"},{\"name\":\"Missouri\"},{\"name\":\"Montana\"},{\"name\":\"Nebraska\"},{\"name\":\"Nevada\"},{\"name\":\"New Hampshire\"},{\"name\":\"New Jersey\"},{\"name\":\"New Mexico\"},{\"name\":\"New York\"},{\"name\":\"North Carolina\"},{\"name\":\"North Dakota\"},{\"name\":\"Ohio\"},{\"name\":\"Oklahoma\"},{\"name\":\"Oregon\"},{\"name\":\"Pennsylvania\"},{\"name\":\"Rhode Island\"},{\"name\":\"South Carolina\"},{\"name\":\"South Dakota\"},{\"name\":\"Tennessee\"},{\"name\":\"Texas\"},{\"name\":\"Utah\"},{\"name\":\"Vermont\"},{\"name\":\"Virginia\"},{\"name\":\"Washington\"},{\"name\":\"West Virginia\"},{\"name\":\"Wisconsin\"},{\"name\":\"Wyoming\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/usa-states.json?");

/***/ }),

/***/ "./src/data/vegetables.json":
/*!**********************************!*\
  !*** ./src/data/vegetables.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Arugula\"},{\"name\":\"Broccoli\"},{\"name\":\"Carrot\"},{\"name\":\"Daikon\"},{\"name\":\"Eggplant\"},{\"name\":\"Fennel\"},{\"name\":\"Garlic\"},{\"name\":\"Horseradish\"},{\"name\":\"Iceberg Lettuce\"},{\"name\":\"Jalapeño Pepper\"},{\"name\":\"Kale\"},{\"name\":\"Leek\"},{\"name\":\"Mushroom\"},{\"name\":\"Napa Cabbage\"},{\"name\":\"Olive\"},{\"name\":\"Pea\"},{\"name\":\"Quinoa\"},{\"name\":\"Radish\"},{\"name\":\"Spinach\"},{\"name\":\"Tomato\"},{\"name\":\"Urad Bean\"},{\"name\":\"Vidalia Onion\"},{\"name\":\"Watercress\"},{\"name\":\"Xigua (Watermelon)\"},{\"name\":\"Yellow Squash\"},{\"name\":\"Zucchini\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/vegetables.json?");

/***/ }),

/***/ "./src/data/vehicles.json":
/*!********************************!*\
  !*** ./src/data/vehicles.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Airplane\"},{\"name\":\"Bicycle\"},{\"name\":\"Car\"},{\"name\":\"Drone\"},{\"name\":\"Electric Scooter\"},{\"name\":\"Ferry\"},{\"name\":\"Golf Cart\"},{\"name\":\"Hoverboard\"},{\"name\":\"Jet Ski\"},{\"name\":\"Kayak\"},{\"name\":\"Limousine\"},{\"name\":\"Motorcycle\"},{\"name\":\"Narrowboat\"},{\"name\":\"Ox Cart\"},{\"name\":\"Pickup Truck\"},{\"name\":\"Quad Bike\"},{\"name\":\"Rickshaw\"},{\"name\":\"Scooter\"},{\"name\":\"Train\"},{\"name\":\"Unicycle\"},{\"name\":\"Van\"},{\"name\":\"Wagon\"},{\"name\":\"Xebec\"},{\"name\":\"Yacht\"},{\"name\":\"Zeppelin\"}]');\n\n//# sourceURL=webpack://flash-cards/./src/data/vehicles.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportWebVitals */ \"./src/reportWebVitals.js\");\n\n\n\n\nconst root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById(\"root\"));\nroot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\n\n// If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\n(0,_reportWebVitals__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack://flash-cards/./src/index.js?");

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reportWebVitals = onPerfEntry => {\n  if (onPerfEntry && onPerfEntry instanceof Function) {\n    __webpack_require__.e(/*! import() */ \"vendors-node_modules_web-vitals_dist_web-vitals_js\").then(__webpack_require__.bind(__webpack_require__, /*! web-vitals */ \"./node_modules/web-vitals/dist/web-vitals.js\")).then(_ref => {\n      let {\n        getCLS,\n        getFID,\n        getFCP,\n        getLCP,\n        getTTFB\n      } = _ref;\n      getCLS(onPerfEntry);\n      getFID(onPerfEntry);\n      getFCP(onPerfEntry);\n      getLCP(onPerfEntry);\n      getTTFB(onPerfEntry);\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportWebVitals);\n\n//# sourceURL=webpack://flash-cards/./src/reportWebVitals.js?");

/***/ }),

/***/ "./src/utility/audioUtils.js":
/*!***********************************!*\
  !*** ./src/utility/audioUtils.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playAudio: () => (/* binding */ playAudio)\n/* harmony export */ });\nfunction playAudio(clickedItemsLength, dataLength, goHomeCallback) {\n  if (clickedItemsLength > 0 && dataLength === clickedItemsLength) {\n    const crow = new Audio(\"/sounds/crowd2.mp3\");\n    crow.play();\n    const done = new Audio(\"/sounds/done.mp3\");\n    done.play();\n    setTimeout(goHomeCallback, 5000);\n  }\n  const milestones = [1, 5, 10, 15, 20, 25];\n  if (milestones.includes(clickedItemsLength)) {\n    let audioSrc = \"\";\n    switch (clickedItemsLength) {\n      case 5:\n        audioSrc = \"/sounds/3.mp3\";\n        break;\n      case 10:\n        audioSrc = \"/sounds/3.mp3\";\n        break;\n      case 15:\n        audioSrc = \"/sounds/3.mp3\";\n        break;\n      case 20:\n        audioSrc = \"/sounds/3.mp3\";\n        break;\n      case 25:\n        audioSrc = \"/sounds/6.mp3\";\n        break;\n      case 30:\n        audioSrc = \"/sounds/6.mp3\";\n        break;\n      default:\n        break;\n    }\n    if (audioSrc) {\n      const audio = new Audio(audioSrc);\n      audio.volume = 0.1;\n      audio.play();\n    }\n  }\n}\n\n//# sourceURL=webpack://flash-cards/./src/utility/audioUtils.js?");

/***/ }),

/***/ "./src/utility/colorUtils.js":
/*!***********************************!*\
  !*** ./src/utility/colorUtils.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHueColor: () => (/* binding */ getHueColor),\n/* harmony export */   getRandomColor: () => (/* binding */ getRandomColor)\n/* harmony export */ });\nconst getRandomColor = () => {\n  const minChannelValue = 5; // Adjust this threshold as needed\n  const randomChannel = () => (Math.floor(Math.random() * (256 - minChannelValue)) + minChannelValue).toString(16).padStart(2, \"0\");\n  const red = randomChannel();\n  const green = randomChannel();\n  const blue = randomChannel();\n  return `#${red}${green}${blue}`;\n};\nconst getHueColor = (index, total) => {\n  const step = 360 / total;\n  const hue = index * step;\n  return `hsl(${hue}, 100%, 50%)`;\n};\n\n//# sourceURL=webpack://flash-cards/./src/utility/colorUtils.js?");

/***/ }),

/***/ "./src/utility/imageUtils.js":
/*!***********************************!*\
  !*** ./src/utility/imageUtils.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getImage: () => (/* binding */ getImage),\n/* harmony export */   getImageHeight: () => (/* binding */ getImageHeight),\n/* harmony export */   getImageWidth: () => (/* binding */ getImageWidth)\n/* harmony export */ });\n// eslint-disable-next-line\nconst getImage = (item, type) => {\n  const localImageTypes = [\"planets\", \"shapes\", \"polygons\", \"triangles\", \"construction-vehicles\"];\n  if (localImageTypes.includes(type)) {\n    const imageName = item.name.replace(/\\s+/g, \"-\").toLowerCase();\n    return `/images/${type}/${imageName}.png`;\n  }\n  return `https://source.unsplash.com/300x300/?${encodeURIComponent(item.name)}`;\n};\n\n// eslint-disable-next-line\nconst getImageWidth = type => {\n  const localImageTypes = [\"planets\", \"shapes\", \"polygons\", \"triangles\", \"construction-vehicles\"];\n  if (localImageTypes.includes(type)) {\n    return `50%`;\n  }\n  return `100%`;\n};\nconst getImageHeight = type => {\n  const localImageTypes = [\"planets\", \"shapes\", \"polygons\", \"triangles\", \"construction-vehicles\"];\n  if (localImageTypes.includes(type)) {\n    return `auto`;\n  }\n  return `90%`;\n};\n\n//# sourceURL=webpack://flash-cards/./src/utility/imageUtils.js?");

/***/ }),

/***/ "./src/utility/pageUtils.js":
/*!**********************************!*\
  !*** ./src/utility/pageUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPageName: () => (/* binding */ getPageName),\n/* harmony export */   goHome: () => (/* binding */ goHome)\n/* harmony export */ });\nfunction getPageName(type) {\n  if (type && type.includes(\"-\")) {\n    return type.split(\"-\").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(\" \");\n  } else if (type) {\n    return type.charAt(0).toUpperCase() + type.slice(1);\n  }\n}\nfunction goHome() {\n  window.location.href = \"/\";\n}\n\n//# sourceURL=webpack://flash-cards/./src/utility/pageUtils.js?");

/***/ })

/******/ 	});
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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + "d51c23c3b8bc3f2a1bde" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "flash-cards:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkflash_cards"] = self["webpackChunkflash_cards"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_css_bootstrap_min_css-node_modules_react-dom_client_js-no-ae6878"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;