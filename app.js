$(function () {
    $('#login-show').click(function () {
        $('#login-modal').fadeIn();
    });

    $('.signup-show').click(function () {
        $('#signup-modal').fadeIn();
    });

    $('.close-modal').click(function () {
        $('#login-modal').fadeOut();
        $('#signup-modal').fadeOut();
    });

    $('#top-btn').click(function () {
        $('html, body').animate({
            'scrollTop': 0
        }, 'slow');
        $('html, body').scrollTop(0);
    });

    $('header a').eq(0).click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
          'scrollTop': position
        }, '500')
      })

});
