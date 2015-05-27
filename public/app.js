var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

moviesAroundMe.controller('moviesControl', ['OMDb',  'Moviesapi', function(OMDb, Moviesapi) {
  var self = this;
  self.moviesList = []; // [{title: , cinema: , distance: , rating: }...];
  self.postcode;

  // self.updateMovieRating = function(){
  //   OMDb.getRating(self.movieTitle).then(function(response) {
  //     self.imdbRating = response.data.imdbRating;
  //   });
  // };

  self.findMoviesAroundMe = function() {
    Moviesapi.getMovies(self.postcode, function(movies) {
      self.moviesList = movies;
      for(var i=0; i < movies.length; i++) {
        OMDb.getRating(movies[i].title.slice(0, -7)).then(function(response) {
          console.log(response.data);
          console.log(response.data.imdbRating);
          for(var i=0; i < movies.length; i++) {
            if (movies[i].title.slice(0,-7).toLowerCase() == response.data.Title.toLowerCase()) {
              if (response.data.imdbRating !== "N/A") {
                movies[i].rating = response.data.imdbRating;             
              };
            };  
          };
        });
      }
    });
  };

}]);

