require.config({
  baseUrl: '/static/js/vendor',
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
    'ember': {
      deps: ['jquery', 'handlebars'],
      exports: 'Ember'
    },
    'ember-data': {
      deps: ['ember'],
      exports: 'DS'
    },
    'localstorage_adapter': {
      deps: ['ember-data'],
      exports: 'DS.LSAdapter'
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

    'app/templates': {
      deps: ['handlebars', 'ember'],
      exports: 'Ember.TEMPLATES'
    }
  }
});

// Initialize the app.
require([

  'jquery',

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

  'app/app',
  'app/templates',
  'app/models/checklist',
  'app/models/checklist_item',
  'app/models/item',
  'app/models/project',
  'app/models/template',
  'app/models/user',
  'app/controllers/templates/new',
  'app/controllers/templates/edit',
  'app/controllers/templates/delete',
  'app/controllers/projects/new',
  'app/controllers/projects/edit',
  'app/controllers/projects/delete',
  'app/routes'

], function () {});
