define(function (require) {
  'use strict';
  var BaseRouter = require('app/base/router'),
      appLayout = require('app/core/views/layout'),
      indexView = require('app/core/views/index'),
      settings = require('app/settings'),
      log = require('loglevel');

  var AppRouter = BaseRouter.extend({
    routes: {
      '': 'index',
      'projects': 'projectsIndex',
      'projects/:id': 'projectDetail'
    },

    index: function () {
      appLayout.mainRegion.show(indexView);
    }
  });

  var appRouter = new AppRouter();

  if (settings.LOG_ROUTES) {
    /*
     * Log routes if the setting is enabled on the Checkoff object
     */
    appRouter.on('route', function (name) {
      log.debug('[route] Transitioned to the "' + name + '" route.');
    });
  }

  return appRouter;
});
