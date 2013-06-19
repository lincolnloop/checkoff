define(['app/app', 'ember-data'], function (Checkoff, DS) {
  'use strict';

  Checkoff.ChecklistItem = DS.Model.extend({
    order: DS.attr('number'),
    isDone: DS.attr('boolean'),

    checklist: DS.belongsTo('Checkoff.ProjectChecklist'),
    item: DS.belongsTo('Checkoff.Item')
  });

  return Checkoff.ChecklistItem;
});
