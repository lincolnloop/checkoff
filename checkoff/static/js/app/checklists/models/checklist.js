define(function (require) {
  'use strict';
  var Checkoff = require('app/app'),
    DS = require('ember-data');

  Checkoff.Checklist = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),

    items: DS.hasMany('Checkoff.Item'),
    user: DS.belongsTo('Checkoff.User')
  });

  return Checkoff.Checklist;
});
