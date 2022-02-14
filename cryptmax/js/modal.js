$(document).ready(function(){
    // Modal

    $('[data-modal=video-play]').on('click', function() {
        $('.overlay, #video').fadeIn('slow');
    });
    $('.video__close').on('click', function() {
        $('.overlay, #video').fadeOut('normal');
    })
    $(window).on('click', function(e) {
        if (e.target.classList.contains('overlay')) {
            $('.overlay, #video').fadeOut('normal');
        }
    });  
});