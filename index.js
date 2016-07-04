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

module.exports = {
  off: off,
  on: on
};
