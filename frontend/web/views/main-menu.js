define([
  'backbone.marionette',
  'twig',
  'text!tmpl/main-menu.html.twig'
],
function(Marionette, Twig, MainMenu_Tmpl){
    'use strict';

  var MainMenuView = Marionette.ItemView.extend({
    initialize: function() {
      console.log("initialize a Content View");
    },
    template: function(data) {
      var template = Twig.twig({
          data: MainMenu_Tmpl
      });
      return template.render(data);
    }


  });

  return MainMenuView;

});
