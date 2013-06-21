define(function (require) {
  'use strict';
  var _ = require('underscore'),
      Logger = function () {};

  function consoleMethod(name) {
    /*
     * Uniformly apply a console method (taken from Ember)
     */
    if (window.console && window.console[name]) {
      // Older IE doesn't support apply, but Chrome needs it
      if (window.console[name].apply) {
        return function () {
          window.console[name].apply(window.console, arguments);
        };
      } else {
        return function () {
          var message = Array.prototype.join.call(arguments, ', ');
          window.console[name](message);
        };
      }
    }
  }

  // An empty function for compatibility
  function noop() {}

  _.extend(Logger.prototype, {

    log: consoleMethod('log') || noop,
    warn: consoleMethod('warn') || noop,
    error: consoleMethod('error') || noop,
    info: consoleMethod('info') || noop,
    debug: consoleMethod('debug') || consoleMethod('info') || noop

  });

  return new Logger();
});
