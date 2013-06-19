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

  // Once the app is more complete, break this apart so that the whole thing
  // doesn't have to be loaded all at once.
  'app/app',
  'app/templates',
  'app/checklists/models/checklist',
  'app/checklists/models/checklist_item',
  'app/checklists/models/item',
  'app/checklists/models/template',
  'app/checklists/controllers/templates/new',
  'app/checklists/controllers/templates/edit',
  'app/checklists/controllers/templates/delete',
  'app/projects/models/project',
  'app/projects/controllers/new',
  'app/projects/controllers/edit',
  'app/projects/controllers/delete',
  'app/auth/models/user',
  'app/router'

], function () {});
