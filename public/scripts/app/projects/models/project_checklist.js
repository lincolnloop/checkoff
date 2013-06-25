define(function (require) {
  'use strict';
  var Backbone = require('backbone');

  var ProjectChecklist = Backbone.Model.extend({
    validation: {
      name: {maxLength: 300}
    }
  });

  return ProjectChecklist;

});
