define([

  'ember',
  'app/app',
  'app/checklists/models/checklist'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.ChecklistsIndexRoute = Ember.Route.extend({
    model: function () {
      return Checkoff.Checklist.find();
    }
  });

  return Checkoff.ChecklistsIndexRoute;
});
