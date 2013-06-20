define(function (require) {
  'use strict';
  var Checkoff = require('app/app'),
    DS = require('ember-data');

  Checkoff.ProjectChecklist = DS.Model.extend({
    name: DS.attr('string'),

    project: DS.belongsTo('Checkoff.Project'),
    checklistItems: DS.hasMany('Checkoff.ChecklistItem')
  });

  return Checkoff.ProjectChecklist;
});
