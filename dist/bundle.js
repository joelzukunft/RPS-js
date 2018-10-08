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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = {};\nglobal.beginButton = document.getElementById('begin');\nglobal.inputField = document.getElementById('input-field');\nglobal.rock = document.getElementById('rock');\nglobal.paper = document.getElementById('paper');\nglobal.scissor = document.getElementById('scissor');\nglobal.opponentChoice = document.getElementById('opponent-choice');\nglobal.playerScore = document.getElementById('player-score');\nglobal.opponentScore = document.getElementById('opponent-score');\nglobal.gameBoard = document.getElementById('game-board');\nglobal.playerLabel = document.getElementById('player-score-label');\nglobal.roundCountLabel = document.getElementById('round-count');\nvar t = \"tie\";\nvar w = \"win\";\nvar l = \"lose\";\nglobal.resultMatrix = [[t, w, l], [l, t, w], [w, l, t]];\nvar playerScore = 0;\nvar opponentScore = 0;\nglobal.roundCount = 0;\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  global.beginButton.addEventListener('click', function (event) {\n    if (global.inputField.value) {\n      global.playerLabel.innerText = global.inputField.value;\n    };\n    global.gameBoard.style.display = \"block\";\n    global.beginButton.style.display = \"none\";\n    global.inputField.style.display = \"none\";\n  });\n\n  global.roundCountLabel.addEventListener('onchange', function (e) {\n    if (global.roundCount === 10) {\n      endGame();\n    }\n  });\n\n  global.rock.addEventListener('click', function (event) {\n    var opponentChoice = getOpponentChoice();\n    result = getResult(0, opponentChoice);\n  });\n\n  global.paper.addEventListener('click', function (event) {\n    var opponentChoice = getOpponentChoice();\n    result = getResult(1, opponentChoice);\n  });\n\n  global.scissor.addEventListener('click', function (event) {\n    var opponentChoice = getOpponentChoice();\n    result = getResult(2, opponentChoice);\n  });\n\n  function getResult(playerChoice, opponentChoice) {\n    var result = global.resultMatrix[opponentChoice][playerChoice];\n    if (result === \"win\") {\n      playerScore += 1;\n      global.playerScore.innerText = playerScore;\n    } else if (result === \"lose\") {\n      opponentScore += 1;\n      global.opponentScore.innerText = opponentScore;\n    }\n    setTimeout(clearOpView, 1000);\n    global.roundCount += 1;\n    global.roundCountLabel.innerText = global.roundCount;\n    if (global.roundCount == 10) {\n      endGame();\n    };\n  }\n\n  function clearOpView() {\n    global.opponentChoice.classList = \"\";\n  }\n\n  function getOpponentChoice() {\n    var choice = Math.floor(Math.random() * 3);\n    global.opponentChoice.innerHtml = \"\";\n    global.opponentChoice.classList.add('far');\n    if (choice === 0) {\n      global.opponentChoice.classList.add('fa-hand-rock');\n    } else if (choice === 1) {\n      global.opponentChoice.classList.add('fa-hand-paper');\n    } else {\n      global.opponentChoice.classList.add('fa-hand-scissors');\n    }\n    return choice;\n  }\n\n  function endGame() {\n    alert(\"Game Ended!\");\n    global.roundCount = 0;\n    global.roundCountLabel.innerText = 0;\n  }\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });