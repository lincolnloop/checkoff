define(function () {
  'use strict';
  var _ = require('underscore'),
      Logger = function () {};

  _.extend(Logger.prototype, {

    consoleMethod: function (name) {
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
    },

    // An empty function for compatibility
    noop: function () {},

    log: this.consoleMethod('log') || this.noop,
    warn: this.consoleMethod('warn') || this.noop,
    error: this.consoleMethod('error') || this.noop,
    info: this.consoleMethod('info') || this.noop,
    debug: this.consoleMethod('debug') || this.consoleMethod('info') || this.noop

  });

  return Logger;
});
