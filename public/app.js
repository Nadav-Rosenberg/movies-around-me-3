var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

moviesAroundMe.controller('moviesControl', ['OMDb', function(OMDb) {
  self = this;
  omdbData: Object;

  var self = this;

  self.updateMovieRating = function(){
    console.log('Movie title: ' + self.movieTitle)
    OMDb.makeRequest(self.movieTitle).then(function(response) {
      self.imdbRating = response.data.imdbRating;
    });
  };
}]);
