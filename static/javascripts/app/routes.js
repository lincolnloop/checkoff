define([

  'ember',
  'app/app',
  'app/models/project'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.Router.reopen({
    location: 'history'
  });

  Checkoff.Router.map(function() {
    this.resource('templates', function() {
      this.route('new');
      this.route('view', {path: '/:template_id'});
      this.route('edit', {path: '/:template_id/edit'});
      this.route('delete', {path: '/:template_id/delete'});
    });

    this.resource('projects', function() {
      this.route('new');
      this.route('view', {path: '/:project_id'});
      this.route('edit', {path: '/:project_id/edit'});
      this.route('delete', {path: '/:project_id/delete'});
    });
  });

  Checkoff.TemplatesIndexRoute = Ember.Route.extend({
    model: function() {
      return Checkoff.Template.find();
    }
  });

  Checkoff.TemplatesNewRoute = Ember.Route.extend({
    model: function() {
      return Checkoff.Template.createRecord();
    }
  });

  Checkoff.ProjectsIndexRoute = Ember.Route.extend({
    model: function() {
      return Checkoff.Project.find();
    }
  });

  Checkoff.ProjectsNewRoute = Ember.Route.extend({
    model: function() {
      return Checkoff.Project.createRecord();
    }
  });

  return Checkoff.Router;
});
