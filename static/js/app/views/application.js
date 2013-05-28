define([

  'ember',
  'app/app',
  'foundation/foundation.alerts',
  'foundation/foundation.cookie',
  'foundation/foundation.dropdown',
  'foundation/foundation.forms',
  'foundation/foundation.placeholder',
  'foundation/foundation.section',
  'foundation/foundation.tooltips',
  'foundation/foundation.topbar'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.ApplicationView = Ember.View.extend({
    didInsertElement: function () {
      $(document).foundation();
    }
  });

  return Checkoff.ApplicationView;

});
