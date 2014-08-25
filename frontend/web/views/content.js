define([
  'backbone.marionette',
  'twig',
  'text!tmpl/content.html.twig'
],
function(Marionette, Twig, Content_Tmpl){
    'use strict';

  var ContentView = Marionette.ItemView.extend({
    initialize: function() {
      console.log("initialize a Content View");
    },
    template: function(data) {
      var template = Twig.twig({
          data: Content_Tmpl
      });
      return template.render(data);
    }


  });

  return ContentView;

});
