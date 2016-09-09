module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        modernizr: {
            build: {
                "crawl": false,
                "customTests": [],
                "dest": "js/modernizr.js",
                "tests": [
                    "multiplebgs"
                ],
                "options": [
                    "setClasses"
                ],
                "uglify": true
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-modernizr');

    // Default task(s).
    grunt.registerTask('build', ['modernizr']);

};
