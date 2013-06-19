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
  'app/checklists/models/item',
  'app/checklists/controllers/new',
  'app/checklists/controllers/edit',
  'app/checklists/controllers/delete',
  'app/projects/models/project',
  'app/projects/models/project_checklist',
  'app/projects/models/checklist_item',
  'app/projects/controllers/new',
  'app/projects/controllers/edit',
  'app/projects/controllers/delete',
  'app/auth/models/user',
  'app/router'

], function () {});
