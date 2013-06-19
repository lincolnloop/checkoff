define([

  'ember',
  'app/app'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.TemplatesNewController = Ember.ObjectController.extend({
    save: function() {
      this.get('store').save();
      this.transitionToRoute('templates.index');
    },

    cancel: function() {
      this.get('store').get('defaultTransaction').rollback();
      this.transitionToRoute('templates.index');
    }
  });

  return Checkoff.TemplatesNewController;
});
