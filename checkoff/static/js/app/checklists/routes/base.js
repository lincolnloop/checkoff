define(function (require) {
  'use strict';
  var Ember = require('ember'),
    Checkoff = require('app/app');

  Checkoff.ChecklistsRoute = Ember.Route.extend({
    renderTemplate: function () {
      this.render('checklists/base');  // Adjust the template to render
    }
  });

  return Checkoff.ChecklistsRoute;
});
