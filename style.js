(function ($) {

  $(document).foundation();

  $(document).ready(function(){
    
  /*var lastScrollTop = 0;

  $(window).scroll(function(event){
     var st = $(this).scrollTop();
     if (st > lastScrollTop){
        $('.top-bar').slideUp();
     } else {
        $('.top-bar').slideDown();
     }
     lastScrollTop = st;
  });*/


var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.top-bar').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .MagicMenu-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.top-bar').slideUp();
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.top-bar').slideDown();
        }
    }
    
    lastScrollTop = st;
}


});
}(jQuery));




//$(document).foundation();



