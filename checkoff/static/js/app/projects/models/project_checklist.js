define(['app/app', 'ember-data'], function (Checkoff, DS) {
  'use strict';

  Checkoff.ProjectChecklist = DS.Model.extend({
    name: DS.attr('string'),

    project: DS.belongsTo('Checkoff.Project'),
    checklistItems: DS.hasMany('Checkoff.ChecklistItem')
  });

  return Checkoff.ProjectChecklist;
});