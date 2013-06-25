define(function (require) {
  'use strict';
  var Backbone = require('backbone');

  require('backbone.relational');

  var ProjectChecklist = Backbone.Model.extend({
    validation: {
      name: {maxLength: 300}
    },

    relations: [{
      type: Backbone.HasMany,
      key: 'checklistItems',
      relatedModel: 'ChecklistItem',
      reverseRelation: {key: 'projectChecklist'}
    }]
  });

  return ProjectChecklist;

});
