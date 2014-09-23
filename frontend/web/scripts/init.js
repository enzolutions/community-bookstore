require.config({
    baseUrl: '/scripts',

    /* starting point for application */
    deps: ['backbone.marionette', 'bootstrap', 'main'],

    shim: {
        backbone: {
          deps: [
            'underscore',
            'jquery'
          ],
          exports: 'Backbone'
        },
        bootstrap: {
          deps: ['jquery'],
        },
        'backbone.drupal': {
          deps: ['backbone']
        },
        'backbone.drupal.services': {
          deps: ['backbone.drupal']
        },
        main: {
              deps: ['backbone.drupal.services']
        }
      },
      paths: {
        jquery: '../vendor/jquery/jquery',
        backbone: '../vendor/backbone-amd/backbone',
        underscore: '../vendor/underscore-amd/underscore',

        /* alias all marionette libs */
        'backbone.marionette': '../vendor/backbone.marionette/lib/core/backbone.marionette',
        'backbone.wreqr': '../vendor/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter': '../vendor/backbone.babysitter/lib/backbone.babysitter',
        /* backbone.drupal */
        'backbone.drupal': '../vendor/backbone.drupal/backbone.drupal',
        'backbone.drupal.services': '../vendor/backbone.drupal/backbone.drupal.services',

        /* twig.js */
        twig: '../vendor/twig.js/twig',
        /* alias the bootstrap js lib */
        bootstrap: '../vendor/bootstrap-sass/dist/js/bootstrap',

        /* Alias text.js for template loading and shortcut the templates dir to tmpl */
        text: '../vendor/requirejs-text/text',
        tmpl: '../templates',
        action: '../actions',
        view: '../views',
      },
    });
