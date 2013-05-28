define([

  'ember',
  'app/app',
  'app/controllers/templates/new'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.TemplatesEditController = Checkoff.TemplatesNewController;

  return Checkoff.TemplatesEditController;
});
