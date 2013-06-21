define(function (require) {
  'use strict';
  var Backbone = require('backbone'),
      Logger = require('app/logger'),
      Handlebars = require('handlebars'),
      Marionette = require('backbone.marionette'),
      AppRouter = require('app/router'),
      AppLayout = require('app/layout');

  var logger = new Logger(),
      Checkoff = new Marionette.Application(),
      appLayout = new AppLayout();

  Checkoff.VERSION = '0.1.0';

  Checkoff.addRegions({appRegion: 'body'});

  Checkoff.addInitializer(function (options) {
    logger.debug('-------------------------------');
    logger.debug('Checkoff.VERSION: ' + Checkoff.VERSION);
    logger.debug('jQuery.VERSION: ' + $().jquery);
    logger.debug('Backbone.VERSION: ' + Backbone.VERSION);
    logger.debug('Handlebars.VERSION: ' + Handlebars.VERSION);
    logger.debug('-------------------------------');

    // Show the application Layout
    Checkoff.appRegion.show(appLayout);

    new AppRouter();
    Backbone.history.start({pushState: true});
  });

  return Checkoff;
});
