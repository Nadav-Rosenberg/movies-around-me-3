'use strict';

moviesAroundMe.factory('OMDb', ['$http', function($http) {
    return {
      makeRequest: function(title) {
        return $http.get('http://www.omdbapi.com/?t=' + title +'&y=&plot=short&r=json&tomatoes=true')
      }
    }
  }]);
