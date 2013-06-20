define(function (require) {
  'use strict';
  var Ember = require('ember'),
    Checkoff = require('app/app');

  Checkoff.ChecklistsNewController = Ember.ObjectController.extend({
    save: function () {
      this.get('store').save();
      this.transitionToRoute('checklists.index');
    },

    cancel: function () {
      this.get('store').get('defaultTransaction').rollback();
      this.transitionToRoute('checklists.index');
    }
  });

  return Checkoff.ChecklistsNewController;
});
