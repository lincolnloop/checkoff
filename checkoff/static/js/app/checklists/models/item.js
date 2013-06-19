define(['app/app', 'ember-data'], function (Checkoff, DS) {
  'use strict';

  Checkoff.Item = DS.Model.extend({
    text: DS.attr('string'),
    helpText: DS.attr('string'),
    link: DS.attr('string'),

    template: DS.belongsTo('Checkoff.Checklist')
  });

  return Checkoff.Item;
});
