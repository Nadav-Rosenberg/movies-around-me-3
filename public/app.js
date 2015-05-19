var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

moviesAroundMe.controller('moviesControl', ['Search', function(Search) {
  var self = this;

  console.log('Helllloooooooooooooooo!');
  console.log(Search);
}]);
