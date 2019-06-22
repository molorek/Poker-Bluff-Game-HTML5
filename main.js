/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../bamboo/css/style.css":
/*!*******************************!*\
  !*** ../bamboo/css/style.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:5)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> html {\\n|     width: 100%;\\n|     height: 100%;\");\n\n//# sourceURL=webpack:///../bamboo/css/style.css?");

/***/ }),

/***/ "../bamboo/js/bamboo.js":
/*!******************************!*\
  !*** ../bamboo/js/bamboo.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\tctaClick(game) {\r\n\t\tvar isDev = false;\r\n\t\t\r\n\t\ttry {\r\n\t\t\tif (`${PLATFORM}`) {\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t} catch (err) {\r\n\t\t\tisDev = true;\r\n\t\t}\r\n\t\t\r\n\t\t\r\n\t\tif (!isDev) {\r\n\t\t\tswitch (`${PLATFORM}`) {\r\n\t\t\t\tcase \"facebook\":\r\n\t\t\t\t\tFbPlayableAd.onCTAClick();\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"tapjoy\":\r\n\t\t\t\t\twindow.TJ_API.click();\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"criticalhit\":\r\n\t\t\t\tcase \"applovin\":\r\n\t\t\t\tcase \"lifestreet\":\r\n\t\t\t\tcase \"unity\":\r\n\t\t\t\tcase \"manage\":\r\n\t\t\t\t\tif (game.device.android)\r\n\t\t\t\t\t\tmraid.open(playStoreURL)\r\n\t\t\t\t\telse\r\n\t\t\t\t\t\tmraid.open(iTunesURL)\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"adcolony\":\r\n\t\t\t\t\tif (game.device.android)\r\n\t\t\t\t\t\tmraid.openStore(playStoreURL)\r\n\t\t\t\t\telse\r\n\t\t\t\t\t\tmraid.openStore(iTunesURL)\t\t\t\t\t\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"appreciate\":\r\n\t\t\t\t\tAppreciate.openLandingPage();\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"ironsource\":\r\n\t\t\t\t\tdapi.openStoreUrl();\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"server\":\r\n\t\t\t\tcase \"playable\":\r\n\t\t\t\t\tif (game.device.desktop) {\r\n\t\t\t\t\t\tif (game.device.android)\r\n\t\t\t\t\t\t\twindow.open(playStoreURL)\r\n\t\t\t\t\t\telse\r\n\t\t\t\t\t\t\twindow.open(iTunesURL)\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tif (game.device.android)\r\n\t\t\t\t\t\t\twindow.open(playStoreURL, \"_self\");\r\n\t\t\t\t\t\telse\r\n\t\t\t\t\t\t\twindow.open(iTunesURL, \"_self\");\r\n\t\t\t\t\t}\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"adwords\":\r\n\t\t\t\t\twindow.open(ExitApi.exit());\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"doubleclick\":\r\n\t\t\t\t\tif (game.device.android)\r\n\t\t\t\t\t\twindow.open(window.clickTag2)\r\n\t\t\t\t\telse\r\n\t\t\t\t\t\twindow.open(window.clickTag1)\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"vungle\":\r\n\t\t\t\t\tparent.postMessage('download','*')\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t\r\n\t\t\t}\t\r\n\t\t} else {\r\n\t\t\tconsole.log(\"CTA Clicked\");\r\n\t\t}\r\n\t}\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///../bamboo/js/bamboo.js?");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var config = {\r\n    timeOut: {\r\n        value: 30000,\r\n        min: 5000,\r\n        max: 120000,\r\n        type: \"int\",\r\n        default: 30000,\r\n        description: \"Inactivity time out (5000 to 120000) in milliseconds\"\r\n    },\r\n\r\n    retries: {\r\n        value: 3,\r\n        min: 0,\r\n        max: 10,\r\n        type: \"int\",\r\n        default: 3,\r\n        description: \"Number of times player can replay\"\r\n    },\r\n\r\n    showTutorial: {\r\n        value: true,\r\n        min: false,\r\n        max: true,\r\n        type: \"boolean\",\r\n        default: false,\r\n        description: \"Show tutorial phase?\"\r\n    },\r\n};\r\n\r\ntry {\r\n    module.exports = config;\r\n} catch(err) {\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./config.js?");

/***/ }),

/***/ "./fonts/fonts.css":
/*!*************************!*\
  !*** ./fonts/fonts.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @font-face {font-family: 'BebasNeue Bold'; src: url('../fonts/BebasNeue Bold.otf');}@font-face {font-family: 'Lato-Reg'; src: url('../fonts/Lato-Reg.ttf');}@font-face {font-family: 'MyriadPro-Cond_0'; src: url('../fonts/MyriadPro-Cond_0.otf');}\");\n\n//# sourceURL=webpack:///./fonts/fonts.css?");

/***/ }),

/***/ "./info.js":
/*!*****************!*\
  !*** ./info.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var info = {\r\n    playableTitle: \"Grimpanda Template\",\r\n    repoName: \"template\",\r\n\tversion: \"template - 1.0\",\r\n    googleStore: 'https://play.google.com/',\r\n    appleStore: 'https://itunes.apple.com/us/',    \r\n    fonts: ['BebasNeue Bold.otf', 'Lato-Reg.ttf', 'MyriadPro-Cond_0.otf'],\r\n\tbitmapFonts: ['AmaranteRegular'],\r\n    images: ['bg_gradient.png', 'cta-lose.jpg', 'cta-win.jpg', 'table.png'],\r\n    sheets: ['sheet.png'],\r\n\tsounds: [],\r\n    spriter: \"\",\r\n    showClose: false,\r\n    usePhysics: false\r\n};\r\n\r\ntry {\r\n    module.exports = info;\r\n} catch(err) {\r\n\r\n}\n\n//# sourceURL=webpack:///./info.js?");

/***/ }),

/***/ "./src/Game/Rooms/RoomController.js":
/*!******************************************!*\
  !*** ./src/Game/Rooms/RoomController.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RoomController; });\nclass RoomController extends Phaser.GameObjectFactory {\r\n    create() {\r\n        console.log('Drippin Fiji');\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/Game/Rooms/RoomController.js?");

/***/ }),

/***/ "./src/data/images.js":
/*!****************************!*\
  !*** ./src/data/images.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"bg_gradient\":\"images/bg_gradient.png\",\"cta-lose\":\"images/cta-lose.jpg\",\"cta-win\":\"images/cta-win.jpg\",\"table\":\"images/table.png\",\"AmaranteRegular\":\"images/AmaranteRegular\"});\n\n//# sourceURL=webpack:///./src/data/images.js?");

/***/ }),

/***/ "./src/data/json.js":
/*!**************************!*\
  !*** ./src/data/json.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"sheet\":\"sheet/sheet\"});\n\n//# sourceURL=webpack:///./src/data/json.js?");

/***/ }),

/***/ "./src/data/landscape.js":
/*!*******************************!*\
  !*** ./src/data/landscape.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    gameWidth: 960,\r\n    gameHeight: 540\r\n});\n\n//# sourceURL=webpack:///./src/data/landscape.js?");

/***/ }),

/***/ "./src/data/portrait.js":
/*!******************************!*\
  !*** ./src/data/portrait.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    gameWidth: 540,\r\n    gameHeight: 960\r\n});\n\n//# sourceURL=webpack:///./src/data/portrait.js?");

/***/ }),

/***/ "./src/data/sheets.js":
/*!****************************!*\
  !*** ./src/data/sheets.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"sheet\":\"sheet/sheet.png\"});\n\n//# sourceURL=webpack:///./src/data/sheets.js?");

/***/ }),

/***/ "./src/data/sounds.js":
/*!****************************!*\
  !*** ./src/data/sounds.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n//# sourceURL=webpack:///./src/data/sounds.js?");

/***/ }),

/***/ "./src/dimensions.js":
/*!***************************!*\
  !*** ./src/dimensions.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    gameWidth: 540,\r\n    gameHeight: 960,\r\n    actualWidth: 0,\r\n    actualHeight: 0,\r\n    fullWidth: 0,\r\n    fullHeight: 0,\r\n    leftOffset: 0,\r\n    rightOffset: 0,\r\n    topOffset: 0,\r\n    bottomOffset: 0,\r\n    isPortrait: true,\r\n    isLandscape: false\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/dimensions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bamboo_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bamboo/css/style.css */ \"../bamboo/css/style.css\");\n/* harmony import */ var _bamboo_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bamboo_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fonts_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fonts/fonts.css */ \"./fonts/fonts.css\");\n/* harmony import */ var _fonts_fonts_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_1__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'pixi'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'phaser'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../config.js */ \"./config.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../info.js */ \"./info.js\");\n/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_info_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n\r\n\r\n\r\n//Uncomment if using physics or phaser emitter (set usePhyscis in info to be true)\r\n//import 'p2'\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//Uncomment if using spriter\r\n//import Spriter from './../src/external/spriter.js'\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _states_Boot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./states/Boot.js */ \"./src/states/Boot.js\");\n/* harmony import */ var _states_Preloader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states/Preloader.js */ \"./src/states/Preloader.js\");\n/* harmony import */ var _states_Game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/Game.js */ \"./src/states/Game.js\");\n/* harmony import */ var _dimensions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dimensions.js */ \"./src/dimensions.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Game extends Phaser.Game {\r\n    constructor () {\r\n        let ratio = 1;\r\n\r\n        if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI)\r\n            ratio = window.screen.systemXDPI / window.screen.logicalXDPI;\r\n        else if (window.devicePixelRatio !== undefined)\r\n            ratio = window.devicePixelRatio;\r\n\r\n        try {\r\n            let size = dapi.getScreenSize();\r\n\r\n            _dimensions_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fullWidth = size.width;\r\n            _dimensions_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fullHeight = size.height;\r\n        } catch(e) {\r\n            _dimensions_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fullWidth = window.innerWidth * ratio;\r\n            _dimensions_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fullHeight = window.innerHeight * ratio;\r\n        }\r\n\r\n        super(_dimensions_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fullWidth, _dimensions_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fullHeight, Phaser.CANVAS, 'content', null)\r\n\r\n        this.state.add('Boot', _states_Boot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], false);\r\n        this.state.add('Preloader', _states_Preloader_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], false);\r\n        this.state.add('Game', _states_Game_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], false);\r\n\r\n        this.state.start('Boot');\r\n    }\r\n}\r\n\r\nvar hasDAPI, hasMraid;\r\n\r\ntry {\r\n    hasDAPI = dapi;\r\n} catch (e) {\r\n    try {\r\n        hasMraid = mraid;\r\n    } catch (e){\r\n        // facebook and server\r\n        window.game = new Game();\r\n    }\r\n}\r\n\r\nvar onMraidReadyCallback = function () {\r\n    window.game = new Game();\r\n}\r\n\r\nvar onDapiReadyCallback = function () {\r\n    dapi.removeEventListener(\"ready\", onDapiReadyCallback);\r\n    (dapi.isViewable()) ? onDapiViewableCallback() : dapi.addEventListener(\"viewableChange\", onDapiViewableCallback);\r\n}\r\n\r\nvar onDapiViewableCallback = function () {\r\n    dapi.removeEventListener(\"viewableChange\", onDapiViewableCallback);\r\n    window.game = new Game();\r\n}\r\n\r\nif (hasDAPI) {\r\n    (dapi.isReady()) ? onDapiReadyCallback() : dapi.addEventListener(\"ready\", onDapiReadyCallback);\r\n} else if (hasMraid) {\r\n    if (mraid.getState() == 'loading') {\r\n        mraid.addEventListener(\"ready\", onMraidReadyCallback);\r\n    } else {\r\n        onMraidReadyCallback();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/objects/cta.js":
/*!****************************!*\
  !*** ./src/objects/cta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CTA; });\n/* harmony import */ var _dimensions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dimensions.js */ \"./src/dimensions.js\");\n/* harmony import */ var _bamboo_js_bamboo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bamboo/js/bamboo.js */ \"../bamboo/js/bamboo.js\");\n\r\n\r\n\r\nclass CTA extends Phaser.Group {\r\n    constructor(game, parent) {\r\n        super(game, parent);\r\n\r\n        this.init();\r\n    }\r\n\r\n    click() {        \r\n        _bamboo_js_bamboo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ctaClick(this.game);\r\n    }\r\n\r\n    show() {\r\n        // Never show CTA twice\r\n        if (this.visible)\r\n            return;\r\n\r\n        params.retries.value--;\r\n\r\n        if (params.retries.value <= 0)\r\n            this.retryBtn.visible = false;\r\n\r\n        this.retryBtn.alpha = 0;\r\n\r\n        this.visible = true;\r\n        this.alpha = 0;\r\n\r\n        this.ctaButton.visible = false;\r\n\r\n        this.game.add.tween(this).to({alpha: 1}, 250, Phaser.Easing.Linear.None, true).onComplete.add(function () {\r\n            this.ctaButton.visible = true;\r\n            this.game.add.tween(this.ctaButton).from({y: _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topOffset - this.ctaButton.height}, 2000, Phaser.Easing.Bounce.Out, true).onComplete.add(function () {\r\n\r\n                // Tween on cta button should never be looped be more than once according to google standards\r\n                this.game.add.tween(this.ctaButton.scale).to({x: 0.9, y: 0.9}, 1000, Phaser.Easing.Linear.None, true, 0, 1, true);\r\n                this.game.add.tween(this.retryBtn).to({alpha: 1}, 250, \"Linear\", false).start();\r\n            }.bind(this));\r\n        }.bind(this));\r\n    }\r\n\r\n    adjust() {\r\n        // Write responsive code here if needed\r\n        this.bg.width = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualWidth;\r\n        this.bg.height = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualHeight;\r\n        this.bg.x = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].leftOffset;\r\n        this.bg.y = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topOffset;\r\n\r\n        this.ctaButton.x = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameWidth / 2;\r\n        this.ctaButton.y = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameHeight / 2;\r\n\r\n        this.retryBtn.x = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rightOffset - 50;\r\n        this.retryBtn.y = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bottomOffset - 50;\r\n    }\r\n\r\n    init() {\r\n        this.bg = this.game.add.graphics(_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].leftOffset, _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topOffset);\r\n        this.bg.beginFill(0x000000, 0.84);\r\n        this.bg.drawRect(0, 0, _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualWidth, _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualHeight);\r\n        this.bg.endFill();\r\n\r\n        this.bg.inputEnabled = true;\r\n        this.bg.events.onInputDown.add(this.click.bind(this));\r\n\r\n        this.add(this.bg);\r\n\r\n        this.ctaButton = this.game.add.text(_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameWidth / 2, _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameHeight / 2, texts.cta, {font: \"toronto-subway-bold\", fontSize: 90, fill: \"#ffffff\"});\r\n        this.ctaButton.anchor.set(0.5);\r\n        this.add(this.ctaButton);\r\n\r\n        this.retryBtn = this.game.add.bitmapText(_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rightOffset - 50, _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bottomOffset - 50, \"AmaranteRegular\", texts.retry, 45);\r\n        this.retryBtn.anchor.set(1);\r\n        this.add(this.retryBtn);\r\n\r\n        this.retryBtn.inputEnabled = true;\r\n        this.retryBtn.events.onInputDown.add(function () {\r\n            this.game.state.start('Game');\r\n        }.bind(this));\r\n\r\n        this.visible = false\r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/objects/cta.js?");

/***/ }),

/***/ "./src/sounds.js":
/*!***********************!*\
  !*** ./src/sounds.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    \r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/sounds.js?");

/***/ }),

/***/ "./src/states/Boot.js":
/*!****************************!*\
  !*** ./src/states/Boot.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dimensions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dimensions.js */ \"./src/dimensions.js\");\n/* harmony import */ var _data_portrait_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/portrait.js */ \"./src/data/portrait.js\");\n/* harmony import */ var _data_landscape_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/landscape.js */ \"./src/data/landscape.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (class extends Phaser.State {\r\n    init () {\r\n        this.stage.backgroundColor = '#000000'\r\n        this.stage.disableVisibilityChange = true;\r\n        this.scale.pageAlignHorizontally = true;\r\n\r\n        try {\r\n            if (dapi) {\r\n                this.scale.scaleMode = Phaser.ScaleManager.NONE;\r\n            }\r\n        } catch (error) {\r\n            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;\r\n        }\r\n\r\n        this.scale.refresh();\r\n\r\n        if (game_orientation == \"portrait\") {\r\n            _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isPortrait = true;\r\n        } else if (game_orientation == \"landscape\") {\r\n            _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isPortrait = false;\r\n        } else {\r\n            _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isPortrait = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fullWidth < _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fullHeight;\r\n        }\r\n\r\n        _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isLandscape = !_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isPortrait;\r\n\r\n        let mode = _data_portrait_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n\r\n        if (_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isLandscape)\r\n            mode = _data_landscape_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n\r\n        _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameWidth = mode.gameWidth;\r\n        _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameHeight = mode.gameHeight;\r\n\r\n        this.validateParams();\r\n\r\n        try {\r\n            if (`${MODE}` !== \"separate\") {\r\n                // Special overrides to fix facebook and xhr problem with sounds\r\n                this.game.load.loadFile = function (file)\r\n                {\r\n\r\n                    //  Image or Data?\r\n                    switch (file.type)\r\n                    {\r\n                        case 'packfile':\r\n                            this.xhrLoad(file, this.transformUrl(file.url, file), 'text', this.fileComplete);\r\n                            break;\r\n\r\n                        case 'image':\r\n                        case 'spritesheet':\r\n                        case 'textureatlas':\r\n                        case 'bitmapfont':\r\n                            this.loadImageTag(file);\r\n                            break;\r\n\r\n                        case 'audio':\r\n                            file.url = this.getAudioURL(file.url);\r\n                            file.url = file.url.replace(\"data:\", \"\");\r\n\r\n                            if (file.url)\r\n                            {\r\n                                //  WebAudio or Audio Tag?\r\n                                if (this.game.sound.usingWebAudio)\r\n                                {\r\n\r\n                                    var binary_string =  window.atob(file.url);\r\n                                    var len = binary_string.length;\r\n                                    var bytes = new Uint8Array( len );\r\n                                    for (var i = 0; i < len; i++)        {\r\n                                        bytes[i] = binary_string.charCodeAt(i);\r\n                                    }\r\n\r\n                                    //this.xhrLoad(file, this.transformUrl(file.url, file), 'arraybuffer', this.fileComplete);\r\n                                    this.fileComplete(file, bytes.buffer)\r\n                                }\r\n                                else if (this.game.sound.usingAudioTag)\r\n                                {\r\n                                    this.loadAudioTag(file);\r\n                                }\r\n                            }\r\n                            else\r\n                            {\r\n                                this.fileError(file, null, 'No supported audio URL specified or device does not have audio playback support');\r\n                            }\r\n                            break;\r\n\r\n                        case 'video':\r\n                            file.url = this.getVideoURL(file.url);\r\n\r\n                            if (file.url)\r\n                            {\r\n                                if (file.asBlob)\r\n                                {\r\n                                    this.xhrLoad(file, this.transformUrl(file.url, file), 'blob', this.fileComplete);\r\n                                }\r\n                                else\r\n                                {\r\n                                    this.loadVideoTag(file);\r\n                                }\r\n                            }\r\n                            else\r\n                            {\r\n                                this.fileError(file, null, 'No supported video URL specified or device does not have video playback support');\r\n                            }\r\n                            break;\r\n\r\n                        case 'json':\r\n\r\n                            this.xhrLoad(file, this.transformUrl(file.url, file), 'text', this.jsonLoadComplete);\r\n                            break;\r\n\r\n                        case 'xml':\r\n\r\n                            this.xhrLoad(file, this.transformUrl(file.url, file), 'text', this.xmlLoadComplete);\r\n                            break;\r\n\r\n                        case 'tilemap':\r\n\r\n                            if (file.format === Phaser.Tilemap.TILED_JSON)\r\n                            {\r\n                                this.xhrLoad(file, this.transformUrl(file.url, file), 'text', this.jsonLoadComplete);\r\n                            }\r\n                            else if (file.format === Phaser.Tilemap.CSV)\r\n                            {\r\n                                this.xhrLoad(file, this.transformUrl(file.url, file), 'text', this.csvLoadComplete);\r\n                            }\r\n                            else\r\n                            {\r\n                                this.asyncComplete(file, 'invalid Tilemap format: ' + file.format);\r\n                            }\r\n                            break;\r\n\r\n                        case 'text':\r\n                        case 'script':\r\n                        case 'shader':\r\n                        case 'physics':\r\n                            this.xhrLoad(file, this.transformUrl(file.url, file), 'text', this.fileComplete);\r\n                            break;\r\n\r\n                        case 'texture':\r\n\r\n                            if (file.key.split('_').pop() === 'truecolor')\r\n                            {\r\n                                this.loadImageTag(file);\r\n                            }\r\n                            else\r\n                            {\r\n                                this.xhrLoad(file, this.transformUrl(file.url, file), 'arraybuffer', this.fileComplete);\r\n                            }\r\n                            break;\r\n\r\n                        case 'binary':\r\n                            this.xhrLoad(file, this.transformUrl(file.url, file), 'arraybuffer', this.fileComplete);\r\n                            break;\r\n                    }\r\n\r\n                }.bind(this.game.load);\r\n\r\n                this.game.load.fileComplete = function (file, xhr)\r\n                {\r\n\r\n                    var loadNext = true;\r\n\r\n                    switch (file.type)\r\n                    {\r\n                        case 'packfile':\r\n\r\n                            // Pack data must never be false-ish after it is fetched without error\r\n                            var data = JSON.parse(xhr.responseText);\r\n                            file.data = data || {};\r\n                            break;\r\n\r\n                        case 'texture':\r\n\r\n                            var extension = (/\\.([^.]+)$/).exec(file.url.split('?', 1)[0])[1].toLowerCase();\r\n                            if (file.data !== null)\r\n                            {\r\n                                this.cache.addCompressedTextureMetaData(file.key, file.url, extension, file.data);\r\n                            }\r\n                            else\r\n                            {\r\n                                this.cache.addCompressedTextureMetaData(file.key, file.url, extension, xhr.response);\r\n                            }\r\n                            break;\r\n\r\n                        case 'image':\r\n\r\n                            this.cache.addImage(file.key, file.url, file.data);\r\n                            break;\r\n\r\n                        case 'spritesheet':\r\n\r\n                            this.cache.addSpriteSheet(file.key, file.url, file.data, file.frameWidth, file.frameHeight, file.frameMax, file.margin, file.spacing, file.skipFrames);\r\n                            break;\r\n\r\n                        case 'textureatlas':\r\n\r\n                            if (file.atlasURL == null)\r\n                            {\r\n                                this.cache.addTextureAtlas(file.key, file.url, file.data, file.atlasData, file.format);\r\n                            }\r\n                            else\r\n                            {\r\n                                //  Load the JSON or XML before carrying on with the next file\r\n                                loadNext = false;\r\n\r\n                                if (file.format === Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY || file.format === Phaser.Loader.TEXTURE_ATLAS_JSON_HASH || file.format === Phaser.Loader.TEXTURE_ATLAS_JSON_PYXEL)\r\n                                {\r\n                                    this.xhrLoad(file, this.transformUrl(file.atlasURL, file), 'text', this.jsonLoadComplete);\r\n                                }\r\n                                else if (file.format === Phaser.Loader.TEXTURE_ATLAS_XML_STARLING)\r\n                                {\r\n                                    this.xhrLoad(file, this.transformUrl(file.atlasURL, file), 'text', this.xmlLoadComplete);\r\n                                }\r\n                                else\r\n                                {\r\n                                    throw new Error('Phaser.Loader. Invalid Texture Atlas format: ' + file.format);\r\n                                }\r\n                            }\r\n                            break;\r\n\r\n                        case 'bitmapfont':\r\n\r\n                            if (!file.atlasURL)\r\n                            {\r\n                                this.cache.addBitmapFont(file.key, file.url, file.data, file.atlasData, file.atlasType, file.xSpacing, file.ySpacing);\r\n                            }\r\n                            else\r\n                            {\r\n                                //  Load the XML before carrying on with the next file\r\n                                loadNext = false;\r\n                                this.xhrLoad(file, this.transformUrl(file.atlasURL, file), 'text', function (file, xhr)\r\n                                {\r\n                                    var json;\r\n\r\n                                    try\r\n                                    {\r\n                                        // Try to parse as JSON, if it fails, then it's hopefully XML\r\n                                        json = JSON.parse(xhr.responseText);\r\n                                    }\r\n                                    catch (e) {}\r\n\r\n                                    if (json)\r\n                                    {\r\n                                        file.atlasType = 'json';\r\n                                        this.jsonLoadComplete(file, xhr);\r\n                                    }\r\n                                    else\r\n                                    {\r\n                                        file.atlasType = 'xml';\r\n                                        this.xmlLoadComplete(file, xhr);\r\n                                    }\r\n                                });\r\n                            }\r\n                            break;\r\n\r\n                        case 'video':\r\n\r\n                            if (file.asBlob)\r\n                            {\r\n                                try\r\n                                {\r\n                                    file.data = xhr.response;\r\n                                }\r\n                                catch (e)\r\n                                {\r\n                                    throw new Error('Phaser.Loader. Unable to parse video file as Blob: ' + file.key);\r\n                                }\r\n                            }\r\n\r\n                            this.cache.addVideo(file.key, file.url, file.data, file.asBlob);\r\n                            break;\r\n\r\n                        case 'audio':\r\n\r\n\r\n                            if (this.game.sound.usingWebAudio)\r\n                            {\r\n                                file.data = xhr;\r\n\r\n                                this.cache.addSound(file.key, file.url, file.data, true, false);\r\n\r\n                                if (file.autoDecode)\r\n                                {\r\n                                    this.game.sound.decode(file.key);\r\n                                }\r\n                            }\r\n                            else\r\n                            {\r\n                                this.cache.addSound(file.key, file.url, file.data, false, true);\r\n                            }\r\n                            break;\r\n\r\n                        case 'text':\r\n                            file.data = xhr.responseText;\r\n                            this.cache.addText(file.key, file.url, file.data);\r\n                            break;\r\n\r\n                        case 'shader':\r\n                            file.data = xhr.responseText;\r\n                            this.cache.addShader(file.key, file.url, file.data);\r\n                            break;\r\n\r\n                        case 'physics':\r\n                            var data = JSON.parse(xhr.responseText);\r\n                            this.cache.addPhysicsData(file.key, file.url, data, file.format);\r\n                            break;\r\n\r\n                        case 'script':\r\n                            file.data = document.createElement('script');\r\n                            file.data.language = 'javascript';\r\n                            file.data.type = 'text/javascript';\r\n                            file.data.defer = false;\r\n                            file.data.text = xhr.responseText;\r\n                            document.head.appendChild(file.data);\r\n                            if (file.callback)\r\n                            {\r\n                                file.data = file.callback.call(file.callbackContext, file.key, xhr.responseText);\r\n                            }\r\n                            break;\r\n\r\n                        case 'binary':\r\n                            if (file.callback)\r\n                            {\r\n                                file.data = file.callback.call(file.callbackContext, file.key, xhr.response);\r\n                            }\r\n                            else\r\n                            {\r\n                                file.data = xhr.response;\r\n                            }\r\n\r\n                            this.cache.addBinary(file.key, file.data);\r\n\r\n                            break;\r\n                    }\r\n\r\n                    if (loadNext)\r\n                    {\r\n                        this.asyncComplete(file);\r\n                    }\r\n\r\n                }.bind(this.game.load);\r\n            }\r\n        } catch (error) {\r\n\r\n        }\r\n    }\r\n\r\n    validateParams() {\r\n        for (let param in params) {\r\n            if (params.hasOwnProperty(param)) {\r\n                if (config[param].type == \"int\" || config[param].type == \"integer\") {\r\n                    params[param].value = parseFloat(params[param].value);\r\n\r\n                    if (isNaN(params[param].value)) {\r\n                        console.log(\"Found bad parameter: \" + param + \". Reverting it to default.\")\r\n                        params[param].value = config[param].default;\r\n                    }\r\n\r\n                    if (params[param].value < config[param].min) {\r\n                        console.log(\"Found parameter value of : \" + param + \" outside range. Setting it to minimum value.\")\r\n                        params[param].value = config[param].min;\r\n                    }\r\n\r\n                    if (params[param].value > config[param].max) {\r\n                        console.log(\"Found parameter value of : \" + param + \" outside range. Setting it to maximum value.\")\r\n                        params[param].value = config[param].max;\r\n                    }\r\n                } else {\r\n                    params[param].value = !!(params[param].value);\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    preload () {\r\n\r\n    }\r\n\r\n    create () {\r\n        this.state.start('Preloader');\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/states/Boot.js?");

/***/ }),

/***/ "./src/states/Game.js":
/*!****************************!*\
  !*** ./src/states/Game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameState; });\n/* harmony import */ var _dimensions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dimensions.js */ \"./src/dimensions.js\");\n/* harmony import */ var _data_portrait_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/portrait.js */ \"./src/data/portrait.js\");\n/* harmony import */ var _data_landscape_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/landscape.js */ \"./src/data/landscape.js\");\n/* harmony import */ var _sounds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sounds.js */ \"./src/sounds.js\");\n/* harmony import */ var _objects_cta_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../objects/cta.js */ \"./src/objects/cta.js\");\n/* harmony import */ var _Game_Rooms_RoomController_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Game/Rooms/RoomController.js */ \"./src/Game/Rooms/RoomController.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Include to use Spriter, use Spriter Sprite helper class to make spriter animations\r\n//import SpriteSprite from '../objects/spriter-sprite.js'\r\n//import json from '../data/json.js'\r\n\r\nclass GameState extends Phaser.State {\r\n    init () {\r\n        this.game.main = this;\r\n        this.ctaShown = false;\r\n        this.createSounds();\r\n    }\r\n\r\n    create() {\r\n        this.setGameScale();\r\n\r\n        this.stage.backgroundColor = '#000000';\r\n        this.game.gameState = this;\r\n\r\n        this.supergroup = this.game.add.group();\r\n        this.gameGroup = this.game.add.group();\r\n        this.supergroup.add(this.gameGroup);\r\n\r\n        this.createClose();\r\n\r\n        this.createEnvironment();\r\n\r\n        this.setPositions();\r\n\r\n        try {\r\n            dapi.addEventListener(\"adResized\", this.gameResized.bind(this));\r\n            dapi.addEventListener(\"audioVolumeChange\", this.setAudioVolume);\r\n\r\n            this.setAudioVolume(dapi.getAudioVolume());\r\n        } catch(error) {\r\n            this.scale.setResizeCallback(this.gameResized, this);\r\n        }\r\n\r\n        this.game.onBlur.add(this.onPause, this);\r\n        this.game.onFocus.add(this.onResume, this);\r\n\r\n        this.gameResized();\r\n        this.loaded = false;\r\n\r\n        new _Game_Rooms_RoomController_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\r\n\r\n        try {\r\n            if (`${PLATFORM}` !== \"applovin\") {\r\n                this.ctaTimeOut = this.game.time.events.add(params.timeOut.value, this.showCTA.bind(this));\r\n\r\n                this.game.input.onDown.add(function () {\r\n                    this.game.time.events.remove(this.ctaTimeOut);\r\n                    this.ctaTimeOut = this.game.time.events.add(params.timeOut.value, this.showCTA.bind(this));\r\n                }.bind(this));\r\n            }\r\n        } catch(error) {\r\n            this.ctaTimeOut = this.game.time.events.add(params.timeOut.value, this.showCTA.bind(this));\r\n\r\n            this.game.input.onDown.add(function () {\r\n                this.game.time.events.remove(this.ctaTimeOut);\r\n                this.ctaTimeOut = this.game.time.events.add(params.timeOut.value, this.showCTA.bind(this));\r\n            }.bind(this));\r\n        }\r\n\r\n        if (this.game.device.iOS) {\r\n            this.game.input.onDown.add(this.firstTouch.bind(this));\r\n            this.game.sound.mute = true;\r\n        }\r\n    }\r\n\r\n    onPause() {\r\n        if (!this.game.device.iOS)\r\n            this.game.sound.pauseAll();\r\n    }\r\n\r\n    onResume() {\r\n        if (!this.game.device.iOS)\r\n            this.game.sound.resumeAll();\r\n    }\r\n\r\n    setAudioVolume(volume) {\r\n        game.sound.volume = volume / 100;\r\n    }\r\n\r\n    update() {\r\n\r\n    }\r\n\r\n    // call only if you are using spriter animations (needs to import spriter library)\r\n    loadSpriterData() {\r\n        try {\r\n            if (`${MODE}` == \"separate\")\r\n                json.spriter = this.game.cache.getJSON('spriter');\r\n        } catch(error) {\r\n            json.spriter = this.game.cache.getJSON('spriter');\r\n        }\r\n\r\n\r\n        this.spriterLoader = new Spriter.Loader();\r\n        this.spriterData = this.spriterLoader.load(new Spriter.SpriterJSON(json.spriter, {imageNameType: Spriter.eImageNameType.NAME }));\r\n    }\r\n\r\n    // call back for whenever a spriter sprite animation ends\r\n    spriterAnimationEnd(entity, animation) {\r\n\r\n    }\r\n\r\n    showCTA() {\r\n        if (this.cta.visible)\r\n            return;\r\n\r\n        try {\r\n            if (`${PLATFORM}` === \"tapjoy\") {\r\n                if (this.ctaShown)\r\n                    return;\r\n\r\n                this.ctaShown = true;\r\n                window.TJ_API.objectiveComplete();\r\n                window.TJ_API.gameplayFinished();\r\n\r\n                if (window.TJ_API.directives.showEndCard) {\r\n                    this.gameGroup.bringToTop(this.cta);\r\n                    this.cta.show();\r\n                } else {\r\n\r\n                }\r\n            } else {\r\n                this.gameGroup.bringToTop(this.cta);\r\n                this.cta.show();\r\n            }\r\n        } catch (err) {\r\n            this.gameGroup.bringToTop(this.cta);\r\n            this.cta.show();\r\n        }\r\n    }\r\n\r\n    firstTouch() {\r\n        this.game.sound.stopAll();\r\n        this.game.sound.mute = false;\r\n\r\n        this.game.input.onDown.removeAll();\r\n\r\n        this.game.input.onDown.add(function () {\r\n            this.game.time.events.remove(this.ctaTimeOut);\r\n            this.ctaTimeOut = this.game.time.events.add(params.timeOut.value, this.showCTA.bind(this));\r\n        }.bind(this));\r\n    }\r\n\r\n    createClose() {\r\n        try {\r\n            if (!(`${PLATFORM}` == \"criticalhit\" || (`${PLATFORM}` == \"server\" && info.showClose)))\r\n                return;\r\n        } catch (err) {\r\n            return;\r\n        }\r\n\r\n        try {\r\n            if (closeTimer) {\r\n\r\n            } else {\r\n                closeTimer = 5;\r\n            }\r\n        } catch (error) {\r\n            var closeTimer = 5;\r\n        }\r\n\r\n        this.closeBtn = this.game.add.text(_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualWidth - 20, 20, \"X\", {font: \"Amarante-Regular\", fontSize: 90, fill: \"#000000\"});\r\n        this.closeBtn.anchor.set(1, 0);\r\n        this.supergroup.add(this.closeBtn);\r\n\r\n        this.closeBtn.inputEnabled = true;\r\n        this.closeBtn.events.onInputDown.add(function () {\r\n            this.game.sound.stopAll();\r\n            this.game.sound.mute = true;\r\n            try {\r\n                mraid.close();\r\n            } catch (error) {\r\n                while (document.body.hasChildNodes()) {\r\n                    document.body.removeChild(document.body.firstChild);\r\n                }\r\n            }\r\n        }.bind(this));\r\n\r\n        this.closeBtn.visible = false;\r\n\r\n        this.game.time.events.add(closeTimer * 1000, function () {\r\n            this.closeBtn.visible = true;\r\n            this.game.add.tween(this.closeBtn).from({alpha: 0}, 250, \"Linear\", true);\r\n        }.bind(this));\r\n    }\r\n\r\n    createEnvironment() {\r\n        this.bg = this.game.add.sprite(_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameWidth / 2, _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameHeight / 2, \"bg_gradient\");\r\n        this.bg.anchor.set(0.5);\r\n        this.gameGroup.add(this.bg); \r\n\r\n        this.logo = this.game.add.sprite(_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameWidth / 2, _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameHeight / 2, \"sheet\", \"logo\");\r\n        this.logo.anchor.set(0.5);\r\n        this.gameGroup.add(this.logo);\r\n\r\n        this.cta = new _objects_cta_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.game, this.gameGroup);\r\n    }\r\n\r\n    createSounds() {\r\n        for (let i = 0; i < info.sounds.length; i++)\r\n            _sounds_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"][info.sounds[i]] = this.game.add.sound(info.sounds[i]);\r\n    }\r\n\r\n    gameResized() {\r\n        let ratio = 1;\r\n\r\n        try {\r\n            if (mraid) {\r\n                var screenSize = mraid.getScreenSize();\r\n                mraid.setResizeProperties({\"width\": screenSize.width, \"height\": screenSize.height, \"offsetX\": 0, \"offsetY\": 0});\r\n                mraid.expand();\r\n            }\r\n        } catch (e) {\r\n\r\n        }\r\n\r\n        if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI)\r\n            ratio = window.screen.systemXDPI / window.screen.logicalXDPI;\r\n        else if (window.devicePixelRatio !== undefined)\r\n            ratio = window.devicePixelRatio;\r\n\r\n        try {\r\n            let size = dapi.getScreenSize();\r\n\r\n            _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fullWidth = size.width;\r\n            _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fullHeight = size.height;\r\n        } catch(e) {\r\n            _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fullWidth = window.innerWidth * ratio;\r\n            _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fullHeight = window.innerHeight * ratio;\r\n        }\r\n\r\n        if (this.game.width === _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fullWidth && this.game.height === _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fullHeight)\r\n            return;\r\n\r\n        try {\r\n            if (mraid) {\r\n\t\t\t\tif (`${PLATFORM}` === \"applovin\") {\r\n                    if (_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isPortrait != _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fullWidth < _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fullHeight) {\r\n                        this.switchMode(!_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isPortrait);\r\n                    } else {\r\n                        this.switchMode(_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isPortrait);\r\n                    }\r\n                } else {\r\n\t\t\t\t\tif (_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isPortrait != ( (window.orientation == 0) || (window.orientation == 180) )) {\r\n\t\t\t\t\t\tthis.switchMode(!_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isPortrait);\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tthis.switchMode(_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isPortrait);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n            }\r\n        } catch (e) {\r\n            if (_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isPortrait != _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fullWidth < _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fullHeight) {\r\n                this.switchMode(!_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isPortrait);\r\n            } else {\r\n                this.switchMode(_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isPortrait);\r\n            }\r\n        }\r\n\r\n        this.game.scale.setGameSize(_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fullWidth, _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fullHeight);\r\n\r\n        this.setGameScale();\r\n        this.setPositions();\r\n    }\r\n\r\n    switchMode(isPortrait) {\r\n        _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isPortrait = isPortrait;\r\n        _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isLandscape = !isPortrait;\r\n\r\n        let mode = _data_portrait_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n\r\n        if (_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isLandscape)\r\n            mode = _data_landscape_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n\r\n        _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameWidth = mode.gameWidth;\r\n        _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameHeight = mode.gameHeight;\r\n    }\r\n\r\n    setGameScale() {\r\n        let scaleX = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fullWidth / _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameWidth;\r\n        let scaleY = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fullHeight / _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameHeight;\r\n\r\n        this.gameScale = (scaleX < scaleY) ? scaleX : scaleY;\r\n\r\n        _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualWidth = this.game.width / this.gameScale;\r\n        _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualHeight = this.game.height / this.gameScale;\r\n\r\n        _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].leftOffset = - (_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualWidth - _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameWidth) / 2;\r\n        _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rightOffset = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameWidth - _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].leftOffset;\r\n        _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topOffset = - (_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualHeight - _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameHeight) / 2;\r\n        _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bottomOffset = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameHeight - _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topOffset;\r\n    }\r\n\r\n    setPositions() {\r\n        this.supergroup.scale.set(this.gameScale);\r\n        this.gameGroup.x = (this.game.width / this.gameScale - _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameWidth) / 2;\r\n        this.gameGroup.y = (this.game.height / this.gameScale - _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameHeight) / 2;\r\n\r\n        this.bg.scale.set(1);\r\n\r\n        let scaleX = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualWidth / this.bg.width;\r\n        let scaleY = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualHeight / this.bg.height;\r\n        let scale = Math.max(scaleX, scaleY);\r\n\r\n        this.bg.scale.set(scale);\r\n\r\n        // Device Rotation Support\r\n        this.bg.x = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameWidth / 2;\r\n        this.bg.y = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameHeight / 2;      \r\n        this.logo.x = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameWidth / 2;\r\n        this.logo.y = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameHeight / 2;\r\n\r\n        if (this.closeBtn) {\r\n            this.closeBtn.x = _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualWidth - 20;\r\n        }\r\n\r\n        this.cta.adjust();\r\n    }\r\n\r\n    offsetMouse() {\r\n        return { x: (this.game.input.x * _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualWidth/this.game.width) + ((_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameWidth - _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualWidth) / 2),\r\n            y: (this.game.input.y * _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualHeight/this.game.height) + ((_dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameHeight - _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualHeight) / 2)};\r\n    }\r\n\r\n    offsetWorld(point) {\r\n        return { x: (point.x * _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualWidth/this.game.width), y: (point.y * _dimensions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actualHeight/this.game.height)};\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/states/Game.js?");

/***/ }),

/***/ "./src/states/Preloader.js":
/*!*********************************!*\
  !*** ./src/states/Preloader.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_images_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/images.js */ \"./src/data/images.js\");\n/* harmony import */ var _data_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/json.js */ \"./src/data/json.js\");\n/* harmony import */ var _data_sheets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/sheets.js */ \"./src/data/sheets.js\");\n/* harmony import */ var _data_sounds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/sounds.js */ \"./src/data/sounds.js\");\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (class extends Phaser.State {\r\n    init () {}\r\n\r\n    preload () {\r\n        try {\r\n            if (`${MODE}` == \"separate\")\r\n                this.game.load.crossOrigin = \"Anonymous\";\r\n            else\r\n                this.game.load.crossOrigin = null;\r\n        } catch(error) {\r\n            this.game.load.crossOrigin = null;\r\n        }\r\n\r\n        // Load Bitmap fonts\r\n        for (let i = 0; i < info.bitmapFonts.length; i++) {\r\n            let name = info.bitmapFonts[i];\r\n            try {\r\n                if (`${MODE}` == \"separate\")\r\n                    this.load.bitmapFont(name, urls[\"bitmapFonts\"][name][\"image\"], urls[\"bitmapFonts\"][name][\"fnt\"]);\r\n                else\r\n                    this.load.bitmapFont(name, _data_images_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name], null, _data_json_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][name]);\r\n            } catch(err) {\r\n                this.load.bitmapFont(name, _data_images_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name] + \".png\", _data_images_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name] + \".fnt\");\r\n            }\r\n        }\r\n\r\n        // Images\r\n        for (let i = 0; i < info.images.length; i++) {\r\n            let name = info.images[i].substr(0, info.images[i].lastIndexOf('.'));\r\n\r\n            try {\r\n                if (`${MODE}` == \"separate\")\r\n                    this.load.image(name, urls[\"images\"][name]);\r\n                else\r\n                    this.load.image(name, _data_images_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name]);\r\n            } catch (err) {\r\n                this.load.image(name, _data_images_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name]);\r\n            }\r\n        }\r\n\r\n        // Spritesheets\r\n        for (let i = 0; i < info.sheets.length; i++) {\r\n            let name = info.sheets[i].substr(0, info.sheets[i].lastIndexOf('.'));\r\n\r\n            try {\r\n                if (`${MODE}` == \"separate\")\r\n                    this.load.atlasJSONHash(name, urls[\"sheets\"][name][\"image\"], urls[\"sheets\"][name][\"json\"]);\r\n                else\r\n                    this.load.atlasJSONHash(name, _data_sheets_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][name], null, _data_json_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][name]);\r\n            } catch(err) {\r\n                this.load.atlasJSONHash(name, _data_sheets_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][name], _data_json_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][name] + \".json\");\r\n            }\r\n        }\r\n\r\n        try {\r\n            if (`${MODE}` == \"separate\" && info.spriter != \"\")\r\n                this.load.json('spriter', urls[\"spriter\"])\r\n        } catch (err) {\r\n            if (info.spriter != \"\")\r\n                this.load.json('spriter', \"sheet/spriter.scon\")\r\n        }\r\n\r\n        // Sounds\r\n        for (let i = 0; i < info.sounds.length; i++) {\r\n            let name = info.sounds[i];\r\n            try {\r\n                if (`${MODE}` == \"separate\")\r\n                    this.load.audio(name, urls[\"sounds\"][name]);\r\n                else\r\n                    this.load.audio(name, _data_sounds_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"][name]);\r\n            } catch (err) {\r\n                this.load.audio(name, _data_sounds_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"][name]);\r\n            }\r\n        }\r\n    }\r\n\r\n    create () {\r\n        this.state.start('Game');\r\n\r\n        try {\r\n            if (`${MODE}` == \"separate\" || `${PLATFORM}` === \"ironsource\") {\r\n                let element = document.getElementById(\"preloader\");\r\n                element.parentNode.removeChild(element);\r\n            }\r\n        } catch(err) {\r\n            let element = document.getElementById(\"preloader\");\r\n            element.parentNode.removeChild(element);\r\n        }\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/states/Preloader.js?");

/***/ })

/******/ });