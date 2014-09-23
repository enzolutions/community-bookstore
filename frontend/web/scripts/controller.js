define(
  ['backbone.marionette',
    '!action/home',
    '!action/user',
    '!view/header', '!view/footer'

  ],
  function (Marionette, Home, User, HeaderView, FooterView) {
    'use strict';
    var Controller = Marionette.Controller.extend({
      initialize: function (options) {
        // store a regions that will be used to show the stuff rendered by this components
        var region = options.App._regionManager.getRegion('header');
        var headerView = new HeaderView({model: null});
        region.show(headerView);

        // Footer Region
        var region = options.App._regionManager.getRegion('footer');
        var headerView = new FooterView({model: null});
        region.show(headerView);

        this.App = options.App;
      },

      home: function () {
        return Home(this.App);
      },

      user: function () {
        return User(this.App);
      },

    });

    return Controller;
  });
