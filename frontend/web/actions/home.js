define(
  ['backbone.marionette',
    '!view/home'
  ],
  function (Marionette, HomeView) {
    'use strict';

    var Home = function (App) {

      // Get region to render
      var region = App._regionManager.getRegion('content');
      var homeView = new HomeView({model: null});
      region.show(homeView);

    };

    return Home;
  });
