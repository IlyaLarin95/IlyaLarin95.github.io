$(document).ready(function(){
    const   menu       = document.querySelector('.hidden-menu'),
            hamburger  = document.querySelector('.hamburger'),
            menuLink   = document.querySelectorAll('.hidden-menu__link');
            body       = document.querySelector('body');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active')
        menu.classList.toggle('active')
        body.classList.toggle('lock')
    });

    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active')
            menu.classList.remove('active');
            body.classList.remove('lock');
        })
    });
});