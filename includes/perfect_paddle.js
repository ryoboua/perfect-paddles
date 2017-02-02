/*  JavaScript Document                      */

$(document).ready(function(){

	screenWidth();

});

function screenWidth(){

  // media query event handler
  if (matchMedia) {
    var mq = window.matchMedia("(min-width: 720px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  // media query change
  function WidthChange(mq) {
    if (mq.matches) {
      // window width is at least 500px
      $('i').removeClass('fa-2x');
    } else {
      // window width is less than 500px
      $('i').addClass('fa-2x');
    }

  }
// if (x.matches) {
//   // window width is at least 720px
//   $('i').removeClass('fa-2x');
// } else {
//   // window width is less than 720px
//   $('i').addClass('fa-2x');
// }

}
