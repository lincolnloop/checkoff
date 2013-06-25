define(function (require) {
  'use strict';
  var Backbone = require('backbone');

  require('backbone.relational');

  var Project = Backbone.Model.extend({
    validation: {
      name: {maxLength: 300},
      description: {},
      link: {pattern: 'url'}
    },

    relations: [{
      type: Backbone.HasMany,
      key: 'projectChecklists',
      relatedModel: 'ProjectChecklist',
      reverseRelation: {key: 'project'}
    }]
  });

  return Project;

});
