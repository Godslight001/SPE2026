$(document).ready(function() {
  // Collapse the navbar after a nav link is clicked
  $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });

  $('.navbar-brand').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
});