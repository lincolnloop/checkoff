define(function (require) {
  'use strict';
  var Checkoff = require('app/app'),
    DS = require('ember-data');

  Checkoff.Item = DS.Model.extend({
    text: DS.attr('string'),
    helpText: DS.attr('string'),
    link: DS.attr('string'),

    template: DS.belongsTo('Checkoff.Checklist')
  });

  return Checkoff.Item;
});
