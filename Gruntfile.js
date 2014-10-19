module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        options: {
          yuicompress: false
        },
        files: {
          "css/paper.css": "less/paper.less"
        }
      },

      dist: {
        options: {
          yuicompress: true
        },
        files: {
          "css/paper.min.css": "less/paper.less"
        }

      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['less']);

};