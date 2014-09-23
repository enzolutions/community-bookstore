define([
  'backbone.marionette',
  'twig',
  'text!tmpl/home.html.twig',
  'jquery',
  'bootstrap'

],
function(Marionette, Twig, Home_Tmpl, $){
    'use strict';

  var HomeView = Marionette.ItemView.extend({
    initialize: function() {
      console.log("initialize a Home View");
      $("#home").attr("href","#top");
    },
    onShow: function(){
      $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
      });
      $('#carousel-home').carousel();
      $('#carousel-testimonials').carousel();
    },
    onBeforeDestroy: function(){
      $("#home").attr("href","#");
    },
    template: function(data) {
      var template = Twig.twig({
          data: Home_Tmpl
      });
      return template.render(data);
    }

    
  });

  return HomeView;

});
