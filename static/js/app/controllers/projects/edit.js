define([

  'ember',
  'app/app',
  'app/controllers/projects/new'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.ProjectsEditController = Checkoff.ProjectsNewController;

  return Checkoff.ProjectsEditController;
});
