define(function (require) {
  'use strict';
  var Backbone = require('backbone'),
      appLayout = require('app/layout'),
      indexView = require('app/index');

  var AppRouter = Backbone.Router.extend({
    initialize: function () {},

    routes: {
      '': 'index'
    },

    index: function () {
      appLayout.mainRegion.show(indexView);
    }
  });

  return AppRouter;
});
