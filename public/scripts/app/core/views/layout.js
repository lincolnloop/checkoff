define(function (require) {
  'use strict';
  var Marionette = require('backbone.marionette'),
      Templates = require('app/core/templates');

  var AppLayout = Marionette.Layout.extend({
    template: Templates['base'],

    regions: {
      navRegion: '#nav',
      mainRegion: '#main'
    }
  });

  return new AppLayout();
});
