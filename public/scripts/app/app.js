define(function (require) {
  'use strict';
  var $ = require('jquery'),
      Backbone = require('backbone'),
      Handlebars = require('handlebars'),
      Marionette = require('backbone.marionette'),
      log = require('loglevel'),
      settings = require('app/settings'),
      appLayout = require('app/core/views/layout');

  // Include any requirements that need to be loaded along with the app, like
  // the core router or template helpers.
  // require('app/core/helpers/url');
  require('app/core/router');

  var Checkoff = new Marionette.Application(settings);

  Checkoff.addRegions({appRegion: 'body'});

  Checkoff.addInitializer(function (options) {
    if (window.DEBUG) {
      log.setLevel('debug');
    }

    log.debug('-------------------------------');
    log.debug('Checkoff.VERSION: ' + Checkoff.VERSION);
    log.debug('jQuery.VERSION: ' + $().jquery);
    log.debug('Backbone.VERSION: ' + Backbone.VERSION);
    log.debug('Handlebars.VERSION: ' + Handlebars.VERSION);
    log.debug('-------------------------------');

    Backbone.history.start({pushState: true});

    // Set up the click handler for routes
    $(document).on('click', '#nav a[href]', function (event) {
      var url = $(event.currentTarget).attr('href');

      Backbone.history.navigate(url, {trigger: true});

      event.preventDefault();
    });

    // Show the application Layout
    Checkoff.appRegion.show(appLayout);
  });

  return Checkoff;
});
