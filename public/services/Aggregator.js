'use strict';

var me = ["SW74LS"]
var cinemas = ["SE19JY", "NW80RJ"]
    
moviesAroundMe.factory('Aggregator', ['CineWorld', 'DistanceMatrix', function(CineWorld, DistanceMatrix) {

  return {
    makeRequest: function() {

      console.log(CineWorld.makeRequest());
      DistanceMatrix.makeRequest(me, cinemas);

    }
  }

}]);