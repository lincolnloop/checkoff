define([

  'ember',
  'app/app'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.ProjectsNewController = Ember.ObjectController.extend({
    save: function() {
      this.get('store').save();
      this.transitionToRoute('projects.index');
    },

    cancel: function() {
      this.get('store').get('defaultTransaction').rollback();
      this.transitionToRoute('projects.index');
    }
  });

  return Checkoff.ProjectsNewController;
});
