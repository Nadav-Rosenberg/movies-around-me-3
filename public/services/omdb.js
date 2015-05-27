'use strict';

moviesAroundMe.factory('OMDb', ['$http', function($http) {
    return {
      getRating: function(title) {
        return $http.get('http://www.omdbapi.com/?t=' + title +'&y=&plot=short&r=json&tomatoes=true')
      }
    }
}]);
