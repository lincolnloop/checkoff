define(function (require) {
  'use strict';
  var Checkoff = require('app/app');

  require('app/projects/controllers/new');

  Checkoff.ProjectsEditController = Checkoff.ProjectsNewController;

  return Checkoff.ProjectsEditController;
});
