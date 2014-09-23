define([
  'backbone.marionette',
  'twig',
  'text!tmpl/user.html.twig'
],
function(Marionette, Twig, User_Tmpl){
    'use strict';

  var UserView = Marionette.ItemView.extend({
    initialize: function() {
      console.log("initialize a User View");
    },
    template: function(data) {
      var template = Twig.twig({
          data: User_Tmpl
      });
      return template.render(data);
    }

    
  });

  return UserView;

});
