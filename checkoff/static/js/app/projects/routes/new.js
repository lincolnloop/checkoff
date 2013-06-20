define(function (require) {
  'use strict';
  var Ember = require('ember'),
    Checkoff = require('app/app');

  require('app/projects/models/project');

  Checkoff.ProjectsNewRoute = Ember.Route.extend({
    model: function () {
      return Checkoff.Project.createRecord();
    }
  });

  return Checkoff.ProjectsNewRoute;
});
