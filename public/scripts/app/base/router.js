define(function (require) {
  'use strict';
  var _ = require('underscore'),
      Backbone = require('backbone'),
      settings = require('app/settings'),
      log = require('loglevel'),

      // Tweaked versions of the regexes in Backbone itself
      optionalParam = /\((.*?)\)/g,
      namedParam    = /(?:\(\?)?:(\w+)/g;
      splatParam    = /\*\w+/g;

  var BaseRouter = Backbone.Router.extend({
    /*
     * A router that implements a reverse function. This will not work with
     * arbitrary regexes, and will simply return nothing in that case. Params
     * and optional params should be an object, splats should be an array.
     *
     * It's important to note that if you have multiple routes pointing to the
     * same method, only the last route defined will be used because of how
     * the Underscore 'invert' function works.
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

    initialize: function () {
      /*
       * Create an inverted map of routes to patterns.
       */
      this.reverseRouteMap = _.invert(this.routes);
    },

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
          log.debug('test');
        }
      }
    }

  });

  return BaseRouter;
});
