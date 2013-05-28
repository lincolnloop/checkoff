require.config({
  baseUrl: '/js/vendor',
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

    'foundation/foundation': {
      deps: ['jquery'],
      exports: 'Foundation'
    },
    'foundation/foundation.alerts': ['foundation/foundation'],
    'foundation/foundation.cookie': ['foundation/foundation'],
    'foundation/foundation.dropdown': ['foundation/foundation'],
    'foundation/foundation.forms': ['foundation/foundation'],
    'foundation/foundation.placeholder': ['foundation/foundation'],
    'foundation/foundation.section': ['foundation/foundation'],
    'foundation/foundation.tooltips': ['foundation/foundation'],
    'foundation/foundation.topbar': ['foundation/foundation'],

    'app/templates': {
      deps: ['handlebars', 'ember'],
      exports: 'Ember.TEMPLATES'
    }
  }
});

// Initialize the app.
require([

  'app/app',
  'app/templates',
  'app/models/checklist',
  'app/models/checklist_item',
  'app/models/item',
  'app/models/project',
  'app/models/template',
  'app/models/user',
  'app/views/application',
  'app/controllers/templates/new',
  'app/controllers/templates/edit',
  'app/controllers/templates/delete',
  'app/controllers/projects/new',
  'app/controllers/projects/edit',
  'app/controllers/projects/delete',
  'app/routes'

], function () {});
