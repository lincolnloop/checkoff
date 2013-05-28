define(['app/app', 'ember-data'], function (Checkoff, DS) {
  'use strict';

  Checkoff.User = DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string'),
    isActive: DS.attr('boolean'),

    templates: DS.hasMany('Checkoff.Template'),
    projects: DS.hasMany('Checkoff.Project'),

    fullName: function() {
      return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName')
  });

  return Checkoff.User;
});
