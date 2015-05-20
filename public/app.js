var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

moviesAroundMe.controller('moviesControl', ['OMDb', function(OMDb) {

  omdbData: Object;

  var self = this;
  OMDb.makeRequest().then(function(data) {
    console.log(data);
  });
  // console.log(OMDb.makeRequest());

}]);
