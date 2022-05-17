const logo = document.querySelector('.header__logo');
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

// Hamburger

function hamburger() {
    const headerMain = document.querySelector('.header__main'),
        body = document.querySelector('body'),
        hamburger = document.querySelector('.hamburger'),
        menuLink = document.querySelectorAll('.menu-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active')
        headerMain.classList.toggle('active')
        body.classList.toggle('lock')
        logo.classList.toggle('header__logo-dark')

        // if (headerMain.classList.contains('active')) {
        //     header.classList.add('header-white')
        // } else {
        //     header.classList.remove('header-white')
        // }

        if (header.classList.contains('header-scroll')) {
            logo.classList.add('header__logo-dark')
        }
    });

    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active')
            logo.classList.remove('header__logo-dark')
            headerMain.classList.remove('active');
            // header.classList.remove('header-white');
            body.classList.remove('lock');
        })
    });
};

// Header Scroll

function headerScroll() {

    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;

        if (scrollDistance > headerHeight) {
            header.classList.add('header-scroll')
            logo.classList.add('header__logo-dark')
        } else {
            header.classList.remove('header-scroll')
            logo.classList.remove('header__logo-dark')
        }

    })
}

// Modal

function modalWindow() {
    const btnCallback = document.querySelectorAll('.btn-callback')
    const btnCallbackThanks = document.querySelectorAll('.btn-callback-thanks')
    const overlay = document.querySelector('.overlay')
    const callbackModal = document.querySelector('#callback')
    const thanksModal = document.querySelector('#thanks')
    const closeModalBtn = document.querySelectorAll('.modal__close')

    function openModal() {
        overlay.classList.add('active')
        callbackModal.classList.add('active')
    }

    function openModalThanks() {
        overlay.classList.add('active')
        callbackModal.classList.remove('active')
        thanksModal.classList.add('active')
    }

    function closeModal() {
        overlay.classList.remove('active')
        callbackModal.classList.remove('active')
        thanksModal.classList.remove('active')
    }

    btnCallback.forEach(item => {
        item.addEventListener('click', openModal)
    })

    btnCallbackThanks.forEach(item => {
        item.addEventListener('click', openModalThanks)
    })

    closeModalBtn.forEach(btn => {
        btn.addEventListener('click', closeModal)
    })

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay')) {
            closeModal()
        }
    })
}