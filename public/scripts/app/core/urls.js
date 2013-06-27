define(function (require) {
  'use strict';
  var BaseUrls = require('app/base/urls');

  var CoreUrls = BaseUrls.extend({
    urls: {
      'index': '/',
      'projects': 'projects/:id'
    }
  });

  return new CoreUrls();
});
