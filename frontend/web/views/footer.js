define([
  'backbone.marionette',
  'twig',
  'text!tmpl/footer.html.twig'
],
function(Marionette, Twig, Footer_Tmpl){
    'use strict';

  var FooterView = Marionette.ItemView.extend({
    initialize: function() {
      console.log("initialize a Footer View");
    },
    template: function(data) {
      var template = Twig.twig({
          data: Footer_Tmpl
      });
      return template.render(data);
    }

    
  });

  return FooterView;

});
