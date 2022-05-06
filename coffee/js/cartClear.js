function cartClear () {

    const cartCount = document.querySelector('.header__cart-count');
    const btnClear = document.querySelector('.cart__сheckout-btn');
    const cartWrapper = document.querySelector('.cart__wrapper');
    const cartPrice = document.querySelector('.cart__sum');

    btnClear.addEventListener('click', () => {
        cartWrapper.innerHTML = '';
        cartPrice.innerText = '0';
        cartCount.innerHTML = '0';
        toggleCartStatus()
    });
};

cartClear ()