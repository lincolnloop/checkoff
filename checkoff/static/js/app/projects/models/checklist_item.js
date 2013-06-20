define(function (require) {
  'use strict';
  var Checkoff = require('app/app'),
    DS = require('ember-data');

  Checkoff.ChecklistItem = DS.Model.extend({
    order: DS.attr('number'),
    isDone: DS.attr('boolean'),

    checklist: DS.belongsTo('Checkoff.ProjectChecklist'),
    item: DS.belongsTo('Checkoff.Item')
  });

  return Checkoff.ChecklistItem;
});
