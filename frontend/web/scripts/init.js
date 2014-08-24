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
              exports: 'jquery'
            }
          },
          paths: {
            jquery: '../vendor/jquery/jquery',
            backbone: '../vendor/backbone-amd/backbone',
            underscore: '../vendor/underscore-amd/underscore',

            /* alias all marionette libs */
            'backbone.marionette': '../vendor/backbone.marionette/lib/core/amd/backbone.marionette',
            'backbone.wreqr': '../vendor/backbone.wreqr/lib/amd/backbone.wreqr',
            'backbone.babysitter': '../vendor/backbone.babysitter/lib/amd/backbone.babysitter',
            /* backbone.drupal */
            'backbone.drupal': '../vendor/backbone.drupal/backbone.drupal',
            'backbone.drupal.services': '../vendor/backbone.drupal/backbone.drupal.services',

            /* twig.js */
            twig: '../vendor/twig.js/twig',
            /* alias the bootstrap js lib */
            bootstrap: 'vendor/bootstrap',

            /* Alias text.js for template loading and shortcut the templates dir to tmpl */
            text: '../vendor/requirejs-text/text',
            tmpl: '../templates',
          },
        });
