$(document).ready(function(){
    // Modal

    $('.btn-callback').on('click', function() {
        $('.overlay, #callback').fadeIn('normal');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('normal');
    })
    $(window).on('click', function(e) {
        if (e.target.classList.contains('overlay')) {
            $('.overlay').fadeOut('normal');
            $('.thanks').fadeOut('normal');
        }
    });

    $('.btn-callback-thanks').on('click', function() {
        $('.overlay, #thanks').fadeIn('normal');
        $('#callback').fadeOut('normal');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('normal');
    })
    $(window).on('click', function(e) {
        if (e.target.classList.contains('overlay')) {
            $('.overlay').fadeOut('normal');
            $('#thanks').fadeOut('normal');
        }
    });
});
