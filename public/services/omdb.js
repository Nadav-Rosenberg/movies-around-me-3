'use strict';

moviesAroundMe.factory('OMDb', ['$http', function($http) {
    return {
      makeRequest: function() {
        return $http.get('http://www.omdbapi.com/?t=home&y=&plot=short&r=json&tomatoes=true')
      }
    }
  }]);
