module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      dev: {
        options: {
          paths: ['checkoff/static/less']
        },
        files: {
          'checkoff/static/css/style.css': 'checkoff/static/less/style.less'
        }
      }
    },

    emberTemplates: {
      compile: {
        options: {
          templateName: function (sourceFile) {
            return sourceFile.replace(/checkoff\/static\/templates\//, '');
          }
        },
        files: {
          'checkoff/static/js/app/templates.js': 'checkoff/static/templates/**/*.handlebars'
        }
      }
    },

    watch: {
      javascript: {
        files: ['checkoff/static/js/**/*.js'],
        options: {livereload: true}
      },
      handlebars: {
        files: 'checkoff/static/templates/**/*.handlebars',
        tasks: ['emberTemplates'],
        options: {livereload: true}
      },
      less: {
        files: 'checkoff/static/less/**/*.less',
        tasks: ['less'],
        options: {livereload: true}
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less', 'emberTemplates', 'watch']);
};
