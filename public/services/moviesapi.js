'use strict';

moviesAroundMe.factory('Moviesapi', ['$http', function($http) {

  var array = [];

    return {
      makeRequest: function(postcode, call_me_when_finished) {

        return $http.get('http://aqueous-badlands-8518.herokuapp.com/cinemas/find/' + postcode)
          .then(function(response) { 
            var count = 0, response_length = response.data.length;
            for(var i =0; i < response_length; i++) {

                var cinema = response.data[i].title;
                var distance = response.data[i].distance;

                $http.get('http://aqueous-badlands-8518.herokuapp.com/cinemas/' + response.data[i].venue_id + '/showings' + '?a='+ cinema +'&b=' + distance)
                .then(function(response) {
                   var size = response.data.length;
                   for(var i=0; i < (size - 1); i++) {
                     array.push({title: response.data[i].title, cinema: response.data[(size -1)].a, distance: response.data[(size -1)].b});                   
                   };
                  
                  count++;

                  if (count == response_length)
                  {
                    call_me_when_finished(array);
                  }

                });
                
            };
           
          });
      }
    }
  }]);