define([
  'backbone.marionette',
  'twig',
  'text!tmpl/header.html.twig',
],
function(Marionette, Twig, Header_Tmpl, MainMenuView){
    'use strict';

  var HeaderView = Marionette.ItemView.extend({
    initialize: function() {
      console.log("initialize a Header View");
    },
    onShow: function(){
      $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });
    },
    template: function(data) {
      var template = Twig.twig({
          data: Header_Tmpl
      });
      return template.render(data);
    }


  });

  return HeaderView;

});
