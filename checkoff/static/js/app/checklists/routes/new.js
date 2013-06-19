define([

  'ember',
  'app/app',
  'app/checklists/models/checklist'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.ChecklistsNewRoute = Ember.Route.extend({
    model: function () {
      return Checkoff.Checklist.createRecord();
    }
  });

  return Checkoff.ChecklistsNewRoute;
});
