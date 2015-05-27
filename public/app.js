var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

moviesAroundMe.controller('moviesControl', ['OMDb',  'Moviesapi', function(OMDb, Moviesapi) {
  var self = this;
  self.moviesList = []; // [{title: , cinema: , distance: , rating: }...];
  self.postcode;

  // self.updateMovieRating = function(){
  //   OMDb.makeRequest(self.movieTitle).then(function(response) {
  //     self.imdbRating = response.data.imdbRating;
  //   });
  // };

  self.findCinemas = function() {
    Moviesapi.makeRequest(self.postcode, function(movies) {
      self.moviesList = movies;
      for(var i=0; i < movies.length; i++) {
        OMDb.makeRequest(movies[i].title.slice(0, -7)).then(function(response) {
          for(var i=0; i < movies.length; i++) {
            if (movies[i].title.slice(0,-7).toLowerCase() == response.data.Title.toLowerCase()) {
              movies[i].rating = response.data.imdbRating;
              console.log(movies);
            };
          };
        });
      }
    });
  };

}]);
