define(function (){
    return {
        init: function(RegionManager){

          RegionManager.addRegion('header','#header');

          RegionManager.addRegion('content','#content');

          RegionManager.addRegion('footer','#footer');        
        }
    };
});
