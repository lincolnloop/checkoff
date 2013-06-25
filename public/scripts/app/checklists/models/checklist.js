define(function (require) {
  'use strict';
  var Backbone = require('backbone');

  var Checklist = Backbone.Model.extend({
    validation: {
      name: {maxLength: 300},
      description: {}
    }
  });

  return Checklist;

});
