define([

  'ember',
  'app/app'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.ChecklistsDeleteController = Ember.ObjectController.extend({
    delete: function () {
      this.get('model').deleteRecord();
      this.get('store').get('defaultTransaction').commit();
      this.transitionToRoute('checklists.index');
    }
  });

  return Checkoff.ChecklistsDeleteController;
});
