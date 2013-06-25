require.config({
  baseUrl: '/public/scripts/vendor',
  paths: {
    app: '../app'
  },
  shim: {
    'jquery': {
      exports: '$'
    },
    'handlebars': {
      exports: 'Handlebars'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },

    'bootstrap/affix': ['jquery'],
    'bootstrap/alert': ['jquery'],
    'bootstrap/button': ['jquery'],
    'bootstrap/carousel': ['jquery'],
    'bootstrap/collapse': ['jquery'],
    'bootstrap/dropdown': ['jquery'],
    'bootstrap/modal': ['jquery'],
    'bootstrap/popover': ['jquery'],
    'bootstrap/scrollspy': ['jquery'],
    'bootstrap/tab': ['jquery'],
    'bootstrap/tooltip': ['jquery'],
    'bootstrap/transition': ['jquery'],
  }
});

// Initialize the app.
require([
  'app/app',
  'app/router',

  // The order of this is significant
  'bootstrap/transition',
  'bootstrap/alert',
  'bootstrap/button',
  'bootstrap/carousel',
  'bootstrap/collapse',
  'bootstrap/dropdown',
  'bootstrap/modal',
  'bootstrap/tooltip',
  'bootstrap/popover',
  'bootstrap/scrollspy',
  'bootstrap/tab',
  'bootstrap/affix',

], function (Checkoff) {
  'use strict';
  Checkoff.start();
});
