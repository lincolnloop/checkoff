define(function (require) {
  'use strict';
  var Backbone = require('backbone');

  require('backbone.relational');

  var Checklist = Backbone.Model.extend({
    validation: {
      name: {maxLength: 300},
      description: {}
    },

    relations: [{
      type: Backbone.HasMany,
      key: 'items',
      relatedModel: 'Item',
      reverseRelation: {key: 'checklist'}
    }]
  });

  return Checklist;

});
