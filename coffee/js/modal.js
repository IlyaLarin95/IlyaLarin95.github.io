$(document).ready(function(){
    // Modal

    $('.cart__сheckout-btn').on('click', function() {
        $('.thanks, .overlay').fadeIn('normal');
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