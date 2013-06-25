define(function (require) {
  'use strict';
  var Backbone = require('backbone'),
      Checkoff = require('app/app'),
      appLayout = require('app/layout'),
      indexView = require('app/index'),
      log = require('loglevel');

  var AppRouter = Backbone.Router.extend({
    initialize: function () {},

    routes: {
      '': 'index'
    },

    index: function () {
      appLayout.mainRegion.show(indexView);
    }
  });

  var appRouter = new AppRouter();

  if (Checkoff.LOG_ROUTES) {
    /*
     * Log routes if the setting is enabled on the Checkoff object
     */
    appRouter.on('route', function (name) {
      log.debug('[route] Transitioned to the "' + name + '" route.');
    });
  }

  return appRouter;
});
