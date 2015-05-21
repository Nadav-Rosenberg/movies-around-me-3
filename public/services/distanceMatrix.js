'use strict';

var output;

moviesAroundMe.factory('DistanceMatrix', ['$http', function($http) {
    
  return {
    makeRequest: function(me, cinemas) {

      var service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: me,
          destinations: cinemas,
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        }, callback);
  
      function callback(response, status) {
        if (status != google.maps.DistanceMatrixStatus.OK) {
          alert('Error was: ' + status);   
          }
        else {
          console.log(response.rows);
          }   
        }
      }     
  };
}]);