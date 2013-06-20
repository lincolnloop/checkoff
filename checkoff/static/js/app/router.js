define([

  'ember',
  'app/app',
  'app/checklists/routes/base',
  'app/checklists/routes/index',
  'app/checklists/routes/new',
  'app/projects/routes/base',
  'app/projects/routes/index',
  'app/projects/routes/new'

], function (Ember, Checkoff) {
  'use strict';

  Checkoff.Router.reopen({
    location: 'history'
  });

  Checkoff.Router.map(function () {
    this.resource('checklists', function () {
      this.route('new');
      this.route('view', {path: '/:checklist_id'});
      this.route('edit', {path: '/:checklist_id/edit'});
      this.route('delete', {path: '/:checklist_id/delete'});
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
