define(function (require) {
  'use strict';
  var Backbone = require('backbone'),
      Handlebars = require('handlebars'),
      Marionette = require('backbone.marionette'),
      Checkoff = new Marionette.Application(),
      AppRouter = require('app/router'),
      Logger = require('app/logger'),
      logger = new Logger();

  Checkoff.VERSION = '0.1.0';

  Checkoff.addRegions({
    navRegion: '#nav',
    mainRegion: '#main'
  });

  Checkoff.addInitializer(function (options) {
    logger.debug('-------------------------------');
    logger.debug('Checkoff.VERSION: ' + Checkoff.VERSION);
    logger.debug('jQuery.VERSION: ' + $().jquery);
    logger.debug('Backbone.VERSION: ' + Backbone.VERSION);
    logger.debug('Handlebars.VERSION: ' + Handlebars.VERSION);
    logger.debug('-------------------------------');

    new AppRouter();
    Backbone.history.start({pushState: true});
  });

  return Checkoff;
});
