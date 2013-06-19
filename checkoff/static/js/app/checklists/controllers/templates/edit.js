define([

  'ember',
  'app/app',
  'app/checklists/controllers/template-new'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.TemplatesEditController = Checkoff.TemplatesNewController;

  return Checkoff.TemplatesEditController;
});
