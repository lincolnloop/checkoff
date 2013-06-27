define(function (require) {
  'use strict';
  var jQuery = require('jquery'),
      Backbone = require('backbone'),
      Handlebars = require('handlebars'),
      Marionette = require('backbone.marionette'),
      log = require('loglevel'),
      settings = require('app/settings'),
      appLayout = require('app/core/views/layout');

  // Include any requirements that need to be loaded along with the app, like
  // template helpers.
  require('app/core/helpers/url');

  var Checkoff = new Marionette.Application(settings);

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
