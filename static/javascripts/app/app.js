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
  var Checkoff = window.Checkoff = Ember.Application.create();

  Checkoff.VERSION = '0.0.1';

  Checkoff.Store = DS.Store.extend({
    revision: 12,
    adapter: DS.LSAdapter.create()
  });

  return Checkoff;

});
