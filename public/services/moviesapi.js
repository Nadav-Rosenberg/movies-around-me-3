'use strict';

moviesAroundMe.factory('Moviesapi', ['$http', function($http) {

    var postcode = "sw74ls";

    return {
      makeRequest: function(postcode) {
        console.log("hello 1");
        return $http.get('http://aqueous-badlands-8518.herokuapp.com/cinemas/find/sw74ls')
          .then(function(response) {
            console.log("hello 2");
            console.log(response.data);
          });
      }
    }
  }]);