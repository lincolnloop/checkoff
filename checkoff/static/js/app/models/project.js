define(['app/app', 'ember-data'], function (Checkoff, DS) {
  'use strict';

  Checkoff.Project = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    link: DS.attr('string'),

    checklists: DS.hasMany('Checkoff.Checklist'),
    user: DS.belongsTo('Checkoff.User')
  });

  return Checkoff.Project;
});
