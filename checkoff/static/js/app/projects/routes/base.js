define(function (require) {
  'use strict';
  var Ember = require('ember'),
    Checkoff = require('app/app');

  Checkoff.ProjectsRoute = Ember.Route.extend({
    renderTemplate: function () {
      this.render('projects/base');  // Adjust the template to render
    }
  });

  return Checkoff.ProjectsRoute;
});
