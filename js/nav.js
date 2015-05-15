$(function() {
  $('ul.nav a').click(function(){
    $('ul.nav li').removeClass('active');
    $(this).parent().addClass('active');
  });
  $('a[href*=#]:not([href=#], .carousel-control)').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 175
        }, 1000);
        return false;
      }
    }
  });
  var navbar = $('.navbar-collapse');
  $(".navbar-nav li a").click(function(event) {
    if(navbar.hasClass('in')){
      navbar.collapse('hide');
    }
  });
});