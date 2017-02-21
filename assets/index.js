/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var naotu = document.querySelector("#naotu");
var data = [{
    name: 'asdfsdfsaaa',
    child: [{
        name: 'bbbb',
        child: [{
            name: 'bbb-1111',
            child: []
        }]
    }, {
        name: 'cccc',
        child: []
    }]
}];

function extData(data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].name) {
            data[i].show = false;
            data[i].id = Math.random();
        }
        if (data[i].child) {
            extData(data[i].child);
        }
    }
}

extData(data);

function init(data) {
    var span = createIdea(data);
    naotu.appendChild(span);
}

function createIdea(data) {
    var idea = document.createElement('span');
    idea.innerHTML = data.name;
    idea.setAttribute("data", JSON.stringify(data));

    idea.addEventListener('click', function () {
        var child = JSON.parse(idea.getAttribute('data')).child;

        for (var i = 0; i < child.length; i++) {
            if (child[i].name) {
                var si = createIdea(child[i]);
                naotu.appendChild(si);
            }
        }
    });
    return idea;
}

function createLine() {}

init(data[0]);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./style/index.css\""); e.code = 'MODULE_NOT_FOUND';; throw e; }()));

/***/ })
/******/ ]);