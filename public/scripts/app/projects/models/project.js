define(function (require) {
  'use strict';
  var Backbone = require('backbone');

  var Project = Backbone.Model.extend({
    validation: {
      name: {maxLength: 300},
      description: {},
      link: {pattern: 'url'}
    }
  });

  return Project;

});
