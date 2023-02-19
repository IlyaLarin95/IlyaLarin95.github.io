// Hamburger

function hamburger() {
    const headerMain = document.querySelector('.header__menu'),
        body = document.querySelector('body'),
        hamburger = document.querySelector('.hamburger'),
        wrapper = document.querySelector('.wrapper'),
        menuLink = document.querySelectorAll('.menu-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active')
        wrapper.classList.toggle('header-active')
        headerMain.classList.toggle('active')
        body.classList.toggle('lock')
    });

    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active')
            headerMain.classList.remove('active');
            wrapper.classList.remove('header-active');
            body.classList.remove('lock');
        })
    });
};

// Header Scroll

function headerScroll() {

    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    const heroSection = document.querySelector('.hero');
    const heroSectionHeight = heroSection.offsetHeight;

    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY - heroSectionHeight;

        if (scrollDistance > headerHeight) {
            header.classList.add('header-scroll')
        } else {
            header.classList.remove('header-scroll')
        }

    })
};

// Modal

function modalWindow() {
    const btnCallback = document.querySelectorAll('.btn-callback')
    const btnCallbackSubmit = document.querySelectorAll('.btn-callback-submit')
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

    btnCallbackSubmit.forEach(item => {
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
};


// Phone Mask

function phoneMask() {
    let phoneMaskAdd = (e) => {

        matrix = "+7 ___ ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            value = e.target.value.replace(/\D/g, "");

        if (def.length >= value.length) value = def;
        e.target.value = matrix.replace(/./g, function (core) {
            return /[_\d]/.test(core) && i < value.length ? value.charAt(i++) : i >= value.length ? "" : core
        });
    }

    let phoneInputs = document.querySelectorAll('[type="tel"]');  // Для всех инпутов с типом "tel"
    phoneInputs.forEach(input => {
        ['input', 'focus', 'blur'].forEach(event => {
            input.addEventListener(event, phoneMaskAdd);
        })
    })
};



const titles = document.querySelectorAll('h2.title')
for (const title of titles) {
    title.setAttribute('data-aos', 'fade-in')
    title.setAttribute('data-aos-anchor-placement', 'center-bottom')
    title.setAttribute('data-aos-offset', '250')
}

AOS.init({
    once: true,
});

