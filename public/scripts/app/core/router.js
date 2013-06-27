define(function (require) {
  'use strict';
  var Backbone = require('backbone'),
      Checkoff = require('app/app'),
      coreUrls = require('app/core/urls'),
      appLayout = require('app/core/views/layout'),
      indexView = require('app/core/views/index'),
      log = require('loglevel');

  var routes = {'': 'index'};
  routes[coreUrls.urls['project']] = 'project';

  var AppRouter = Backbone.Router.extend({
    routes: routes,

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
