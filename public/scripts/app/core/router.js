define(function (require) {
  'use strict';
  var Checkoff = require('app/app'),
      BaseRouter = require('app/core/base_router'),
      appLayout = require('app/core/views/layout'),
      indexView = require('app/core/views/index'),
      log = require('loglevel');

  var AppRouter = BaseRouter.extend({
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
