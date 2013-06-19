define([

  'ember',
  'app/app',
  'app/checklists/models/template'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.TemplatesNewRoute = Ember.Route.extend({
    model: function () {
      return Checkoff.Template.createRecord();
    }
  });

  return Checkoff.TemplatesNewRoute;
});
