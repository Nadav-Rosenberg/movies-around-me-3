var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

moviesAroundMe.controller('moviesControl', ['OMDb',  'Moviesapi', function(OMDb, Moviesapi) {
  self = this;
  omdbData: Object;

  self.moviesList = [];
  // self.movies = [{title: , cinema: , distance: , rating: }, {title: , cinema: , distance: , rating: }...];

  self.updateMovieRating = function(){
    OMDb.makeRequest(self.movieTitle).then(function(response) {
      self.imdbRating = response.data.imdbRating;
    });
  };

  self.findCinemas = function(call_me_when_finished) {
    Moviesapi.makeRequest("sw74ls", function(films) {
      self.movies = films;
      for(var i=0; i < films.length; i++) {
          OMDb.makeRequest(films[i][0]).then(function(response) {

            for(var i=0; i < films.length; i++) {
              if (films[i][0].slice(0,-7) == response.data.Title) {
                films[i][3] = response.data.imdbRating;
                console.log(films);

                films.sort(function(a, b) { 
                  return a[3] > b[3] ? 1 : -1;
                });

                console.log(films);

              };
            };
          });

      }

    });
  };

  self.findCinemas();

}]);
