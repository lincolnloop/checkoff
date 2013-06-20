define([

  'ember',
  'app/app',

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.ProjectsRoute = Ember.Route.extend({
    renderTemplate: function () {
      this.render('projects/base');  // Adjust the template to render
    }
  });

  return Checkoff.ProjectsRoute;
});
