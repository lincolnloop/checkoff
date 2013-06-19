define([

  'ember',
  'app/app',
  'app/projects/models/project'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.ProjectsNewRoute = Ember.Route.extend({
    model: function () {
      return Checkoff.Project.createRecord();
    }
  });

  return Checkoff.ProjectsNewRoute;
});
