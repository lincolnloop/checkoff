define([

  'ember',
  'app/app'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.ProjectsDeleteController = Ember.ObjectController.extend({
    delete: function() {
      this.get('model').deleteRecord();
      this.get('store').get('defaultTransaction').commit();
      this.transitionToRoute('projects.index');
    }
  });

  return Checkoff.ProjectsDeleteController;
});
