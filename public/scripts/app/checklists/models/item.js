define(function (require) {
  'use strict';
  var Backbone = require('backbone');

  var Item = Backbone.Model.extend({
    validation: {
      text: {maxLength: 300},
      helpText: {},
      link: {pattern: 'url'}
    }
  });

  return Item;

});
