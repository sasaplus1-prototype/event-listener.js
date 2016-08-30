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

    switch (arguments.length) {
      case 0:
        return callback.call(this);
      case 1:
        return callback.call(this, arguments[0]);
      case 2:
        return callback.call(this, arguments[0], arguments[1]);
      case 3:
        return callback.call(this, arguments[0], arguments[1], arguments[2]);
      default:
        return callback.apply(this, arguments);
    }
  };

  return on(element, eventName, handler, capture);
}

module.exports = {
  off: off,
  on: on,
  once: once
};
