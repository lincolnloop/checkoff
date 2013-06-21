define(function (require) {
  'use strict';
  var Templates = require('app/templates'),
      Marionette = require('backbone.marionette');

  var IndexView = Marionette.ItemView.extend({
    template: Templates['index']
  });

  return new IndexView();
});
