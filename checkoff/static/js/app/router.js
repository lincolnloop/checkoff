define([

  'ember',
  'app/app',
  'app/checklists/routes/templates/index',
  'app/checklists/routes/templates/new',
  'app/projects/routes/index',
  'app/projects/routes/new'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.Router.reopen({
    location: 'history'
  });

  Checkoff.Router.map(function () {
    this.resource('templates', function () {
      this.route('new');
      this.route('view', {path: '/:template_id'});
      this.route('edit', {path: '/:template_id/edit'});
      this.route('delete', {path: '/:template_id/delete'});
    });

    this.resource('projects', function () {
      this.route('new');
      this.route('view', {path: '/:project_id'});
      this.route('edit', {path: '/:project_id/edit'});
      this.route('delete', {path: '/:project_id/delete'});
    });
  });

  return Checkoff.Router;
});
