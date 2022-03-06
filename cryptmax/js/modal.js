$(document).ready(function(){
    // Modal

    $('[data-modal=video-play]').on('click', function() {
        $('.overlay, #video').fadeIn('normal');
    });
    $('.video__close').on('click', function() {
        $('.overlay, #video').fadeOut('normal');
    })
    $(window).on('click', function(e) {
        if (e.target.classList.contains('overlay')) {
            $('.overlay, #video').fadeOut('normal');
        }
    });

    $('[data-modal=purchase]').on('click', function() {
        $('.overlay, #purchase').fadeIn('normal');
    });
    $('.purchase__btn_cancel').on('click', function() {
        $('.overlay, #purchase').fadeOut('normal');
    })
    $('.purchase__close').on('click', function() {
        $('.overlay, #purchase').fadeOut('normal');
    })
    $(window).on('click', function(e) {
        if (e.target.classList.contains('overlay')) {
            $('.overlay').fadeOut('normal');
        }
    });

    $('.purchase__btn').on('click', function() {
        $('.thanks').fadeIn('normal');
        $('#purchase').fadeOut('normal');
    });
    $('.thanks__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('normal');
    })
    $(window).on('click', function(e) {
        if (e.target.classList.contains('overlay')) {
            $('.overlay').fadeOut('normal');
            $('.thanks').fadeOut('normal');
        }
    });
});