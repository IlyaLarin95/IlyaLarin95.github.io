$(document).ready(function(){
    const   menu       = document.querySelector('.hidden-menu'),
            hamburger  = document.querySelector('.hamburger'),
            overlay    = document.querySelector('.hidden-menu__overlay');
            menuLink   = document.querySelectorAll('.hidden-menu__link');

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
});

// <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>