define(function (require) {
  'use strict';
  var Backbone = require('backbone');

  var ChecklistItem = Backbone.Model.extend({
    validation: {
      order: {pattern: 'number'},
      isDone: {oneOf: [true, false]}
    }
  });

  return ChecklistItem;

});
