'use strict';

moviesAroundMe.factory('Moviesapi', ['$http', function($http) {

  var movies = [];

  var addMoviesFromCinema = function(response) {
    var size = response.data.length;
    for(var i=0; i < (size - 1); i++) {
      movies.push({title: response.data[i].title, address: response.data[(size -1)].a, distance: response.data[(size -1)].b, imdb: " "});                   
    };
  }

  return {
    getMovies: function(postcode, updateMoviesList) {
      return $http.get('http://aqueous-badlands-8518.herokuapp.com/cinemas/find/' + postcode)
        .then(function(response) { 
          for(var i =0; i < response.data.length; i++) {
          var venue_id = response.data[i].venue_id
          var address = response.data[i].address;
          var distance = response.data[i].distance;
          $http.get('http://aqueous-badlands-8518.herokuapp.com/cinemas/' + 
                     venue_id + '/showings' + '?a=' + address + '&b=' + distance)
            .then(function(response) {
              addMoviesFromCinema(response);
              updateMoviesList(movies);
            });               
        };         
      });
    }
  }


}]);


