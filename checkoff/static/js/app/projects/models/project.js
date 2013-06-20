define(function (require) {
  'use strict';
  var Checkoff = require('app/app'),
    DS = require('ember-data');

  Checkoff.Project = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    link: DS.attr('string'),

    checklists: DS.hasMany('Checkoff.ProjectChecklist'),
    user: DS.belongsTo('Checkoff.User')
  });

  return Checkoff.Project;
});
