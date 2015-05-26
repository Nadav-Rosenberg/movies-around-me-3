'use strict';

moviesAroundMe.factory('OMDb', ['$http', function($http) {
    return {
      makeRequest: function(title) {
        var slicedTitle = title.slice(0, -7);
        return $http.get('http://www.omdbapi.com/?t=' + slicedTitle +'&y=&plot=short&r=json&tomatoes=true')
      }
    }
  }]);
