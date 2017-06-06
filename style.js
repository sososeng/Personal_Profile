$(document).foundation();
(function ($) {
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
//var navbarHeight = $('.top-bar').outerHeight();
var navbarHeight = 0;

if ($(this).scrollTop() > 0){
  $('.top-bar').css("background-color","white");
}

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

    if (st == 0){
      $('.top-bar').css("background-color","transparent");
      $('.top-bar ul').css("background-color","transparent");
      $('.top-bar').css("box-shadow", "none");
    }else{
      $('.top-bar').css("background-color","white");
      $('.top-bar').css("box-shadow", "0 5px 10px -10px");
    }

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



$('.card').mouseover(function () {
    var $this = $(this);
    if (!$this.is(":animated"))
      $this.effect("bounce", { distance:10,times:1 }, 300);
});





});
}(jQuery));






