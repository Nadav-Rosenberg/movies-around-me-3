describe('App', function() {
  beforeEach(module('MoviesAroundMe'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('moviesControl');
  }));

  it('initialises with an empty postcode and an empty movieList', function() {
    expect(ctrl.moviesList).toEqual([]);
    expect(ctrl.postcode).toEqual("");
  });
});