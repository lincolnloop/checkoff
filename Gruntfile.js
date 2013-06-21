module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      dev: {
        options: {
          paths: ['public/styles/less']
        },
        files: {
          'public/styles/style.css': 'public/styles/less/style.less'
        }
      }
    },

    handlebars: {
      compile: {
        options: {
          processName: function (sourceFile) {
            return sourceFile.replace(/public\/templates\//, '')
                             .replace(/\.handlebars$/, '');
          }
        },
        files: {
          'public/scripts/app/templates.js': 'public/templates/**/*.handlebars'
        }
      }
    },

    watch: {
      javascript: {
        files: ['public/scripts/**/*.js'],
        options: {livereload: true}
      },
      handlebars: {
        files: 'public/templates/**/*.handlebars',
        tasks: ['handlebars'],
        options: {livereload: true}
      },
      less: {
        files: 'public/styles/less/**/*.less',
        tasks: ['less'],
        options: {livereload: true}
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  grunt.registerTask('default', ['less', 'handlebars', 'watch']);
};
