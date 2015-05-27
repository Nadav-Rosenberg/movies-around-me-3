'use strict';

moviesAroundMe.factory('Moviesapi', ['$http', function($http) {

  var movies = [];

    return {
      getMovies: function(postcode, call_me_when_finished) {

        return $http.get('http://aqueous-badlands-8518.herokuapp.com/cinemas/find/' + postcode)
          .then(function(response) { 
            for(var i =0; i < response.data.length; i++) {

                var cinema = response.data[i].address;
                var distance = response.data[i].distance;

                $http.get('http://aqueous-badlands-8518.herokuapp.com/cinemas/' + response.data[i].venue_id + '/showings' + '?a='+ cinema +'&b=' + distance)
                .then(function(response) {
                   var size = response.data.length;
                   for(var i=0; i < (size - 1); i++) {
                     movies.push({title: response.data[i].title, cinema: response.data[(size -1)].a, distance: response.data[(size -1)].b, rating: " "});                   
                     call_me_when_finished(movies);
                   };
                  
                });                
            };
           
          });
      },
    }
  }]);