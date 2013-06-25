define(function (require) {
  'use strict';
  var jQuery = require('jquery'),
      Backbone = require('backbone'),
      log = require('loglevel'),
      Handlebars = require('handlebars'),
      Marionette = require('backbone.marionette'),
      appLayout = require('app/layout');

  var Checkoff = new Marionette.Application({
    /*
     * Establish a few settings.
     */
    VERSION: '0.1.0',
    LOG_ROUTES: true
  });

  Checkoff.addRegions({appRegion: 'body'});

  Checkoff.addInitializer(function (options) {
    if (window.DEBUG) {
      log.setLevel('debug');
    }

    log.debug('-------------------------------');
    log.debug('Checkoff.VERSION: ' + Checkoff.VERSION);
    log.debug('jQuery.VERSION: ' + jQuery().jquery);
    log.debug('Backbone.VERSION: ' + Backbone.VERSION);
    log.debug('Handlebars.VERSION: ' + Handlebars.VERSION);
    log.debug('-------------------------------');

    Backbone.history.start({pushState: true});

    // Show the application Layout
    Checkoff.appRegion.show(appLayout);
  });

  return Checkoff;
});
