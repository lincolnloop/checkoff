define(['app/app', 'ember-data'], function (Checkoff, DS) {
  'use strict';

  Checkoff.Template = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),

    items: DS.hasMany('Checkoff.Item'),
    user: DS.belongsTo('Checkoff.User')
  });

  return Checkoff.Template;
});
