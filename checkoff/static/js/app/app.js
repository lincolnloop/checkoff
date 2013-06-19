/*
 * This module will house basic configuration for the app, and establish the
 * Checkoff object.
 */

define([

  'ember',
  'ember-data',
  'localstorage_adapter'  // Can be removed when we move to the REST adapter

], function (Ember, DS) {
  'use strict';

  // Sadly, this needs to be global for model associations to work.
  var Checkoff = window.Checkoff = Ember.Application.create({
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
