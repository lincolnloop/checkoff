define([

  'ember',
  'app/app'

], function (Ember, Checkoff) {
  'use strict';

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
