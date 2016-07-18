    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });



$(window).scroll(function() {

  var orgElementPos = $('#extra').offset();
  orgElementTop = orgElementPos.top;

  if ($(window).scrollTop() >= (orgElementTop)) {

    $('#menu').css('top','.8em');
    $('.logo').css('height','1.5em');
    $('.logo').css('margin-top','-.3em');
       $('#header-wrapper').css('height','4em');
       $('#header-wrapper').css('background','#225DAE');
      $('#header-wrapper').css('	box-shadow','0px 2px 10px ');
  } else {
    // not scrolled past the menu; only show the original menu.

    $('#menu').css('top','2em');
          $('.logo').css('height','2em');
          $('#header-wrapper').css('height','133');
        $('#header-wrapper').css('background','');
        $('#header-wrapper').css('	box-shadow','');

  }
});
