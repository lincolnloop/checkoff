// Just here to handle injecting the livereload snippet - can be removed if
// this is ever added to grunt-contrib-watch, and the grunt-contrib-livereload
// module can then be uninstalled.
var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

// Rewrite requests
var modRewrite = require('connect-modrewrite');

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // This is just a basic static server for development
    connect: {
      server: {
        options: {
          base: 'static',
          middleware: function(connect, options) {
            return [
              connect.logger({immediate: true, format: 'dev'}),
              modRewrite([
                '!\\.html|\\images|\\.js|\\.css|\\ico$ /index.html'
              ]),
              lrSnippet,
              connect.static(options.base)
            ];
          }
        }
      }
    },

    emberTemplates: {
      compile: {
        options: {
          templateName: function(filename) {
            // Infer the name of the template from the filename
            return filename.replace(/\.hbs$/, '')
                           .replace(/^static\/hbs\//, '');
          }
        },
        files: {
          "static/js/app/templates.js": "static/hbs/**/*.hbs"
        }
      }
    },

    compass: {
      dev: {
        options: {
          config: "config.rb"
        }
      }
    },

    watch: {
      javascript: {
        files: 'static/js/**/*.*',
        options: {
          livereload: true
        }
      },

      handlebars: {
        files: 'static/hbs/**/*.hbs',
        tasks: ['emberTemplates'],
        options: {
          livereload: true
        }
      },

      sass: {
        files: 'static/sass/**/*.*',
        tasks: ['compass'],
        options: {
          livereload: true
        }
      },

      index: {
        files: 'static/index.html',
        options: {
          livereload: true
        }
      }

    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-ember-templates');

  grunt.registerTask('develop', ['compass', 'emberTemplates', 'connect', 'watch']);
  grunt.registerTask('default', ['develop']);
};
