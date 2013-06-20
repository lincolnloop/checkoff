define(function (require) {
  'use strict';
  var Ember = require('ember'),
    Checkoff = require('app/app');

  Checkoff.ChecklistsDeleteController = Ember.ObjectController.extend({
    delete: function () {
      this.get('model').deleteRecord();
      this.get('store').get('defaultTransaction').commit();
      this.transitionToRoute('checklists.index');
    }
  });

  return Checkoff.ChecklistsDeleteController;
});
