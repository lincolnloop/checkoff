define([

  'ember',
  'app/app',
  'app/projects/controllers/new'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.ProjectsEditController = Checkoff.ProjectsNewController;

  return Checkoff.ProjectsEditController;
});
