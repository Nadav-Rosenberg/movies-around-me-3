'use strict';
    
function angularcallbacks_0(data) {
  var cineWorldCinemas = data.cinemas.map(function(cinema){
    return [cinema.id, cinema.name, cinema.postcode];
  })
};

moviesAroundMe.factory('CineWorld', ['$http', '$q', function($http, $q) {



  return {
    makeRequest: function() {
      return $http.jsonp('http://www.cineworld.co.uk/api/quickbook/cinemas?key=bHmPnV2t&full=true&callback=JSON_CALLBACK').then(function(response){
      	if (typeof response.data === 'object') {
      		return response.data;
      	} else {
      		return $q.reject(response.data);
      	}
      }, function(response) {
      	return $q.reject(response.data);
      });
    }
  }

}]);
    
