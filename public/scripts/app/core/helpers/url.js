define(function (require) {
  'use strict';
  var _ = require('underscore'),
      Handlebars = require('handlebars'),
      appRouter = require('app/core/router');

  function urlHelper(name, options) {
    /*
     * A function to look up the url for a route name, optionally with an
     * 'args' option to fill in things like the :id. Any additional options
     * are rendered as <a> attributes.
     */
    var args = [];
    if (_.has(options.hash, 'args')) {
      args = options.hash.args;
      options.hash = _.omit(options.hash, 'args');
    }

    var attrs = _.map(options.hash, function (value, option) {
      return option + '="' + value + '"';
    });

    return new Handlebars.SafeString(
      '<a href="' + name + '" ' + attrs.join(' ') + '>' + options.fn() + '</a>'
    );
  }

  Handlebars.registerHelper('url', urlHelper);

  return urlHelper;
});
