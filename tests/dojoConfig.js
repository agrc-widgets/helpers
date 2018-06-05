/* global JasmineFaviconReporter */
window.dojoConfig = {
    baseUrl: '../node_modules',
    packages: [
        'dojo',
        {
            name: 'helpers',
            location: '../'
        }, {
            name: 'stubmodule',
            location: 'stub-module',
            main: 'src/stub-module'
        }
    ],
    has: { 'dojo-undef-api': true }
};

jasmine.getEnv().addReporter(new JasmineFaviconReporter());
