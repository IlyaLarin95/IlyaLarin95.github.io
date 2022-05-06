new WOW().init();

// Открытие / закрытие корзины в хедере

function cartToggle() {

    const cartLink    = document.querySelector('.header__cart-link');
    const cartMain    = document.querySelector('.cart');
    const cartClose   = document.querySelector('.cart__close');

    cartLink.addEventListener('click', () => {

        if (cartWrapper.children.length === 0) {
            cartMain.classList.add('empty')
        }
        
        if (cartMain.classList.contains('empty') && cartMain.classList.contains('visible')) {

            cartMain.classList.remove('visible')
            cartMain.classList.remove('empty')

        } else {

            cartMain.classList.toggle('visible')
        }
    });

    cartClose.addEventListener('click', () => {
        if (cartMain.classList.contains('empty') && cartMain.classList.contains('visible')) {

            cartMain.classList.remove('visible')
            cartMain.classList.remove('empty')

        } else {
            cartMain.classList.remove('visible')
        }
    });
}

cartToggle()

// Mask number

var element = document.getElementById('phone');
var maskOptions = {
  mask: '+ {7} (000) 000-00-00'
};
var mask = IMask(element, maskOptions);