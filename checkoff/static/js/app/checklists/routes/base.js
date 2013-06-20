define([

  'ember',
  'app/app',

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.ChecklistsRoute = Ember.Route.extend({
    renderTemplate: function () {
      this.render('checklists/base');  // Adjust the template to render
    }
  });

  return Checkoff.ChecklistsRoute;
});
