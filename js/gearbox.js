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
     $('#banner').css('background-position','0px -'+($(window).scrollTop()/2) +'px');

  if ($(window).scrollTop() >= (orgElementTop-70)) {



    $('#menu').css('top','.8em');

    $('.logo').css('height','1.5em');
    $('.logo').css('margin-top','-.3em');
       $('#header-wrapper').css('height','4em');
       $('#header-wrapper').css('background','#225DAE');
      $('#header-wrapper').css('box-shadow','0px 2px 10px');
  } else {

    $('#menu').css('top','2em');
          $('.logo').css('height','2em');
       $('.logo').css('margin-top','');
          $('#header-wrapper').css('height','133');
        $('#header-wrapper').css('background','');
        $('#header-wrapper').css('box-shadow','0px 2px 10px rgba(0,0,0,0)');

  }
});
