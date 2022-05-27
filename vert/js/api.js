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
    });

    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active')
            headerMain.classList.remove('active');
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
        } else {
            header.classList.remove('header-scroll')
        }

    })
}

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
        console.log(e.target)
        if (e.target.classList.contains('overlay')) {
            closeModal()
        }
    })
}

// Accordion
function accordion() {
    const acc = document.querySelectorAll(".accordion__title");

    acc.forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
}