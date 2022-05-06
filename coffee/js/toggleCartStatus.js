function toggleCartStatus() {

    const cart = document.querySelector('.cart');
    const cartWrapper = document.querySelector('.cart__wrapper');
    const cartStatus = document.querySelector('.cart__status');
    const cartCheckoutForm = document.querySelector('.cart__сheckout-form');
    const cartTotalPrice = document.querySelector('.cart__total-price');

    if (cartWrapper.children.length > 0) {    
        cartStatus.classList.add('none');
        cartCheckoutForm.classList.remove('none');
        cartTotalPrice.classList.remove('none');
        cart.classList.remove('empty');
        cartWrapper.classList.remove('hidden');

    } else {
        cartStatus.classList.remove('none');
        cartCheckoutForm.classList.add('none');
        cartTotalPrice.classList.add('none');
        cart.classList.add('empty');
        cartWrapper.classList.add('hidden');
    }
}