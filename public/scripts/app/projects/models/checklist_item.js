define(function (require) {
  'use strict';
  var Backbone = require('backbone');

  require('backbone.relational');

  var ChecklistItem = Backbone.Model.extend({
    validation: {
      order: {pattern: 'number'},
      isDone: {oneOf: [true, false]}
    },

    relations: [{
      type: Backbone.HasOne,
      key: 'item',
      relatedModel: 'Item',
      reverseRelation: {key: 'checklistItems'}
    }]
  });

  return ChecklistItem;

});
