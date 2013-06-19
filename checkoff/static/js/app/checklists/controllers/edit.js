define([

  'ember',
  'app/app',
  'app/checklists/controllers/new'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.ChecklistsEditController = Checkoff.ChecklistsNewController;

  return Checkoff.ChecklistsEditController;
});
