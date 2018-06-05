module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    const jsFiles = ['*.js', 'tests/**/*.js'];
    const bumpFiles = [
        'package.json',
        'package-lock.json'
    ];

    grunt.initConfig({
        bump: {
            options: {
                files: bumpFiles,
                commitFiles: bumpFiles,
                push: false
            }
        },
        connect: {
            jasmine: {
                livereload: true,
                port: 8000,
                base: '.'
            }
        },
        eslint: {
            target: jsFiles
        },
        jasmine: {
            main: {
                src: [],
                options: {
                    outfile: '_SpecRunner.html',
                    specs: ['tests/**/Spec*.js'],
                    vendor: [
                        'node_modules/jasmine-favicon-reporter/vendor/favico.js',
                        'node_modules/jasmine-favicon-reporter/jasmine-favicon-reporter.js',
                        'tests/dojoConfig.js',
                        'node_modules/dojo/dojo.js',
                        'tests/jasmineAMDErrorChecking.js'
                    ],
                    host: 'http://localhost:8000'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            src: {
                files: jsFiles,
                tasks: [
                    'jasmine:main:build',
                    'eslint'
                ]
            }
        }
    });

    grunt.registerTask('default', [
        'connect',
        'jasmine:main:build',
        'eslint',
        'watch'
    ]);

    grunt.registerTask('travis', [
        'eslint',
        'connect',
        'jasmine'
    ]);
};
