var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

moviesAroundMe.controller('moviesControl', ['OMDb', function(OMDb) {
  var self = this;
  OMDb.makeRequest();
  self.requestData = OMDb.requestData();
  console.log(self.requestData);
}]);
