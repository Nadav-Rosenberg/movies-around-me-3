var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

moviesAroundMe.controller('moviesControl', ['OMDb',  'Moviesapi', function(OMDb, Moviesapi) {
  self = this;
  omdbData: Object;

  var self = this;

  self.updateMovieRating = function(){
    console.log('Movie title: ' + self.movieTitle)
    OMDb.makeRequest(self.movieTitle).then(function(response) {
      self.imdbRating = response.data.imdbRating;
    });
  };

  self.findCinemas = function(call_me_when_finished) {
    Moviesapi.makeRequest("sw74ls", function(cinemas) {
      var count = 0, array_length = cinemas.length;
      for(var i=0; i < cinemas.length; i++) {
          OMDb.makeRequest(cinemas[i][0]).then(function(response) {

            for(var i=0; i < cinemas.length; i++) {
              if (cinemas[i][0].slice(0,-7) == response.data.Title) {
                cinemas[i][3] = response.data.imdbRating;
                console.log(cinemas);

                cinemas.sort(function(a, b) { 
                  return a[3] > b[3] ? 1 : -1;
                });

                console.log(cinemas);

              };
            };
            // console.log(cinemas);  
          });

        count++;

        if (count == array_length)
        {
          call_me_when_finished(cinemas);
        }
      }

    });
  };

  self.findCinemas(function(cinemas) {

  });

}]);
