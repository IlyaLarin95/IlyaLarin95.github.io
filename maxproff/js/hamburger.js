function hamburger() {
    const   menu       = document.querySelector('.hidden-menu'),
            hamburger  = document.querySelector('.hamburger'),
            menuLink   = document.querySelectorAll('.hidden-menu__item');
            calcBtn    = document.querySelector('.calc-btn');
            body       = document.querySelector('body'),
            overlay    = document.querySelector('.hidden-menu__overlay');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active')
        menu.classList.toggle('active')
        body.classList.toggle('lock')
    });

    overlay.addEventListener('click', () => {
        hamburger.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('lock')
    });

    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active')
            menu.classList.remove('active');
            body.classList.remove('lock');
        })
    });
    calcBtn.addEventListener('click', () => {
        hamburger.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('lock')
    });
};

hamburger()
