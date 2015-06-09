$(document).ready(function() {
  $('#postcode').keypress(function(e){
      if(e.which == 13){//Enter key pressed
        $(".find-movies-button").click()
      }
  });
});
