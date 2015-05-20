// 'use strict';

moviesAroundMe.factory('OMDb', ['$http', function($http) {
    var response;
    return {
      makeRequest: function() {
        $http.get('http://www.omdbapi.com/?t=home&y=&plot=short&r=json&tomatoes=true').
        then(function(data){
          response = data;
        });
      },

      requestData: function() {
        return response;
      }
    }
  }]);
