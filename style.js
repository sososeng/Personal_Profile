(function ($) {

  $(document).foundation();
  $(document).ready(function(){
    
  var lastScrollTop = 0;
  $(window).scroll(function(event){
     var st = $(this).scrollTop();
     if (st > lastScrollTop){
        $('.top-bar').slideUp();
     } else {
        $('.top-bar').slideDown();
     }
     lastScrollTop = st;
  });



});
}(jQuery));


//$(document).foundation();



