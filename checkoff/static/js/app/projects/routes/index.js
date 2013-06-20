define(function (require) {
  'use strict';
  var Ember = require('ember'),
    Checkoff = require('app/app');

  require('app/projects/models/project');

  Checkoff.ProjectsIndexRoute = Ember.Route.extend({
    model: function () {
      return Checkoff.Project.find();
    }
  });

  return Checkoff.ProjectsIndexRoute;
});
