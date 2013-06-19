define([

  'ember',
  'app/app',
  'app/projects/models/project'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.ProjectsIndexRoute = Ember.Route.extend({
    model: function () {
      return Checkoff.Project.find();
    }
  });

  return Checkoff.ProjectsIndexRoute;
});
