define(function (require) {
  'use strict';
  var Checkoff = require('app/app');

  require('app/checklists/routes/base');
  require('app/checklists/routes/index');
  require('app/checklists/routes/new');
  require('app/projects/routes/base');
  require('app/projects/routes/index');
  require('app/projects/routes/new');

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
