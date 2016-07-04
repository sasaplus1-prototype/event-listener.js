/*!
 * @license events.js Copyright(c) 2016 sasa+1
 * https://github.com/sasaplus1-prototype/events.js
 * Released under the MIT license.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["events"] = factory();
	else
		root["events"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var off = (typeof removeEventListener !== 'undefined') ?
	  function off(element, eventName, callback, capture) {
	    return element.removeEventListener(eventName, callback, capture);
	  } :
	  function off(element, eventName, callback) {
	    return element.detachEvent('on' + eventName, callback);
	  };

	var on = (typeof addEventListener !== 'undefined') ?
	  function on(element, eventName, callback, capture) {
	    return element.addEventListener(eventName, callback, capture);
	  } :
	  function on(element, eventName, callback) {
	    return element.attachEvent('on' + eventName, callback);
	  };

	function once(element, eventName, callback, capture) {
	  var handler = function() {
	    off(element, eventName, handler, capture);

	    return callback.apply(this, arguments);
	  };

	  return on(element, eventName, handler, capture);
	}

	module.exports = {
	  off: off,
	  on: on,
	  once: once
	};


/***/ }
/******/ ])
});
;