define([
  'backbone.marionette',
  'twig',
  'text!tmpl/main.html.twig'
],
function(Marionette, Twig, Main_Tmpl){
    'use strict';

  var MainView = Marionette.ItemView.extend({
    initialize: function() {
      console.log("initialize a Main View");
    },
    template: function(data) {
      var template = Twig.twig({
          data: Main_Tmpl
      });
      return template.render(data);
    }

    
  });

  return MainView;

});
