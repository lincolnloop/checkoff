/*
 * This module will house basic configuration for the app, and establish the
 * Checkoff object.
 */
define(function (require) {
  'use strict';
  var Ember = require('ember'),
    DS = require('ember-data');

  // Can be removed when we move to the REST adapter
  require('localstorage_adapter');

  var Checkoff = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true
    // LOG_VIEW_LOOKUPS: true
  });

  // Ember.onerror = function(error) {
  //   Em.$.ajax('/error-notification', 'POST', {
  //     stack: error.stack,
  //     otherInformation: 'exception message'
  //   });
  // }

  Checkoff.VERSION = '0.0.1';

  Checkoff.Store = DS.Store.extend({
    revision: 12,
    adapter: DS.LSAdapter.create()
  });

  return Checkoff;

});
