define(
  ['backbone.marionette'
   ,'!view/user'
  ],
    function (Marionette 
          ,UserView) {
        'use strict';

        var User = function (App) {
          // Get region to render
          
            var region = App._regionManager.getRegion('content');

           // statements go here
           console.log("initialize a User Action");
           
             var userView = new UserView({model: null});
             region.show(userView);
           
         
        };

        return User;
      });
