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
/******/ 	__webpack_require__.p = "/stylesheets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/stylesheets/application.css.scss");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/stylesheets/application.css.scss":
/*!*****************************************************!*\
  !*** ./app/assets/stylesheets/application.css.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./application.css.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/assets/stylesheets/application.css.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/assets/stylesheets/application.css.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./app/assets/stylesheets/application.css.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../fonts/snes-font(1)/Snes.ttf'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
exports = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n\t v2.0 | 20110126\n\t License: none (public domain)\n\t Changed from CSS to SASS\n*/\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\nbody {\n  line-height: 1;\n  overflow-x: hidden; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after, q:before, q:after {\n  content: '';\n  content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n.after_mobile {\n  display: none; }\n@media only screen and (min-width: 570px) {\n    .after_mobile {\n      display: inline;\n      display: initial; } }\n.after_tablet {\n  display: none; }\n@media only screen and (min-width: 1025px) {\n    .after_tablet {\n      display: inline;\n      display: initial; } }\n@media only screen and (min-width: 570px) {\n  .till_tablet {\n    display: none; } }\n@media only screen and (min-width: 1025px) {\n  .till_desktop {\n    display: none; } }\n._p_important {\n  color: pink;\n  font-family: 'Roboto';\n  font-size: 1.4rem; }\n._p_info, ._p_lobbyfill {\n  font-family: 'Roboto';\n  font-size: 1rem;\n  min-width: 70px;\n  color: #CCC6BD; }\n._p_lobbyfill {\n  color: black; }\n._h2_level2 {\n  font-family: 'Roboto';\n  font-size: 1.2rem; }\nheader {\n  height: 8vh;\n  border-bottom: 3px solid orange;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 1; }\nheader .burger {\n    margin-right: 20px;\n    cursor: pointer; }\n.headerHeading {\n  font-size: 2.5rem;\n  color: #D50814;\n  font-family: Snes;\n  margin-left: 20px;\n  text-shadow: 1px 1px 2.5px black;\n  letter-spacing: 1.5px;\n  text-align: center; }\n@media only screen and (min-width: 570px) {\n    .headerHeading {\n      font-size: 3rem;\n      margin-top: 1vh; } }\n@media only screen and (min-width: 1025px) {\n    .headerHeading {\n      font-size: 3.5rem; } }\n.burgerelement {\n  width: 35px;\n  height: 5px;\n  background-color: black;\n  margin: 5px;\n  border-radius: 10px; }\n.nav-links {\n  position: fixed;\n  z-index: 20;\n  height: 20vh;\n  width: 50%;\n  background-color: white;\n  box-shadow: -2px 6px 10px black;\n  margin-left: 50%;\n  transform: translateX(150%);\n  transition: transform 0.5s ease-in; }\n@media only screen and (min-width: 1025px) {\n    .nav-links {\n      width: 25%;\n      margin-left: 75%; } }\n.nav-links li {\n    margin-top: 5vh;\n    text-align: center; }\n.nav-links li a {\n      font-family: Roboto;\n      text-decoration: none;\n      color: black;\n      font-size: 1.3rem; }\n.nav-links li a:hover {\n      color: green; }\n.nav--state-active {\n  transform: translateX(0); }\n.toggle .line1 {\n  transform: rotate(-45deg) translate(-8px, 6px); }\n.toggle .line2 {\n  opacity: 0; }\n.toggle .line3 {\n  transform: rotate(45deg) translate(-7px, -6px); }\nmain._main_grid {\n  display: flex;\n  width: 100vw;\n  flex-wrap: wrap;\n  grid-gap: 10px;\n  gap: 10px;\n  justify-content: space-evenly;\n  margin-top: 10px; }\n.grid::after {\n  content: \"\";\n  flex: auto; }\n@media only screen and (min-width: 570px) {\n  section._section_filtercontainer {\n    align-self: center; } }\nsection._section_filtercontainer ul._ul_filtercategories {\n  display: flex;\n  flex-wrap: wrap;\n  grid-gap: 1rem;\n  gap: 1rem;\n  margin-bottom: 10px; }\n@media only screen and (min-width: 570px) {\n    section._section_filtercontainer ul._ul_filtercategories {\n      grid-gap: 1.5rem;\n      gap: 1.5rem; } }\nsection._section_filtercontainer ul._ul_filtercategories li {\n    font-family: 'Roboto';\n    font-size: 1.8rem;\n    transition: 0.5s; }\n@media only screen and (min-width: 570px) {\n      section._section_filtercontainer ul._ul_filtercategories li {\n        font-size: 2.3rem; } }\nsection._section_filtercontainer ul._ul_filtercategories li.active {\n    text-decoration: underline;\n    -webkit-text-decoration-color: #00793B;\n            text-decoration-color: #00793B; }\nsection._section_filtercontainer ul._ul_filtercategories li:hover {\n    cursor: pointer;\n    text-decoration: underline; }\nsection._section_filtercontainer input._input_searchfilter {\n  font-family: 'Roboto';\n  font-size: 1rem;\n  padding: 5px 10px;\n  margin-bottom: 10px;\n  border-radius: 0.7rem;\n  border: 1px solid #b6b6b6; }\nsection._section_filtercontainer input._input_searchfilter:focus, section._section_filtercontainer input._input_searchfilter:active {\n    border-radius: 0.7rem;\n    border: 2px solid #00793B;\n    outline: none; }\nsection._section_filtercontainer ul._ul_filters {\n  display: flex;\n  flex-wrap: wrap;\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n  margin-bottom: 10px; }\nsection._section_filtercontainer ul._ul_filters.disabled {\n    display: none; }\n@media only screen and (min-width: 570px) {\n    section._section_filtercontainer ul._ul_filters {\n      max-width: 50vw; } }\nsection._section_filtercontainer ul._ul_filters li {\n    display: inline-block;\n    font-family: 'Roboto';\n    font-size: 1rem;\n    padding-left: 10px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-right: 10px;\n    border: 1px solid #b6b6b6;\n    border-radius: 1rem; }\n@media only screen and (min-width: 570px) {\n      section._section_filtercontainer ul._ul_filters li {\n        font-size: 1.5rem; } }\nsection._section_filtercontainer ul._ul_filters li.active {\n    background-color: #b6b6b6;\n    color: white; }\nsection._section_filtercontainer ul._ul_filters li.disabled {\n    display: none; }\nsection._section_filtercontainer ul._ul_filters li:hover {\n    cursor: pointer; }\nh2._h2_sectionheading {\n  font-family: 'Snes';\n  color: #00793B;\n  font-size: 3rem;\n  display: inline-block;\n  margin-right: 10px; }\nsection._section_userinfo {\n  margin-bottom: 10px; }\nsection._section_userinfo .disabled {\n    display: none; }\nsection._section_userinfo p, section._section_userinfo label {\n    font-size: 1.2rem;\n    font-family: 'Roboto';\n    margin-bottom: 0.5rem; }\nsection._section_userinfo input[type=\"submit\"] {\n    margin-top: 20px;\n    margin-bottom: 20px; }\ntextarea {\n  resize: none; }\n.createLobbyContainer {\n  width: 80vw;\n  margin: 0 auto;\n  margin-top: 3vh;\n  padding: 5vw 5vw 2vw 5vw;\n  text-align: center; }\n@media only screen and (min-width: 1025px) {\n    .createLobbyContainer {\n      width: 60vw;\n      border: 1px solid black;\n      box-shadow: 4px 5px 10px black; } }\n.createLobbyContainer .nameContainer, .createLobbyContainer .gameContainer, .createLobbyContainer .descriptionContainer, .createLobbyContainer .maxPlayerContainer {\n    text-align: left; }\n.createLobbyContainer .nameContainer label, .createLobbyContainer .gameContainer label, .createLobbyContainer .descriptionContainer label, .createLobbyContainer .maxPlayerContainer label {\n      font-family: Roboto;\n      font-size: 2rem; }\n.createLobbyContainer .nameContainer input, .createLobbyContainer .gameContainer input, .createLobbyContainer .descriptionContainer input, .createLobbyContainer .maxPlayerContainer input {\n      height: 5vh;\n      font-size: 1.5rem;\n      border-top: none;\n      border-right: none;\n      border-left: none;\n      margin-top: 1vh;\n      width: 100%;\n      border-bottom: 1px solid black; }\n.createLobbyContainer .nameContainer input:focus, .createLobbyContainer .nameContainer input input[type]:focus, .createLobbyContainer .gameContainer input:focus, .createLobbyContainer .gameContainer input input[type]:focus, .createLobbyContainer .descriptionContainer input:focus, .createLobbyContainer .descriptionContainer input input[type]:focus, .createLobbyContainer .maxPlayerContainer input:focus, .createLobbyContainer .maxPlayerContainer input input[type]:focus {\n        outline: none; }\n.createLobbyContainer .nameContainer .select-wrapper select, .createLobbyContainer .gameContainer .select-wrapper select, .createLobbyContainer .descriptionContainer .select-wrapper select, .createLobbyContainer .maxPlayerContainer .select-wrapper select {\n      font-family: 'Roboto';\n      font-size: 1.5rem;\n      padding: 5px 10px;\n      margin-bottom: 10px;\n      border-radius: 0.7rem;\n      border: 1px solid #62606E;\n      background-color: transparent;\n      width: 5vw;\n      min-width: 50px;\n      -moz-appearance: none;\n      -webkit-appearance: none;\n      appearance: none;\n      margin-top: 1.3vh; }\n.createLobbyContainer .nameContainer .select-wrapper select:focus, .createLobbyContainer .nameContainer .select-wrapper select:active, .createLobbyContainer .gameContainer .select-wrapper select:focus, .createLobbyContainer .gameContainer .select-wrapper select:active, .createLobbyContainer .descriptionContainer .select-wrapper select:focus, .createLobbyContainer .descriptionContainer .select-wrapper select:active, .createLobbyContainer .maxPlayerContainer .select-wrapper select:focus, .createLobbyContainer .maxPlayerContainer .select-wrapper select:active {\n        border-radius: 0.7rem;\n        border: 2px solid #00793B;\n        outline: none; }\n.createLobbyContainer .maxPlayerContainer {\n    margin-top: 1.7vh; }\n.createLobbyContainer .descriptionContainer {\n    text-align: left;\n    margin-top: 1.7vh; }\n.createLobbyContainer .descriptionContainer textarea {\n      margin-top: 2vh;\n      font-size: 1.5rem;\n      width: 100%;\n      font-family: Roboto;\n      border-top: none;\n      border-right: none;\n      border-left: none;\n      border-bottom: 1px solid black; }\n.createLobbyContainer .descriptionContainer textarea:focus, .createLobbyContainer .descriptionContainer textarea input[type]:focus {\n        outline: none; }\n.createLobbyContainer .descriptionContainer textarea::-moz-placeholder {\n        font-size: 1.5rem;\n        font-family: Roboto; }\n.createLobbyContainer .descriptionContainer textarea:-ms-input-placeholder {\n        font-size: 1.5rem;\n        font-family: Roboto; }\n.createLobbyContainer .descriptionContainer textarea::placeholder {\n        font-size: 1.5rem;\n        font-family: Roboto; }\n.createLobbyContainer ._section_filtercontainer {\n    text-align: left;\n    margin-top: 5vh; }\n.cardContainer {\n  display: flex;\n  overflow-x: auto;\n  width: 100vw;\n  margin-top: 2vh; }\n.cardImage {\n  height: 25vh;\n  margin-top: 1rem;\n  margin-left: 2rem;\n  margin-right: 2rem; }\n.scrolling-cards {\n  align-items: stretch;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap; }\n@media only screen and (min-width: 1025px) {\n    .scrolling-cards {\n      flex-wrap: wrap; } }\n._btn_important {\n  font-family: 'Roboto';\n  font-size: 2.5rem;\n  border: none;\n  background: none;\n  color: orange;\n  text-transform: uppercase;\n  height: 2.5rem;\n  margin: 0;\n  padding: 0; }\n._btn_header {\n  color: black;\n  background: none;\n  border: none;\n  font-family: 'Roboto';\n  font-size: 2rem; }\n._btn_header.active {\n    color: purple; }\n._btn_header:hover {\n    color: purple; }\n._div_gridcard {\n  display: inline-block;\n  min-height: 300px;\n  min-width: 300px;\n  max-width: 400px;\n  max-height: 400px;\n  width: 80vw;\n  height: 80vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: #b6b6b6; }\n@media only screen and (min-width: 570px) {\n    ._div_gridcard {\n      width: 15vw;\n      height: 15vw;\n      max-width: 600px;\n      max-height: 600px; } }\n._div_gridcard img {\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: top;\n       object-position: top; }\n._div_gridcard > div {\n    margin-top: 10px;\n    padding: 0px 10px;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    grid-gap: 5px;\n    gap: 5px; }\n._div_gridcard > div div {\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap; }\n._div_gridcard div._div_endFlex {\n    flex-direction: row;\n    align-items: flex-end;\n    justify-content: space-between;\n    margin: 0;\n    margin-bottom: 10px; }\n._div_gridcard_image {\n  overflow: hidden; }\nsection._section_pagemeta {\n  background-color: orange;\n  padding: 10px;\n  position: fixed;\n  width: 100vw;\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  transition: height 1s; }\n@media only screen and (min-width: 1025px) {\n    section._section_pagemeta {\n      position: relative;\n      height: auto; } }\nsection._section_pagemeta input {\n    background-color: darkorange;\n    border: none;\n    border-radius: 5px;\n    color: black;\n    font-family: 'Roboto';\n    font-size: 1.2rem;\n    padding: 3px 10px;\n    margin-bottom: 5px; }\nsection._section_pagemeta ._div_filterlist {\n    padding: 0px 5px;\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap; }\n@media only screen and (min-width: 570px) {\n      section._section_pagemeta ._div_filterlist {\n        width: 90%; } }\nsection._section_pagemeta ._div_filterlist .selected {\n      color: #b6b6b6; }\nsection._section_pagemeta ._div_filterlist .selected::after {\n        margin-left: 5px;\n        content: 'X'; }\nsection._section_pagemeta ._div_filterlist .hidden {\n      display: none; }\nsection._section_pagemeta ._div_filterlist p {\n      margin: 0px 10px 10px 0px; }\nsection._section_pagemeta ._div_filterlist:last-child {\n      border-top: 1px solid white;\n      padding-top: 10px; }\nsection._section_pagemeta div.disabled {\n    display: none; }\n._div_flexaround {\n  display: flex;\n  justify-content: space-around; }\n._div_flexwrap {\n  display: flex;\n  flex-wrap: wrap;\n  width: 95%; }\ndiv.disabled {\n  display: none; }\nsection.disabled {\n  display: none; }\ndiv._div_heading_middle {\n  display: flex;\n  margin: auto;\n  grid-gap: 10px;\n  gap: 10px; }\n@font-face {\n  font-family: 'Snes';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\"); }\n* {\n  background-color: black; }\n", "",{"version":3,"sources":["/home/stefan/Studiowoche/LobbyNator/app/assets/stylesheets/base/_reset.scss","application.css.scss","/home/stefan/Studiowoche/LobbyNator/app/assets/stylesheets/utils/_breakpoint.scss","/home/stefan/Studiowoche/LobbyNator/app/assets/stylesheets/base/_typography.scss","/home/stefan/Studiowoche/LobbyNator/app/assets/stylesheets/utils/_vars.scss","/home/stefan/Studiowoche/LobbyNator/app/assets/stylesheets/layout/_header.scss","/home/stefan/Studiowoche/LobbyNator/app/assets/stylesheets/layout/_main_grid.scss","/home/stefan/Studiowoche/LobbyNator/app/assets/stylesheets/layout/_filter.scss","/home/stefan/Studiowoche/LobbyNator/app/assets/stylesheets/layout/_profile.scss","/home/stefan/Studiowoche/LobbyNator/app/assets/stylesheets/layout/_create_lobby.scss","/home/stefan/Studiowoche/LobbyNator/app/assets/stylesheets/layout/_lobbies.scss","/home/stefan/Studiowoche/LobbyNator/app/assets/stylesheets/components/_button.scss","/home/stefan/Studiowoche/LobbyNator/app/assets/stylesheets/components/_lobbycard.scss","/home/stefan/Studiowoche/LobbyNator/app/assets/stylesheets/components/_pagemeta.scss","/home/stefan/Studiowoche/LobbyNator/app/assets/stylesheets/components/_header_element.scss","/home/stefan/Studiowoche/LobbyNator/app/assets/stylesheets/application.css.scss"],"names":[],"mappings":"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","file":"application.css.scss","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n\t v2.0 | 20110126\n\t License: none (public domain)\n\t Changed from CSS to SASS\n*/\n\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section{\n\tdisplay: block;\n}\n\nbody{\n\tline-height: 1;\n\toverflow-x: hidden;\n}\n\nol, ul{\n\tlist-style: none;\n}\nblockquote, q{\n\tquotes: none;\n}\nblockquote:before, blockquote:after, q:before, q:after{\n\tcontent: '';\n    content: none;\n}\n\ntable{\n\tborder-collapse: collapse;\n    border-spacing: 0;\n}","/* http://meyerweb.com/eric/tools/css/reset/ \n\t v2.0 | 20110126\n\t License: none (public domain)\n\t Changed from CSS to SASS\n*/\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1;\n  overflow-x: hidden; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.after_mobile {\n  display: none; }\n  @media only screen and (min-width: 570px) {\n    .after_mobile {\n      display: initial; } }\n\n.after_tablet {\n  display: none; }\n  @media only screen and (min-width: 1025px) {\n    .after_tablet {\n      display: initial; } }\n\n@media only screen and (min-width: 570px) {\n  .till_tablet {\n    display: none; } }\n\n@media only screen and (min-width: 1025px) {\n  .till_desktop {\n    display: none; } }\n\n._p_important {\n  color: pink;\n  font-family: 'Roboto';\n  font-size: 1.4rem; }\n\n._p_info, ._p_lobbyfill {\n  font-family: 'Roboto';\n  font-size: 1rem;\n  min-width: 70px;\n  color: #CCC6BD; }\n\n._p_lobbyfill {\n  color: black; }\n\n._h2_level2 {\n  font-family: 'Roboto';\n  font-size: 1.2rem; }\n\nheader {\n  height: 8vh;\n  border-bottom: 3px solid orange;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 1; }\n  header .burger {\n    margin-right: 20px;\n    cursor: pointer; }\n\n.headerHeading {\n  font-size: 2.5rem;\n  color: #D50814;\n  font-family: Snes;\n  margin-left: 20px;\n  text-shadow: 1px 1px 2.5px black;\n  letter-spacing: 1.5px;\n  text-align: center; }\n  @media only screen and (min-width: 570px) {\n    .headerHeading {\n      font-size: 3rem;\n      margin-top: 1vh; } }\n  @media only screen and (min-width: 1025px) {\n    .headerHeading {\n      font-size: 3.5rem; } }\n\n.burgerelement {\n  width: 35px;\n  height: 5px;\n  background-color: black;\n  margin: 5px;\n  border-radius: 10px; }\n\n.nav-links {\n  position: fixed;\n  z-index: 20;\n  height: 20vh;\n  width: 50%;\n  background-color: white;\n  box-shadow: -2px 6px 10px black;\n  margin-left: 50%;\n  transform: translateX(150%);\n  transition: transform 0.5s ease-in; }\n  @media only screen and (min-width: 1025px) {\n    .nav-links {\n      width: 25%;\n      margin-left: 75%; } }\n  .nav-links li {\n    margin-top: 5vh;\n    text-align: center; }\n    .nav-links li a {\n      font-family: Roboto;\n      text-decoration: none;\n      color: black;\n      font-size: 1.3rem; }\n    .nav-links li a:hover {\n      color: green; }\n\n.nav--state-active {\n  transform: translateX(0); }\n\n.toggle .line1 {\n  transform: rotate(-45deg) translate(-8px, 6px); }\n\n.toggle .line2 {\n  opacity: 0; }\n\n.toggle .line3 {\n  transform: rotate(45deg) translate(-7px, -6px); }\n\nmain._main_grid {\n  display: flex;\n  width: 100vw;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: space-evenly;\n  margin-top: 10px; }\n\n.grid::after {\n  content: \"\";\n  flex: auto; }\n\n@media only screen and (min-width: 570px) {\n  section._section_filtercontainer {\n    align-self: center; } }\n\nsection._section_filtercontainer ul._ul_filtercategories {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 10px; }\n  @media only screen and (min-width: 570px) {\n    section._section_filtercontainer ul._ul_filtercategories {\n      gap: 1.5rem; } }\n  section._section_filtercontainer ul._ul_filtercategories li {\n    font-family: 'Roboto';\n    font-size: 1.8rem;\n    transition: 0.5s; }\n    @media only screen and (min-width: 570px) {\n      section._section_filtercontainer ul._ul_filtercategories li {\n        font-size: 2.3rem; } }\n  section._section_filtercontainer ul._ul_filtercategories li.active {\n    text-decoration: underline;\n    text-decoration-color: #00793B; }\n  section._section_filtercontainer ul._ul_filtercategories li:hover {\n    cursor: pointer;\n    text-decoration: underline; }\n\nsection._section_filtercontainer input._input_searchfilter {\n  font-family: 'Roboto';\n  font-size: 1rem;\n  padding: 5px 10px;\n  margin-bottom: 10px;\n  border-radius: 0.7rem;\n  border: 1px solid #b6b6b6; }\n  section._section_filtercontainer input._input_searchfilter:focus, section._section_filtercontainer input._input_searchfilter:active {\n    border-radius: 0.7rem;\n    border: 2px solid #00793B;\n    outline: none; }\n\nsection._section_filtercontainer ul._ul_filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 10px; }\n  section._section_filtercontainer ul._ul_filters.disabled {\n    display: none; }\n  @media only screen and (min-width: 570px) {\n    section._section_filtercontainer ul._ul_filters {\n      max-width: 50vw; } }\n  section._section_filtercontainer ul._ul_filters li {\n    display: inline-block;\n    font-family: 'Roboto';\n    font-size: 1rem;\n    padding-left: 10px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-right: 10px;\n    border: 1px solid #b6b6b6;\n    border-radius: 1rem; }\n    @media only screen and (min-width: 570px) {\n      section._section_filtercontainer ul._ul_filters li {\n        font-size: 1.5rem; } }\n  section._section_filtercontainer ul._ul_filters li.active {\n    background-color: #b6b6b6;\n    color: white; }\n  section._section_filtercontainer ul._ul_filters li.disabled {\n    display: none; }\n  section._section_filtercontainer ul._ul_filters li:hover {\n    cursor: pointer; }\n\nh2._h2_sectionheading {\n  font-family: 'Snes';\n  color: #00793B;\n  font-size: 3rem;\n  display: inline-block;\n  margin-right: 10px; }\n\nsection._section_userinfo {\n  margin-bottom: 10px; }\n  section._section_userinfo .disabled {\n    display: none; }\n  section._section_userinfo p, section._section_userinfo label {\n    font-size: 1.2rem;\n    font-family: 'Roboto';\n    margin-bottom: 0.5rem; }\n  section._section_userinfo input[type=\"submit\"] {\n    margin-top: 20px;\n    margin-bottom: 20px; }\n\ntextarea {\n  resize: none; }\n\n.createLobbyContainer {\n  width: 80vw;\n  margin: 0 auto;\n  margin-top: 3vh;\n  padding: 5vw 5vw 2vw 5vw;\n  text-align: center; }\n  @media only screen and (min-width: 1025px) {\n    .createLobbyContainer {\n      width: 60vw;\n      border: 1px solid black;\n      box-shadow: 4px 5px 10px black; } }\n  .createLobbyContainer .nameContainer, .createLobbyContainer .gameContainer, .createLobbyContainer .descriptionContainer, .createLobbyContainer .maxPlayerContainer {\n    text-align: left; }\n    .createLobbyContainer .nameContainer label, .createLobbyContainer .gameContainer label, .createLobbyContainer .descriptionContainer label, .createLobbyContainer .maxPlayerContainer label {\n      font-family: Roboto;\n      font-size: 2rem; }\n    .createLobbyContainer .nameContainer input, .createLobbyContainer .gameContainer input, .createLobbyContainer .descriptionContainer input, .createLobbyContainer .maxPlayerContainer input {\n      height: 5vh;\n      font-size: 1.5rem;\n      border-top: none;\n      border-right: none;\n      border-left: none;\n      margin-top: 1vh;\n      width: 100%;\n      border-bottom: 1px solid black; }\n      .createLobbyContainer .nameContainer input:focus, .createLobbyContainer .nameContainer input input[type]:focus, .createLobbyContainer .gameContainer input:focus, .createLobbyContainer .gameContainer input input[type]:focus, .createLobbyContainer .descriptionContainer input:focus, .createLobbyContainer .descriptionContainer input input[type]:focus, .createLobbyContainer .maxPlayerContainer input:focus, .createLobbyContainer .maxPlayerContainer input input[type]:focus {\n        outline: none; }\n    .createLobbyContainer .nameContainer .select-wrapper select, .createLobbyContainer .gameContainer .select-wrapper select, .createLobbyContainer .descriptionContainer .select-wrapper select, .createLobbyContainer .maxPlayerContainer .select-wrapper select {\n      font-family: 'Roboto';\n      font-size: 1.5rem;\n      padding: 5px 10px;\n      margin-bottom: 10px;\n      border-radius: 0.7rem;\n      border: 1px solid #62606E;\n      background-color: transparent;\n      width: 5vw;\n      min-width: 50px;\n      -moz-appearance: none;\n      -webkit-appearance: none;\n      appearance: none;\n      margin-top: 1.3vh; }\n      .createLobbyContainer .nameContainer .select-wrapper select:focus, .createLobbyContainer .nameContainer .select-wrapper select:active, .createLobbyContainer .gameContainer .select-wrapper select:focus, .createLobbyContainer .gameContainer .select-wrapper select:active, .createLobbyContainer .descriptionContainer .select-wrapper select:focus, .createLobbyContainer .descriptionContainer .select-wrapper select:active, .createLobbyContainer .maxPlayerContainer .select-wrapper select:focus, .createLobbyContainer .maxPlayerContainer .select-wrapper select:active {\n        border-radius: 0.7rem;\n        border: 2px solid #00793B;\n        outline: none; }\n  .createLobbyContainer .maxPlayerContainer {\n    margin-top: 1.7vh; }\n  .createLobbyContainer .descriptionContainer {\n    text-align: left;\n    margin-top: 1.7vh; }\n    .createLobbyContainer .descriptionContainer textarea {\n      margin-top: 2vh;\n      font-size: 1.5rem;\n      width: 100%;\n      font-family: Roboto;\n      border-top: none;\n      border-right: none;\n      border-left: none;\n      border-bottom: 1px solid black; }\n      .createLobbyContainer .descriptionContainer textarea:focus, .createLobbyContainer .descriptionContainer textarea input[type]:focus {\n        outline: none; }\n      .createLobbyContainer .descriptionContainer textarea::placeholder {\n        font-size: 1.5rem;\n        font-family: Roboto; }\n  .createLobbyContainer ._section_filtercontainer {\n    text-align: left;\n    margin-top: 5vh; }\n\n.cardContainer {\n  display: flex;\n  overflow-x: auto;\n  width: 100vw;\n  margin-top: 2vh; }\n\n.cardImage {\n  height: 25vh;\n  margin-top: 1rem;\n  margin-left: 2rem;\n  margin-right: 2rem; }\n\n.scrolling-cards {\n  align-items: stretch;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap; }\n  @media only screen and (min-width: 1025px) {\n    .scrolling-cards {\n      flex-wrap: wrap; } }\n\n._btn_important {\n  font-family: 'Roboto';\n  font-size: 2.5rem;\n  border: none;\n  background: none;\n  color: orange;\n  text-transform: uppercase;\n  height: 2.5rem;\n  margin: 0;\n  padding: 0; }\n\n._btn_header {\n  color: black;\n  background: none;\n  border: none;\n  font-family: 'Roboto';\n  font-size: 2rem; }\n  ._btn_header.active {\n    color: purple; }\n  ._btn_header:hover {\n    color: purple; }\n\n._div_gridcard {\n  display: inline-block;\n  min-height: 300px;\n  min-width: 300px;\n  max-width: 400px;\n  max-height: 400px;\n  width: 80vw;\n  height: 80vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: #b6b6b6; }\n  @media only screen and (min-width: 570px) {\n    ._div_gridcard {\n      width: 15vw;\n      height: 15vw;\n      max-width: 600px;\n      max-height: 600px; } }\n  ._div_gridcard img {\n    width: 100%;\n    object-fit: cover;\n    object-position: top; }\n  ._div_gridcard > div {\n    margin-top: 10px;\n    padding: 0px 10px;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    gap: 5px; }\n    ._div_gridcard > div div {\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap; }\n  ._div_gridcard div._div_endFlex {\n    flex-direction: row;\n    align-items: flex-end;\n    justify-content: space-between;\n    margin: 0;\n    margin-bottom: 10px; }\n\n._div_gridcard_image {\n  overflow: hidden; }\n\nsection._section_pagemeta {\n  background-color: orange;\n  padding: 10px;\n  position: fixed;\n  width: 100vw;\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  transition: height 1s; }\n  @media only screen and (min-width: 1025px) {\n    section._section_pagemeta {\n      position: relative;\n      height: auto; } }\n  section._section_pagemeta input {\n    background-color: darkorange;\n    border: none;\n    border-radius: 5px;\n    color: black;\n    font-family: 'Roboto';\n    font-size: 1.2rem;\n    padding: 3px 10px;\n    margin-bottom: 5px; }\n  section._section_pagemeta ._div_filterlist {\n    padding: 0px 5px;\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap; }\n    @media only screen and (min-width: 570px) {\n      section._section_pagemeta ._div_filterlist {\n        width: 90%; } }\n    section._section_pagemeta ._div_filterlist .selected {\n      color: #b6b6b6; }\n      section._section_pagemeta ._div_filterlist .selected::after {\n        margin-left: 5px;\n        content: 'X'; }\n    section._section_pagemeta ._div_filterlist .hidden {\n      display: none; }\n    section._section_pagemeta ._div_filterlist p {\n      margin: 0px 10px 10px 0px; }\n    section._section_pagemeta ._div_filterlist:last-child {\n      border-top: 1px solid white;\n      padding-top: 10px; }\n  section._section_pagemeta div.disabled {\n    display: none; }\n\n._div_flexaround {\n  display: flex;\n  justify-content: space-around; }\n\n._div_flexwrap {\n  display: flex;\n  flex-wrap: wrap;\n  width: 95%; }\n\ndiv.disabled {\n  display: none; }\n\nsection.disabled {\n  display: none; }\n\ndiv._div_heading_middle {\n  display: flex;\n  margin: auto;\n  gap: 10px; }\n\n@font-face {\n  font-family: 'Snes';\n  src: url(\"../fonts/snes-font(1)/Snes.ttf\");\n  /* IE9 Compat Modes */\n  src: local(\"\"), url(\"../fonts/snes-font(1)/Snes.ttf\") format(\"truetype\"); }\n\n* {\n  background-color: black; }\n","@mixin breakpoint($medium){\n\n    @if($medium == tablet){\n        @media only screen and(min-width: 570px){\n            @content;\n        }\n    }\n    @else if($medium == desktop1){\n        @media only screen and (min-width: 1025px){\n            @content;\n        }\n    }\n    @else if($medium == desktop2){\n        @media only screen and (min-width: 1400px){\n            @content;\n        }\n    }\n}\n\n\n.after_mobile{\n    display: none;\n    @include breakpoint(tablet){\n        display: initial;\n    }\n}\n\n.after_tablet{\n    display: none;\n    @include breakpoint(desktop1){\n        display: initial;\n    }\n}\n\n.till_tablet{\n    @include breakpoint(tablet){\n        display: none;\n    }\n}\n.till_desktop{\n    @include breakpoint(desktop1){\n        display: none;\n    }\n}","._p_important{\n    color: pink;\n    font-family: 'Roboto';\n    font-size: 1.4rem;\n}\n._p_info, ._p_lobbyfill{\n    font-family: 'Roboto';\n    font-size: 1rem;\n    min-width: 70px;\n    color: $headergrey;\n}\n\n._p_lobbyfill{\n    color: black;\n}\n\n._h2_level2{\n    font-family: 'Roboto';\n    font-size: 1.2rem;\n}\n","$red: #D50814;\n$green: #00793B;\n$greenhover: #b2c0b9;\n$headergrey: #CCC6BD;\n$filtergrey: #b6b6b6;\n$important: orange;","@import 'utils/vars.scss';\nheader{\n    height: 8vh;\n    // background-color: $headergrey;\n    border-bottom: 3px solid orange;\n    display: flex;\n    // box-shadow: 1px 2px 15px black;\n    justify-content: space-between;\n    align-items: center;\n    .burger{\n        margin-right: 20px;\n        cursor: pointer;\n    }\n    z-index: 1;\n}\n.headerHeading{\n    font-size: 2.5rem;\n    color: $red;\n    font-family: Snes;\n    margin-left: 20px;\n    text-shadow: 1px 1px 2.5px black;\n    letter-spacing: 1.5px;\n    text-align: center;\n    @include breakpoint(tablet){\n        font-size: 3rem;\n        margin-top: 1vh;\n    }\n    @include breakpoint(desktop1){\n        font-size: 3.5rem;\n    }\n}\n.burgerelement{\n    width: 35px;\n    height: 5px;\n    background-color: black;\n    margin: 5px;\n    border-radius: 10px;\n    \n}\n.nav-links{\n    position: fixed;\n    z-index: 20;\n    height: 20vh;\n    width: 50%;\n    background-color: white;\n    box-shadow: -2px 6px 10px black;\n    margin-left: 50%;\n    transform: translateX(150%);\n    transition: transform 0.5s ease-in;\n    @include breakpoint(desktop1){\n        width: 25%;\n        margin-left: 75%;\n    }\n    li{\n        margin-top: 5vh;\n        text-align: center;\n        a{\n            font-family: Roboto;\n            text-decoration: none;\n            color: black;\n            font-size: 1.3rem;\n        }\n        a:hover{\n            color: green;\n        }\n    }\n}\n\n.nav--state-active{\n    transform: translateX(0);\n}\n.toggle .line1{\n    transform: rotate(-45deg) translate(-8px,6px);\n}\n.toggle .line2{\n    opacity: 0;\n}\n.toggle .line3{\n    transform: rotate(45deg) translate(-7px,-6px);\n}","main._main_grid{\n    display: flex;\n    width: 100vw;\n    flex-wrap: wrap;\n    gap: 10px;\n    justify-content: space-evenly;\n    margin-top: 10px;\n}\n.grid::after {\n    content: \"\";\n    flex: auto;\n}","section._section_filtercontainer{\n    @include breakpoint(tablet){\n        align-self: center;\n    }\n\n    ul._ul_filtercategories{\n        display: flex;\n        flex-wrap: wrap;\n        gap: 1rem;\n        margin-bottom: 10px;\n\n        @include breakpoint(tablet){\n            gap: 1.5rem;\n        }\n\n        li{\n            font-family: 'Roboto';\n            font-size: 1.8rem;\n            transition: 0.5s;\n            @include breakpoint(tablet){\n                font-size: 2.3rem;\n            }\n        }\n        li.active{\n            text-decoration: underline;\n            text-decoration-color: $green;\n        }\n        li:hover{\n            cursor: pointer;\n            text-decoration: underline;\n        }\n    }\n    input._input_searchfilter {\n        font-family: 'Roboto';\n        font-size: 1rem;\n        padding: 5px 10px;\n        margin-bottom: 10px;\n        border-radius: 0.7rem;\n        border: 1px solid $filtergrey;\n        &:focus, &:active {\n            border-radius: 0.7rem;\n            border: 2px solid $green;\n            outline: none;\n        }\n        \n    }\n    ul._ul_filters{\n        &.disabled{\n            display: none;\n        }\n        display: flex;\n        flex-wrap: wrap;\n        gap: 0.5rem;\n        margin-bottom: 10px;\n\n        @include breakpoint(tablet){\n            max-width: 50vw;\n        }\n        \n        li{\n            display: inline-block;\n            font-family: 'Roboto';\n            font-size: 1rem;\n            padding-left: 10px;\n            padding-top: 5px;\n            padding-bottom: 5px;\n            padding-right: 10px;\n            border: 1px solid $filtergrey;\n            border-radius: 1rem;\n    \n            @include breakpoint(tablet){\n                font-size: 1.5rem;\n            }\n        }\n        li.active{\n            background-color: $filtergrey;\n            color: white;\n        }\n        li.disabled{\n            display: none;\n        }\n        li:hover{\n            cursor: pointer;\n        }\n    }\n}","h2._h2_sectionheading{\n    font-family: 'Snes';\n    color: $green;\n    font-size: 3rem;\n    display: inline-block;\n    margin-right: 10px;\n}\n\nsection._section_userinfo{\n    .disabled{\n        display: none;\n    }\n    p, label{\n        font-size: 1.2rem;\n        font-family: 'Roboto';\n        margin-bottom: 0.5rem;\n    }\n    input[type=\"submit\"]{\n        margin-top: 20px;\n        margin-bottom: 20px;\n    }\n\n    margin-bottom: 10px;\n}","textarea{\n    resize: none;\n}\n.createLobbyContainer{\n    width: 80vw;\n    margin: 0 auto;\n    margin-top: 3vh;\n    padding: 5vw 5vw 2vw 5vw;\n    text-align: center;\n    @include breakpoint(desktop1){\n        width: 60vw;\n        border: 1px solid black;\n        box-shadow: 4px 5px 10px black;\n    }\n    .nameContainer, .gameContainer, .descriptionContainer, .maxPlayerContainer{\n        text-align: left;\n        label{\n            font-family: Roboto;\n            font-size: 2rem;\n        }\n        input{\n            height: 5vh;\n            font-size: 1.5rem;\n            border-top: none;\n            border-right: none;\n            border-left: none;\n            margin-top: 1vh;\n            width: 100%;\n            border-bottom: 1px solid black;\n            &:focus, input[type]:focus{\n                outline: none;\n            }\n        }\n        .select-wrapper select{\n            font-family: 'Roboto';\n            font-size: 1.5rem;\n            padding: 5px 10px;\n            margin-bottom: 10px;\n            border-radius: 0.7rem;\n            border: 1px solid #62606E;\n            background-color: transparent;\n            width: 5vw;\n            min-width: 50px;\n            -moz-appearance: none;\n            -webkit-appearance: none;\n            appearance: none;\n            margin-top: 1.3vh;\n            &:focus, &:active {\n                border-radius: 0.7rem;\n                border: 2px solid $green;\n                outline: none;\n            }\n        }\n    }\n    .maxPlayerContainer{\n        margin-top: 1.7vh;\n    }\n    .descriptionContainer{\n        text-align: left;\n        margin-top: 1.7vh;\n        textarea{\n            margin-top: 2vh;\n            font-size: 1.5rem;\n            width: 100%;\n            font-family: Roboto;\n            border-top: none;\n            border-right: none;\n            border-left: none;\n            border-bottom: 1px solid black;\n            &:focus, input[type]:focus{\n                outline: none;\n            }\n            &::placeholder { \n                font-size: 1.5rem;\n                font-family: Roboto;\n            }\n        }\n    }\n    ._section_filtercontainer{\n        text-align: left;\n        margin-top: 5vh;\n    }\n}",".cardContainer{\n    display: flex;\n    overflow-x: auto;\n    width: 100vw;\n    margin-top: 2vh;\n}\n.cardImage{\n    height: 25vh;\n    margin-top: 1rem;\n    margin-left: 2rem;\n    margin-right: 2rem;\n}\n.scrolling-cards{\n    align-items: stretch;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    \n    @include breakpoint(desktop1){\n        flex-wrap: wrap;\n    }   \n}\n\n","._btn_important{\n    font-family: 'Roboto';\n    font-size: 2.5rem;\n    border: none;\n    background: none;\n    color: $important;\n    text-transform: uppercase;\n    height: 2.5rem;\n    margin: 0;\n    padding: 0;\n}\n\n._btn_header{\n    color: black;\n    background: none;\n    border: none;\n    font-family: 'Roboto';\n    font-size: 2rem;\n\n    &.active{\n        color: purple;\n    }\n    &:hover{\n        color: purple;\n    }\n}","._div_gridcard{\n    display: inline-block;\n    min-height: 300px;\n    min-width: 300px;\n    max-width: 400px;\n    max-height: 400px;\n    width: 80vw;\n    height: 80vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    \n    @include breakpoint(tablet){\n        width: 15vw;\n        height: 15vw;\n        max-width: 600px;\n        max-height: 600px;\n    }\n\n    img{\n        width: 100%;\n        object-fit: cover;\n        object-position: top;\n    }\n\n    background-color: $filtergrey;\n    \n    & > div{\n        margin-top: 10px;\n        padding: 0px 10px;\n        display: flex;\n        justify-content: flex-start;\n        flex-direction: column;\n        gap: 5px;\n\n        div{\n            display: flex;\n            justify-content: flex-start;\n            flex-wrap: wrap;\n        }\n        \n    }\n    div._div_endFlex{\n        flex-direction: row;\n        align-items: flex-end;\n        justify-content: space-between;\n        margin: 0;\n        margin-bottom: 10px;\n    }\n}\n\n._div_gridcard_image{\n    overflow: hidden;\n}\n","section._section_pagemeta{\n    background-color: orange;\n    padding: 10px;\n    position: fixed;\n    width: 100vw;\n    height: 80vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    transition: height 1s;\n\n    @include breakpoint(desktop1){\n        position: relative;\n        height: auto;\n    }\n\n    input{\n        background-color: darkorange;\n        border: none;\n        border-radius: 5px;\n        color: black;\n        font-family: 'Roboto';\n        font-size: 1.2rem;\n        padding: 3px 10px;\n        margin-bottom: 5px;\n    }\n\n    ._div_filterlist{\n        padding: 0px 5px;\n        display: flex;\n        justify-content: flex-start;\n        flex-wrap: wrap;\n        @include breakpoint(tablet){\n            width: 90%;\n        }\n\n        & .selected{\n            color: $filtergrey;\n            &::after{\n                margin-left: 5px;\n                content: 'X';\n            }\n        }\n        & .hidden{\n            display: none;\n        }\n        p{\n            margin:0px 10px 10px 0px;\n        }     \n        \n        &:last-child{\n            border-top: 1px solid white;\n            padding-top: 10px;\n        }\n    }\n    div.disabled{\n        display: none;\n    }\n}\n\n._div_flexaround{\n    display: flex;\n    justify-content: space-around;\n}\n._div_flexwrap{\n    display: flex;\n    flex-wrap: wrap;\n    width: 95%;\n}\n\ndiv.disabled{\n    display: none;\n}\nsection.disabled{\n    display: none;\n}","div._div_heading_middle{\n    display: flex;\n    margin: auto;\n    gap: 10px;\n}","@import './base/_reset.scss';\n@import './utils/vars.scss';\n@import './utils/breakpoint.scss';\n@import './base/_typography.scss';\n@import './layout/_header.scss';\n@import './layout/_main_grid';\n@import './layout/_filter.scss';\n@import './layout/_profile.scss';\n@import './layout/_lobby.scss';\n@import './layout/_create_lobby.scss';\n@import './layout/_lobbies.scss';\n@import './components/_button.scss';\n@import './components/_lobbycard.scss';\n@import './components/_pagemeta.scss';\n@import './components/_header_element.scss';\n\n@font-face {\n    font-family: 'Snes';\n    src: url('../fonts/snes-font(1)/Snes.ttf'); /* IE9 Compat Modes */\n    src: local(''),\n         url('../fonts/snes-font(1)/Snes.ttf') format('truetype'), /* Safari, Android, iOS */     \n}\n\n*{\n    background-color: black;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url["default"] : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ });
//# sourceMappingURL=application-fbbde4dac4113e13e27e.js.map