var elementTop = $('.nav').offset().top;

$(window).scroll(function(){
    if( $(window).scrollTop() >= elementTop){
        $('body').addClass('nav_fixed');
    }else{
        $('body').removeClass('nav_fixed');
    }
});

$('.btn-menu').on('click', function(){
    $('.nav').toggleClass('nav-toggle');
})


$(document).ready(function () {
  var mouseX, mousey;
  var ww = $(window).width();
  var wh = $(window).height();
  var deltaX, deltaY;

  $(document).mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    deltaX = ((4 * mouseX) / 600) + 50;
    deltaY = ((54 * mouseY) / 400) + 50;
    console.log(deltaX);

    $(".logo_main").css({
      "background-position": deltaX + "%" + deltaY + "%"
    });
  });
});
