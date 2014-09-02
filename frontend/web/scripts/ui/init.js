define([
  'backbone',
  'application',
  'jquery',
  'bootstrap'
],
function (Backbone, App, $) {

	console.log('initialize a UI');

	$('#carousel-home').carousel();
	$('#carousel-testimonials').carousel();

});