define(function (require) {
  'use strict';
  var _ = require('underscore'),
      Backbone = require('backbone'),
      log = require('loglevel'),

      // Copied from backbone.js
      optionalParam = /\((.*?)\)/g,
      namedParam = /(\(\?)?:\w+/g,
      splatParam = /\*\w+/g;

  /*
   * A router that implements a reverse function. This will not work with
   * arbitrary regexes. Params and optional params should be an object,
   * splats should be an array.
   *
   * Usage:
   *
   *     router.reverse(name, [params], [optional], [splat]);
   *
   * Example with parameters:
   *
   *     routes: {
   *       'my/project/:id': 'project'
   *     }
   *
   *     var url = router.reverse('project', {id: '59'});
   *     url == 'my/project/59';
   *
   * Example with parameters and splats:
   *
   *     routes: {
   *       'download/:type/*path'
   *     }
   *
   *     var url = router.reverse('download', {type: song}, ['funky/chicken-dance.mp3']);
   *     url == 'download/song/funky/chicken-dance.mp3';
   */
  var BaseUrls = function (options) {
    options = options || {};
    if (options.urls) {
      this.urls = options.urls;
    }
    this.initialize.apply(this, arguments);
  };

  _.extend(BaseUrls.prototype, {
    initialize: function () {},

    reverse: function (name, params, optional, splat) {
      // Account for the fact that the params or optional args could actually
      // be intended as the splat.
      if (_.isArray(params)) {
        splat = params;
        params = {};
        optional = {};
      } else if (_.isArray(optional)) {
        splat = optional;
        optional = {};
        params = params || {};
      } else {
        params = params || {};
        optional = optional || {};
        splat = splat || [];
      }

      if (_.has(this.reverseRouteMap, name)) {
        var route = this.reverseRouteMap[name];
        if (!_.isRegExp(route)) {
          log('test');
        }
      }
    }

  });

  // Borrow the 'extend' function from Backbone in the same way that
  // Backbone.Model, Backbone.View, etc. does.
  BaseUrls.extend = Backbone.Model.extend;

  return BaseUrls;
});
