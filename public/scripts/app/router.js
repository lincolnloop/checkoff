define(function (require) {
  'use strict';
  var Backbone = require('backbone'),
      AppLayout = require('app/layout'),
      IndexView = require('app/index'),
      appLayout = new AppLayout(),
      indexView = new IndexView();

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
