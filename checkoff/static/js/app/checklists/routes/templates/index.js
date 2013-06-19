define([

  'ember',
  'app/app',
  'app/checklists/models/template'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.TemplatesIndexRoute = Ember.Route.extend({
    model: function () {
      return Checkoff.Template.find();
    }
  });

  return Checkoff.TemplatesIndexRoute;
});
