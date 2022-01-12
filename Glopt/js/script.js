$(document).ready(function(){
    const   menu       = document.querySelector('.menu'),
            hamburger  = document.querySelector('.hamburger'),
            overlay    = document.querySelector('.menu__overlay');
            menuLink   = document.querySelectorAll('.menu__link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active')
        menu.classList.toggle('active')
    });


    overlay.addEventListener('click', () => {
        hamburger.classList.remove('active')
        menu.classList.remove('active')
    });

    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active')
            menu.classList.remove('active');
        })
    });

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #question-form, #consultation-form').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
});

// Phone mask

let elements = document.getElementsByClassName('phone__input');
    for (var i = 0; i < elements.length; i++) {
        new IMask(elements[i], {
            mask: '+0 (000) 000-00-00',
});
}

// Nav scroll trigger

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 740) {
        $('.promo__top').addClass('fixed');
        $('.promo__body').addClass('scroll');
    } else {
        $('.promo__top').removeClass('fixed');
        $('.promo__body').removeClass('scroll');
    }
});