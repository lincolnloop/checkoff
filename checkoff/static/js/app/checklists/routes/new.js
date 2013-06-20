define(function (require) {
  'use strict';
  var Ember = require('ember'),
    Checkoff = require('app/app');

  require('app/checklists/models/checklist');

  Checkoff.ChecklistsNewRoute = Ember.Route.extend({
    model: function () {
      return Checkoff.Checklist.createRecord();
    }
  });

  return Checkoff.ChecklistsNewRoute;
});
