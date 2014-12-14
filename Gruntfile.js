'use strict';

var paths = {
  js: ['!bower_components/**', '!public/js/build/**', '*.js', 'routes', 'public/js/*.js'],
  css: ['!bower_components/**', '!public/css/build/**', 'public/css/*.css'],
  html: ['server/views/**']
};

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    assets: grunt.file.readJSON('config/assets.json'),
    clean: ['public/assets/build', 'public/assets/fonts/fontawesome*', 'public/assets/fonts/FontAwesome.otf'],
    copy: {
      main: {
        expand: true,
        flatten: true,
        filter: 'isFile',
        cwd: 'bower_components/font-awesome/fonts/',
        src: '**',
        dest: 'public/assets/fonts/',
      },
    },
    watch: {
      js: {
        files: paths.js,
        tasks: ['jshint'],
        options: {
          livereload: true,
          interval: 500
        }
      },
      css: {
        files: paths.css,
        tasks: ['csslint'],
        options: {
          livereload: true,
          interval: 500
        }
      },
      html: {
        files: paths.html,
        options: {
          livereload: true,
          interval: 500
        }
      }
    },
    jshint: {
      all: {
        src: paths.js,
        options: {
          jshintrc: true
        }
      }
    },
    uglify: {
      core: {
        options: {
          mangle: false
        },
        files: '<%= assets.core.js %>'
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: paths.css
    },
    cssmin: {
      core: {
        files: '<%= assets.core.css %>'
      }
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          args: [],
          ignore: ['node_modules/**'],
          ext: 'js,html',
          nodeArgs: ['--debug'],
          delayTime: 1,
          cwd: __dirname
        }
      }
    },
    concurrent: {
      tasks: ['nodemon', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['clean', 'copy', 'jshint', 'csslint', 'cssmin', 'uglify', 'concurrent']);
};
