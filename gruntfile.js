module.exports = function(grunt) {

  // Initializes the Grunt tasks with the following settings
  grunt.initConfig({

    // A list of files, which will be syntax-checked by JSHint
    jshint: {  },

    // Files to be concatenated … (source and destination files)
    concat: {
      options: {
        separator: ';',
        stripBanners: true
      },
      dist: {
        src: ['js/jquery-1.9.1.js',
              'js/devicejs/device.min.js',
              'js/preloader/jquery.queryloader2.js',
              'js/bootstrap/bootstrap.js',
              'js/supersized/jquery.easing.min.js',
              'js/supersized/supersized.3.2.7.min.js',
              'js/supersized/supersized.shutter.min.js',
              'js/sticky/jquery.sticky.js',
              'js/navjs/jquery.nav.js',
              'js/nicescroll/jquery.nicescroll.min.js',
              'js/waypoint/waypoints.min.js',
              'js/gmap/jquery.gmap.min.js',
              'js/magnific-popup/jquery.magnific-popup.min.js',
              'js/masonry/masonry.pkgd.min.js',
              'js/owlcarousel/owl.carousel.js',
              'js/rsvp.js',
              'js/style-swithcer/stylesheet-switcher.js',
              'js/script.js'],
        dest: 'js/main.min.js'
      }
    },

    // … and minified (source and destination files)
    uglify: {
      my_target: {
        files: {
          'js/main.min.js': ['js/main.min.js']
        }
      }  
    },

    // Tasks being executed with 'grunt watch'
    watch: {  },

    // Tasks being executed with 'grunt cssmin'
    cssmin: {
      combine: {
        files: {
          'css/main.min.css': ['css/bootstrap/bootstrap.min.css',
                               'css/supersized/supersized.css',
                               'css/supersized/supersized.shutter.css',
                               'css/animate/animate.css',
                               'css/magnific-popup/magnific-popup.css',
                               'css/owlcarousel/owl.carousel.css',
                               'css/owlcarousel/owl.theme.css',
                               'css/style.css',
                               'css/custom.css',
                               'css/fonts.css']
}
      }
    }

  });

  // Load the plugins that provide the tasks we specified in package.json.
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // This is the default task being executed if Grunt
  // is called without any further parameter.
  grunt.registerTask('default', ['concat', 'uglify','cssmin']);

};