define([

  'ember',
  'app/app'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.TemplatesDeleteController = Ember.ObjectController.extend({
    delete: function() {
      this.get('model').deleteRecord();
      this.get('store').get('defaultTransaction').commit();
      this.transitionToRoute('templates.index');
    }
  });

  return Checkoff.TemplatesDeleteController;
});
