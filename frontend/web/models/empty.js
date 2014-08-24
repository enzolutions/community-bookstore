define(["backbone"], function(Backbone ) {

    
      var Empty = Backbone.Model.extend({
    
      initialize: function() {
        console.log("initialize a Empty model");
      },

      defaults: {},
    });

    return Empty;

});
