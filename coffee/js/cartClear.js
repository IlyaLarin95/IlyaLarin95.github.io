function cartClear () {

    const cart = document.querySelector('.cart');
    const cartStatus = document.querySelector('.cart__status');
    const cartTotalPrice = document.querySelector('.cart__total-price');
    const cartForm = document.querySelector('.cart__сheckout-form');
    const cartCount = document.querySelector('.header__cart-count');
    const btnClear = document.querySelector('.cart__сheckout-btn');
    const cartWrapper = document.querySelector('.cart__wrapper');
    const cartPrice = document.querySelector('.cart__sum');

    btnClear.addEventListener('click', () => {
        cartWrapper.innerHTML = '';
        cartWrapper.classList.add('hidden');
        cartPrice.innerText = '0';
        cart.classList.add('empty');
        cartTotalPrice.classList.add('none');
        cartForm.classList.add('none');
        cartStatus.classList.remove('none');
        cartCount.innerHTML = '0';
    });
};

cartClear ()