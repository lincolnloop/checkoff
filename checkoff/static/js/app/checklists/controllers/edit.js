define(function (require) {
  'use strict';
  var Checkoff = require('app/app');

  require('app/checklists/controllers/new');

  Checkoff.ChecklistsEditController = Checkoff.ChecklistsNewController;

  return Checkoff.ChecklistsEditController;
});
