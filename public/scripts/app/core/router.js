define(function (require) {
  'use strict';
  var appLayout = require('app/core/views/layout'),
      indexView = require('app/core/views/index'),
      settings = require('app/settings'),
      log = require('loglevel');

  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      '/': 'index',
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
    appRouter.on('route', function (name, params) {
      var msg = '[route] Transitioned to the "' + name + '" route';
      if (params.length) {
        msg += ' with the params "' + params + '"';
      }
      log.debug(msg);
    });
  }

  return appRouter;
});
