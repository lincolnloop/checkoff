define(function (require) {
  'use strict';
  var Checkoff = require('app/app'),
    DS = require('ember-data');

  Checkoff.User = DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string'),
    isActive: DS.attr('boolean'),

    checklists: DS.hasMany('Checkoff.Checklist'),
    projects: DS.hasMany('Checkoff.Project'),

    fullName: function () {
      return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName')
  });

  return Checkoff.User;
});
