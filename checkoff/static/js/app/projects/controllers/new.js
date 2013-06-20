define(function (require) {
  'use strict';
  var Ember = require('ember'),
    Checkoff = require('app/app');

  Checkoff.ProjectsNewController = Ember.ObjectController.extend({
    save: function () {
      this.get('store').save();
      this.transitionToRoute('projects.index');
    },

    cancel: function () {
      this.get('store').get('defaultTransaction').rollback();
      this.transitionToRoute('projects.index');
    }
  });

  return Checkoff.ProjectsNewController;
});
