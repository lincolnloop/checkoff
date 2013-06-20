define(function (require) {
  'use strict';
  var Ember = require('ember'),
    Checkoff = require('app/app');

  Checkoff.ProjectsDeleteController = Ember.ObjectController.extend({
    delete: function () {
      this.get('model').deleteRecord();
      this.get('store').get('defaultTransaction').commit();
      this.transitionToRoute('projects.index');
    }
  });

  return Checkoff.ProjectsDeleteController;
});
