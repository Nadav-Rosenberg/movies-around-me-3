var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource', 'ui.utils']);

moviesAroundMe.controller('moviesControl', ['OMDb',  'Moviesapi', function(OMDb, Moviesapi) {
  var self = this;
  self.moviesList = []; // [{title: , address: , distance: , imdb: }...];
  self.postcode = "";


  self.findMoviesAroundMe = function() {
    self.moviesList = [];
    $(".loader").fadeIn();
    Moviesapi.getMovies(self.postcode, function(movies) {
      self.moviesList = movies;
      for(var i=0; i < movies.length; i++) {
        OMDb.getRating(movies[i].title.slice(0, -7)).then(function(response) {
          for(var i=0; i < movies.length; i++) {
            if (movies[i].title.slice(0,-7).toLowerCase() == response.data.Title.toLowerCase()) {
                movies[i].poster = response.data.Poster;
              if (response.data.imdbRating !== "N/A") {
                movies[i].imdb = response.data.imdbRating;
              };
            };

            if(i===movies.length-1) {
              $(".loader").fadeOut();
            }
          };
        });
      }
    });
  };


  self.updateMap = function(cinema) {
     $("#map-frame").attr('src', 'https://www.google.com/maps/embed/v1/directions?origin='+self.postcode+'&destination='+cinema+'&key=AIzaSyBCj5rD1yeJmhglY3eapLgqW1GC8WZDoP0')
  }

  $('#postcode').keypress(function(e){
      if(e.which == 13){//Enter key pressed
          self.findMoviesAroundMe();
      }
  });

}]);
