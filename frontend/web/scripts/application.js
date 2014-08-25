define([
	'backbone.marionette',
	'communicator',
  '../views/main-menu',
	'../views/content',
  '../views/footer',
	'../models/empty'
],

function (Marionette, Communicator, MainMenuView, ContentView, FooterView, EmptyModel) {
  'use strict';

  var emptyModel = new EmptyModel();

  // Set a custom data in model to show in template
  emptyModel.set('success', 'Congrats Yeoman for Marionette + Drupal is Working');

  var mainMenuView = new MainMenuView({model: emptyModel});
  var contentView = new ContentView({model: emptyModel});
  var footerView = new FooterView({model: emptyModel});

	var App = new Marionette.Application();

	/* Add application regions here */
	App.addRegions({
    mainMenuRegion: "#main-menu-region",
    contentRegion: "#content-region",
    footerRegion: '#footer-region'
  });

  App.mainMenuRegion.show(mainMenuView);
  App.contentRegion.show(contentView);
  App.footerRegion.show(footerView);

	/* Add initializers here */
	App.addInitializer(function (options) {
		Communicator.mediator.trigger('APP:START');
	});

	return App;
});
