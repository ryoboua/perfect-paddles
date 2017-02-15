/*  JavaScript Document                      */

$(document).ready(function(){

	screenWidth();

});

function screenWidth(){

  // media query event handler
  if (matchMedia) {
    var mq = window.matchMedia("(min-width: 600px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  // media query change
  function WidthChange(mq) {
    if (mq.matches) {
      // window width is at least 600px
      $('i').removeClass('fa-2x');
    } else {
      // window width is less than 600px
      $('i').addClass('fa-2x');
    }

  }
}
