define(function (require) {
  'use strict';
  var Ember = require('ember'),
    Checkoff = require('app/app');

  require('app/checklists/models/checklist');

  Checkoff.ChecklistsIndexRoute = Ember.Route.extend({
    model: function () {
      return Checkoff.Checklist.find();
    }
  });

  return Checkoff.ChecklistsIndexRoute;
});
